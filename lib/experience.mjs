import { mountCinematic } from "./motion.mjs";
import { mountFitting } from "./fitting.mjs";
import { INVITATION_URL, MEASUREMENTS_URL } from "./links.mjs";
import { planBudget, money, planMessage, calendarFile } from "./logic.mjs";
export function mountExperience(root) {
  const abort = new AbortController(),
    timers = new Set(),
    objectUrls = new Set();
  const on = (target, event, callback, options = {}) =>
    target.addEventListener(event, callback, {
      ...options,
      signal: abort.signal,
    });
  const later = (callback, ms) => {
    const timer = setTimeout(() => {
      timers.delete(timer);
      callback();
    }, ms);
    timers.add(timer);
    return timer;
  };
  const $ = (id) => root.querySelector(`#${id}`),
    $$ = (selector) => [...root.querySelectorAll(selector)];
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  let guestReduced = false,
    checklist = {},
    storageAvailable = true;
  try {
    guestReduced = localStorage.getItem("tripps-travellers-motion") === "off";
    const saved = JSON.parse(
      localStorage.getItem("tripps-travellers-checklist") || "{}",
    );
    if (saved && typeof saved === "object" && !Array.isArray(saved))
      checklist = saved;
  } catch {
    storageAvailable = false;
  }
  const moving = () => !reduced.matches && !guestReduced;
  let toastTimer;
  function toast(message) {
    clearTimeout(toastTimer);
    $("toast").textContent = message;
    $("toast").classList.add("show");
    toastTimer = later(() => $("toast").classList.remove("show"), 4500);
  }
  function syncMotion() {
    document.documentElement.dataset.motion = moving() ? "on" : "off";
    document.documentElement.classList.toggle("js-motion", moving());
    $$(".motion-control").forEach((button) => {
      button.setAttribute("aria-pressed", String(!moving()));
      button.textContent = reduced.matches
        ? "Device motion preference active"
        : moving()
          ? "Reduce motion"
          : "Enable motion";
      button.disabled = reduced.matches;
    });
    document.dispatchEvent(new Event("motionchange"));
  }
  $$(".motion-control").forEach((button) =>
    on(button, "click", () => {
      guestReduced = !guestReduced;
      try {
        localStorage.setItem(
          "tripps-travellers-motion",
          guestReduced ? "off" : "on",
        );
      } catch {}
      syncMotion();
    }),
  );
  on(reduced, "change", syncMotion);
  let cinemaRig;
  function flyTo(position) {
    cinemaRig?.routeTo(position);
  }
  const stops = {
    departure: {
      position: 0.025,
      tag: "THE OUTBOUND PLAN",
      title: "Keep November 26 free.",
      copy: "The group plans to depart for Zimbabwe on Friday, November 26, 2027. The departure airport, flight numbers and times will be shared once the booking is confirmed.",
      aside:
        "The return flight departs Zimbabwe on Monday, December 6. Your arrival-home date is still to be confirmed.",
    },
    dubai: {
      position: 0.5,
      tag: "THE PLANNED CONNECTION",
      title: "A pause between takeoffs.",
      copy: "Our planned Emirates itinerary connects through Dubai. The organizer is arranging a hotel stop, shuttle and refreshments so the group can freshen up before continuing.",
      aside:
        "Complimentary Dubai Connect services are conditional. The actual layover, hotel and eligibility need confirmation when the flights are booked.",
    },
    zimbabwe: {
      position: 0.975,
      tag: "THE DESTINATION",
      title: "Make room for the memories.",
      copy: "We’re travelling to celebrate Natalie and Jordan’s roora on Wednesday, December 1, 2027. Their families will gather in Zimbabwe to honour their roots, guided by their elders.",
      aside:
        "The celebration is planned at Natalie’s grandparents’ homestead. Exact address and arrival time will be shared with confirmed guests; flights and arrival dates remain to be confirmed.",
    },
  };
  const stopButtons = $$("[data-stop]");
  function chooseStop(key, focus = false) {
    const stop = stops[key];
    if (!stop) return;
    stopButtons.forEach((button) => {
      const selected = button.dataset.stop === key;
      button.setAttribute("aria-selected", String(selected));
      button.tabIndex = selected ? 0 : -1;
    });
    $("route-panel").setAttribute("aria-labelledby", `stop-${key}`);
    $("route-tag").textContent = stop.tag;
    $("route-title").textContent = stop.title;
    $("route-copy").textContent = stop.copy;
    $("route-aside").textContent = stop.aside;
    flyTo(stop.position);
    if (focus) $(`stop-${key}`).focus();
  }
  stopButtons.forEach((button, index) => {
    on(button, "click", () => chooseStop(button.dataset.stop));
    on(button, "keydown", (event) => {
      let next;
      if (event.key === "ArrowRight") next = (index + 1) % stopButtons.length;
      if (event.key === "ArrowLeft")
        next = (index - 1 + stopButtons.length) % stopButtons.length;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = stopButtons.length - 1;
      if (next != null) {
        event.preventDefault();
        chooseStop(stopButtons[next].dataset.stop, true);
      }
    });
  });
  const menu = root.querySelector(".mobile-menu");
  menu.querySelectorAll("a").forEach((link) =>
    on(link, "click", () => {
      menu.open = false;
    }),
  );
  on(document, "pointerdown", (event) => {
    if (menu.open && !menu.contains(event.target)) menu.open = false;
  });
  on(document, "keydown", (event) => {
    if (event.key === "Escape" && menu.open) {
      menu.open = false;
      menu.querySelector("summary").focus();
    }
  });
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries)
        if (entry.isIntersecting) {
          const id = entry.target.id;
          $$("header nav a").forEach((a) => {
            if (a.hash === `#${id}`) a.setAttribute("aria-current", "location");
            else a.removeAttribute("aria-current");
          });
        }
    },
    {
      rootMargin: "-15% 0px -65% 0px",
      threshold: 0,
    },
  );
  ["celebration", "journey", "pace", "prepare", "fitting", "notes"].forEach(
    (id) => sectionObserver.observe($(id)),
  );

  // The planner uses integer cents. It is a personal sketch, never a payment ledger.
  function updateBudget() {
    try {
      const value = $("saved").value.trim();
      const result = planBudget(
        $("people").value,
        value === "" ? 0 : value,
        root.querySelector("[name=parts]:checked").value,
      );
      $("budget-error").hidden = true;
      const first = result.contributions[0],
        same = result.contributions.every((n) => n === first);
      $("part-amount").textContent =
        result.remaining === 0 ? "$0.00" : money(first);
      $("part-caption").textContent =
        result.remaining === 0
          ? "Your estimated flight amount is set aside."
          : same
            ? `each across ${result.contributions.length} contributions`
            : `up to this amount across ${result.contributions.length} contributions`;
      $("budget-remainder").textContent =
        `${money(result.remaining)} left to set aside · estimated airfare only`;
      $("rounding-note").hidden = same;
      $("rounding-note").textContent = same
        ? ""
        : `Rounded to the cent: ${result.contributions.map(money).join(" · ")}`;
      if ($("pace-track").children.length !== result.contributions.length)
        $("pace-track").replaceChildren(
          ...result.contributions.map((_, index) => {
            const part = document.createElement("i");
            part.style.setProperty("--part", index);
            return part;
          }),
        );
      $("budget-form").dataset.valid = "true";
    } catch (error) {
      $("budget-error").textContent = error.message;
      $("budget-error").hidden = false;
      $("part-amount").textContent = "—";
      $("part-caption").textContent = "Check the amount above.";
      $("budget-remainder").textContent = "";
      $("rounding-note").hidden = true;
      $("budget-form").dataset.valid = "false";
    }
  }
  on($("budget-form"), "input", updateBudget);
  on($("budget-form"), "change", updateBudget);
  on($("budget-form"), "submit", (e) => e.preventDefault());

  // Only checklist ticks and a motion preference persist locally; no names, balances or measurements.
  function updateNotes(save = true) {
    const boxes = $$("[data-check]"),
      done = boxes.filter((box) => box.checked).length;
    $("notes-progress-text").textContent = `${done} of ${boxes.length} ready`;
    $("notes-progress-bar").style.width = `${(done / boxes.length) * 100}%`;
    $$(".notes-count").forEach(
      (el) => (el.textContent = `${done}/${boxes.length}`),
    );
    if (save) {
      checklist = Object.fromEntries(
        boxes.map((box) => [box.dataset.check, box.checked]),
      );
      try {
        localStorage.setItem(
          "tripps-travellers-checklist",
          JSON.stringify(checklist),
        );
      } catch {
        storageAvailable = false;
      }
    }
    if (!storageAvailable)
      $("notes-storage").textContent =
        "Browser storage is unavailable. Your ticks will last for this open page only. The organizer is not notified.";
  }
  $$("[data-check]").forEach((box) => {
    box.checked = checklist[box.dataset.check] === true;
    on(box, "change", () => updateNotes());
  });
  on($("clear-notes"), "click", () => {
    $$("[data-check]").forEach((box) => (box.checked = false));
    updateNotes();
    toast("Your personal checklist has been reset.");
  });
  let dialogOpener = null;
  $$("[data-open]").forEach((button) =>
    on(button, "click", () => {
      dialogOpener = button;
      $(button.dataset.open).showModal();
    }),
  );
  $$("dialog").forEach((dialog) => {
    on(dialog.querySelector("[data-close]"), "click", () => dialog.close());
    on(dialog, "click", (event) => {
      if (event.target === dialog) {
        const r = dialog.getBoundingClientRect();
        if (
          event.clientX < r.left ||
          event.clientX > r.right ||
          event.clientY < r.top ||
          event.clientY > r.bottom
        )
          dialog.close();
      }
    });
    on(dialog, "close", () => {
      if (dialog.id === "start-dialog") {
        $("start-form").reset();
        $("start-result").hidden = true;
        $("start-message").value = "";
      }
      dialogOpener?.focus({
        preventScroll: true,
      });
    });
  });
  $$("[data-wallet]").forEach((button) =>
    on(button, "click", () => {
      const view = button.dataset.wallet,
        roora = view === "roora";
      $("wallet-turn").dataset.view = view;
      $$("[data-wallet]").forEach((b) =>
        b.setAttribute("aria-pressed", String(b === button)),
      );
      for (const [id, exposed] of [
        ["wallet-travel", !roora],
        ["wallet-roora", roora],
      ]) {
        const face = $(id);
        face.inert = !exposed;
        if (exposed) face.removeAttribute("aria-hidden");
        else face.setAttribute("aria-hidden", "true");
      }
    }),
  );
  $$("[data-board]").forEach((button) =>
    on(button, "click", () => {
      const women = button.dataset.board === "women",
        image = $("board-image");
      dialogOpener = button;
      image.src = women
        ? "/assets/attire-women.webp"
        : "/assets/attire-men.webp";
      image.alt = women
        ? "Original women’s olive attire board with ten looks"
        : "Original men’s olive attire board with ten looks";
      image.width = women ? 1199 : 1221;
      image.height = women ? 1312 : 1289;
      $("board-title").textContent = women
        ? "Women’s olive inspiration."
        : "Men’s olive inspiration.";
      $("board-dialog").showModal();
    }),
  );
  async function copyText(text, fallback) {
    try {
      if (!navigator.clipboard?.writeText)
        throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(text);
      toast("Copied. Paste it into your private message.");
    } catch {
      if (fallback) {
        fallback.focus();
        fallback.select();
        toast("Select and copy the message using your device’s copy command.");
      } else
        toast(
          "Copy Nester Gadaga, +263 77 285 3085 from the coordinator details.",
        );
    }
  }
  on($("copy-recipient"), "click", () =>
    copyText("Nester Gadaga\n+263 77 285 3085"),
  );
  $$("[data-copy]").forEach((button) =>
    on(button, "click", () => {
      const area = $(button.dataset.copy);
      copyText(area.value, area);
    }),
  );
  on($("start-form"), "submit", (e) => {
    e.preventDefault();
    if (!$("start-form").reportValidity()) return;
    try {
      $("start-message").value = planMessage(
        $("traveller-name").value,
        $("start-date").value,
      );
      $("start-result").hidden = false;
      $("start-message").focus();
    } catch (error) {
      $("start-date").setCustomValidity(error.message);
      $("start-date").reportValidity();
    }
  });
  on($("start-form"), "input", () => {
    $("start-date").setCustomValidity("");
    $("start-result").hidden = true;
    $("start-message").value = "";
  });
  function download(text, type, name) {
    const url = URL.createObjectURL(
        new Blob([text], {
          type,
        }),
      ),
      link = document.createElement("a");
    objectUrls.add(url);
    link.href = url;
    link.download = name;
    link.click();
    later(() => {
      URL.revokeObjectURL(url);
      objectUrls.delete(url);
    }, 30000);
  }
  $$("[data-calendar]").forEach((button) =>
    on(button, "click", () => {
      download(
        calendarFile(),
        "text/calendar;charset=utf-8",
        "the-tripps-travellers-2027.ics",
      );
      toast(
        "Travel and roora dates downloaded. Open the file to add all three to your calendar.",
      );
    }),
  );
  on($("download-guide"), "click", () =>
    download(
      [
        "THE TRIPPS TRAVELLERS — THE JOURNEY TO THEIR ROORA",
        "",
        "WHY WE ARE GOING",
        "Natalie and Jordan’s roora: Wednesday, December 1, 2027, Zimbabwe.",
        "Already husband and wife, they are returning to their roots to celebrate with family. Elders and designated family representatives will guide traditional proceedings.",
        "Venue: Natalie’s grandparents’ homestead. Exact address and arrival time shared with confirmed guests.",
        `Natalie and Jordan’s invitation: ${INVITATION_URL}`,
        "Guest attire: olive green, traditional African-inspired. Parents/grandparents: ivory or champagne. The couple: chocolate. Modest options welcome.",
        "",
        "PLANNED GROUP TRAVEL",
        "Depart for Zimbabwe: Friday, November 26, 2027.",
        "Depart from Zimbabwe: Monday, December 6, 2027.",
        "Airports, flight times, arrival dates and local itinerary: to be confirmed.",
        "",
        "FLIGHTS & BOOKING",
        "Planned airline: Emirates, via Dubai.",
        "Organizer estimate: approximately US$2,030 per person, round trip. Fare may change.",
        "Booking plan: January 2027. Confirm payment timing privately with the organizer.",
        "Planned checked bags: two, up to 23kg / 50lb each, plus one carry-on subject to airline rules. Confirm the final e-ticket allowance.",
        "Planned Dubai hotel, shuttle and refreshments: conditional on itinerary, fare, availability and entry eligibility. Confirm with Nester at booking.",
        "",
        "FLEXIBLE PAYMENTS",
        "Travel coordinator: Nester Gadaga, +263 77 285 3085.",
        "Western Union: https://www.westernunion.com/us/en/mobile-app.html",
        "WorldRemit: https://www.worldremit.com",
        "Confirm recipient details, delivery method, fees and the holding arrangement privately before sending. Request any required ID privately.",
        "No fixed payment schedule has been specified. Send the organizer your planned start date and a private screenshot/confirmation after every transfer.",
        "",
        "BEFORE DEPARTURE",
        `Choose your look and send clothing measurements through Natalie and Jordan’s Roora Collection form: ${MEASUREMENTS_URL}`,
        "Follow the measurement guidance for your chosen look and complete the form as soon as possible.",
        "",
        "This guide is informational. It does not process payments, issue tickets or keep an official balance.",
      ].join("\n"),
      "text/plain;charset=utf-8",
      "the-tripps-travellers-notes.txt",
    ),
  );
  on(window, "pagehide", () => clearTimeout(toastTimer));
  syncMotion();
  updateBudget();
  updateNotes(false);
  const disposeFitting = mountFitting(root);
  cinemaRig = mountCinematic({
    moving,
    announce: toast,
  });
  $$("form").forEach((form) => {
    form.inert = false;
    form.removeAttribute("aria-busy");
  });
  root.dataset.ready = "true";
  return () => {
    abort.abort();
    sectionObserver.disconnect();
    cinemaRig?.dispose();
    disposeFitting();
    for (const timer of timers) clearTimeout(timer);
    for (const url of objectUrls) URL.revokeObjectURL(url);
    $$("form").forEach((form) => {
      form.inert = true;
      form.setAttribute("aria-busy", "true");
    });
    for (const key of ["motion", "cinema", "largeType", "playing"])
      delete document.documentElement.dataset[key];
    document.documentElement.classList.remove("js-motion");
    delete root.dataset.ready;
  };
}
