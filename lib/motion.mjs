export const clamp = (v, min = 0, max = 1) => Math.min(max, Math.max(min, v));
export function smooth(a, b, value) {
  const t = clamp((value - a) / (b - a));
  return t * t * (3 - 2 * t);
}
export function filmFrame(progress) {
  const p = clamp(progress),
    arrival = smooth(0.48, 0.94, p),
    route = smooth(0.1, 0.69, p);
  return {
    progress: p,
    beat: p < 0.27 ? 0 : p < 0.62 ? 1 : 2,
    route,
    skyOpacity: 0.08 + 0.82 * (1 - smooth(0.04, 0.48, p)),
    skyScale: 1 + 0.16 * smooth(0, 0.5, p),
    mapOpacity:
      (0.35 + 0.6 * smooth(0, 0.22, p)) * (1 - 0.9 * smooth(0.6, 0.96, p)),
    mapX: 90 - p * 105,
    mapY: 15 - p * 35,
    mapScale: 1.12 - p * 0.2,
    photoOpacity: smooth(0.5, 0.73, p),
    photoX: 115 * (1 - arrival),
    photoY: 40 * (1 - arrival),
    photoScale: 0.58 + 0.42 * arrival,
    photoAngle: 7 * (1 - arrival),
    photoRadius: 100 * (1 - arrival) + 5,
    titleOpacity: 1 - smooth(0.44, 0.65, p),
  };
}
export function spring(state, target, dt, frequency = 18, damping = 0.88) {
  const time = clamp(dt, 0, 0.05),
    omega = frequency,
    zeta = damping,
    damped = omega * Math.sqrt(1 - zeta * zeta),
    displacement = state.p - target;
  const a = displacement,
    b = (state.v + zeta * omega * displacement) / damped,
    decay = Math.exp(-zeta * omega * time),
    cosine = Math.cos(damped * time),
    sine = Math.sin(damped * time);
  const offset = a * cosine + b * sine;
  return {
    p: target + decay * offset,
    v: decay * (-zeta * omega * offset + damped * (-a * sine + b * cosine)),
  };
}
export function mountCinematic({ moving, announce }) {
  const root = document.documentElement,
    $ = (id) => document.getElementById(id),
    all = (s) => [...document.querySelectorAll(s)];
  const film = $("flight-film"),
    stage = film.querySelector(".film-stage"),
    title = film.querySelector(".film-title"),
    beats = all("[data-film-beat]"),
    rails = all("[data-film-jump]");
  const routePath = $("route-trail"),
    routePlane = $("route-plane"),
    filmPath = $("film-route"),
    filmPlane = $("film-plane");
  const pathLength = routePath.getTotalLength(),
    filmLength = filmPath.getTotalLength();
  routePath.style.strokeDasharray = String(pathLength);
  filmPath.style.strokeDasharray = String(filmLength);
  let routeState = {
      p: 0.025,
      v: 0,
    },
    routeTarget = 0.025,
    scene = {
      p: 0,
      v: 0,
    },
    sceneTarget = 0,
    frame = 0,
    last = 0;
  let dirty = true,
    cinema = false,
    layout = null,
    active = -1,
    playing = null,
    playRequested = false,
    disposed = false;
  const abort = new AbortController(),
    on = (el, event, fn, options = {}) =>
      el.addEventListener(event, fn, {
        ...options,
        signal: abort.signal,
      });
  const properties = {
    skyOpacity: "--sky-opacity",
    skyScale: "--sky-scale",
    mapOpacity: "--map-opacity",
    mapX: "--map-x",
    mapY: "--map-y",
    mapScale: "--map-scale",
    photoOpacity: "--memory-opacity",
    photoX: "--memory-x",
    photoY: "--memory-y",
    photoScale: "--memory-scale",
    photoAngle: "--memory-angle",
    photoRadius: "--memory-radius",
  };
  const units = {
    mapX: "px",
    mapY: "px",
    photoX: "px",
    photoY: "px",
    photoAngle: "deg",
    photoRadius: "px",
  };
  function schedule() {
    if (!disposed && !frame && !document.hidden)
      frame = requestAnimationFrame(tick);
  }
  function pageBox(el) {
    const r = el.getBoundingClientRect();
    return {
      top: r.top + scrollY,
      height: r.height,
    };
  }
  function syncExposure(index) {
    if (index === active) return;
    active = index;
    beats.forEach((beat, i) => {
      const exposed = !cinema || i === index;
      beat.inert = !exposed;
      beat.dataset.active = String(exposed);
      if (exposed) beat.removeAttribute("aria-hidden");
      else beat.setAttribute("aria-hidden", "true");
    });
    rails.forEach((button, i) =>
      button.setAttribute("aria-pressed", String(i === index)),
    );
  }
  function measure() {
    const largeType = parseFloat(getComputedStyle(root).fontSize) >= 24,
      enabled = moving() && innerHeight >= 560 && !largeType;
    if (
      cinema !== enabled ||
      root.dataset.cinema !== (enabled ? "on" : "off") ||
      root.dataset.largeType !== String(largeType)
    ) {
      cinema = enabled;
      root.dataset.cinema = enabled ? "on" : "off";
      root.dataset.largeType = String(largeType);
      active = -1;
      if (!enabled && playing) stop(false);
      dirty = true;
      schedule();
      return false;
    }
    if (!playing) {
      $("film-play").textContent = cinema ? "Play journey" : "Read journey";
      all("[data-watch]").forEach(
        (b) =>
          (b.textContent = cinema ? "Watch the journey" : "Read the journey"),
      );
    }
    layout = {
      hero: pageBox($("top")),
      film: pageBox(film),
      stageHeight: stage.offsetHeight,
      bags: pageBox(document.querySelector(".luggage-scene")),
      looks: pageBox($("roora-attire")),
      celebration: pageBox($("celebration")),
      tape: pageBox(document.querySelector(".measure-art")),
    };
    layout.travel = Math.max(1, layout.film.height - layout.stageHeight);
    dirty = false;
    syncExposure(active < 0 ? 0 : active);
    return true;
  }
  function paintPath(path, plane, length, progress) {
    const distance = clamp(progress) * length,
      p = path.getPointAtLength(distance),
      before = path.getPointAtLength(Math.max(0, distance - 2)),
      after = path.getPointAtLength(Math.min(length, distance + 2));
    const angle =
      (Math.atan2(after.y - before.y, after.x - before.x) * 180) / Math.PI + 90;
    plane.setAttribute(
      "transform",
      `translate(${p.x} ${p.y}) rotate(${angle}) scale(.8)`,
    );
    path.style.strokeDashoffset = String(length - distance);
  }
  function passProgress(box, y) {
    return smooth(
      0,
      1,
      (y + innerHeight * 0.9 - box.top) /
        (innerHeight * 0.7 + box.height * 0.3),
    );
  }
  function render(y) {
    const f = filmFrame(scene.p);
    stage.dataset.progress = f.progress.toFixed(4);
    stage.dataset.activeBeat = String(f.beat);
    if (cinema) {
      for (const [name, css] of Object.entries(properties))
        stage.style.setProperty(css, String(f[name]) + (units[name] || ""));
      title.style.opacity = String(f.titleOpacity);
      title.style.transform = `translateY(${-18 * (1 - f.titleOpacity)}px)`;
      syncExposure(f.beat);
    } else {
      for (const css of Object.values(properties))
        stage.style.removeProperty(css);
      title.style.removeProperty("opacity");
      title.style.removeProperty("transform");
      syncExposure(f.beat);
    }
    paintPath(routePath, routePlane, pathLength, routeState.p);
    paintPath(filmPath, filmPlane, filmLength, cinema ? f.route : 1);
    const go = moving();
    $("top").style.setProperty(
      "--hero-drift",
      go ? `${Math.min(60, y * 0.075)}px` : "0px",
    );
    $("top").style.setProperty(
      "--window-drift",
      go ? `${-Math.min(24, y * 0.04)}px` : "0px",
    );
    document
      .querySelector(".luggage-scene")
      .style.setProperty("--bags", go ? passProgress(layout.bags, y) : 1);
    $("roora-attire").style.setProperty(
      "--pack",
      go ? passProgress(layout.looks, y) : 1,
    );
    $("celebration").style.setProperty(
      "--celebration-scale",
      go ? 1.07 - 0.07 * passProgress(layout.celebration, y) : 1,
    );
    document
      .querySelector(".measure-art")
      .style.setProperty("--tape", go ? passProgress(layout.tape, y) : 1);
    $("site-header").classList.toggle("scrolled", y > 25);
    const max = document.documentElement.scrollHeight - innerHeight;
    $("site-header").style.setProperty(
      "--read",
      String(max > 0 ? clamp(y / max) : 0),
    );
  }
  function tick(now) {
    frame = 0;
    if (disposed || document.hidden) {
      last = 0;
      return;
    }
    if (dirty && !measure()) {
      schedule();
      return;
    }
    if (playRequested) {
      playRequested = false;
      play();
    }
    let y = scrollY;
    const dt = last ? Math.min(0.05, (now - last) / 1000) : 1 / 60;
    last = now;
    if (playing) {
      const elapsed = now - playing.started;
      if (elapsed < 800)
        y =
          playing.from +
          (layout.film.top - playing.from) * smooth(0, 800, elapsed);
      else if (elapsed < 6800)
        y = layout.film.top + layout.travel * smooth(800, 6800, elapsed);
      else
        y =
          layout.film.top +
          layout.travel +
          (layout.celebration.top - 90 - layout.film.top - layout.travel) *
            smooth(6800, 7600, elapsed);
      window.scrollTo({
        top: y,
        behavior: "instant",
      });
      if (elapsed >= 7600) stop(false);
    }
    sceneTarget = cinema ? clamp((y - layout.film.top) / layout.travel) : 1;
    if (!moving()) {
      scene = {
        p: sceneTarget,
        v: 0,
      };
      routeState = {
        p: routeTarget,
        v: 0,
      };
    } else {
      scene = spring(scene, sceneTarget, dt, 20, 0.94);
      routeState = spring(routeState, routeTarget, dt, 18, 0.88);
    }
    if (Math.abs(scene.p - sceneTarget) < 0.00015 && Math.abs(scene.v) < 0.002)
      scene = {
        p: sceneTarget,
        v: 0,
      };
    if (
      Math.abs(routeState.p - routeTarget) < 0.00015 &&
      Math.abs(routeState.v) < 0.002
    )
      routeState = {
        p: routeTarget,
        v: 0,
      };
    render(y);
    const unsettled = scene.p !== sceneTarget || routeState.p !== routeTarget;
    stage.dataset.idle = String(!playing && !unsettled);
    if (playing || unsettled) schedule();
    else last = 0;
  }
  function stop(speak = true) {
    playRequested = false;
    if (!playing) return;
    playing = null;
    root.removeAttribute("data-playing");
    $("film-play").textContent = "Play journey";
    all("[data-watch]").forEach((b) => (b.textContent = "Watch the journey"));
    if (speak) announce("Journey paused. Continue at your own pace.");
  }
  function play() {
    if (!layout || dirty) {
      playRequested = true;
      dirty = true;
      schedule();
      return;
    }
    if (!cinema) {
      film.scrollIntoView({
        behavior: moving() ? "smooth" : "auto",
      });
      announce(
        "Read the complete journey below. Motion is reduced for this view.",
      );
      return;
    }
    if (playing) {
      stop();
      return;
    }
    playing = {
      started: performance.now(),
      from: scrollY,
    };
    root.dataset.playing = "true";
    $("film-play").textContent = "Pause journey";
    all("[data-watch]").forEach((b) => (b.textContent = "Pause journey"));
    schedule();
  }
  all("[data-watch]").forEach((button) => on(button, "click", play));
  on($("film-play"), "click", play);
  rails.forEach((button, i) =>
    on(button, "click", () => {
      stop(false);
      if (cinema && layout) {
        const p = [0.08, 0.44, 0.9][i];
        window.scrollTo({
          top: layout.film.top + layout.travel * p,
          behavior: "instant",
        });
        schedule();
      } else
        beats[i].scrollIntoView({
          behavior: moving() ? "smooth" : "auto",
          block: "center",
        });
    }),
  );
  on(window, "scroll", schedule, {
    passive: true,
  });
  on(
    window,
    "resize",
    () => {
      dirty = true;
      stop(false);
      schedule();
    },
    {
      passive: true,
    },
  );
  for (const event of ["wheel", "touchstart", "pointerdown", "keydown"])
    on(
      window,
      event,
      (e) => {
        if (playing && !e.target.closest?.("[data-watch],#film-play"))
          stop(false);
      },
      {
        passive: event !== "keydown",
      },
    );
  on(document, "motionchange", () => {
    dirty = true;
    stop(false);
    last = 0;
    schedule();
  });
  on(document, "visibilitychange", () => {
    if (document.hidden) {
      stop(false);
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      last = 0;
    } else {
      dirty = true;
      schedule();
    }
  });
  on(window, "pagehide", () => {
    stop(false);
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    last = 0;
  });
  on(window, "pageshow", () => {
    dirty = true;
    schedule();
  });
  const observer = new ResizeObserver(() => {
    dirty = true;
    schedule();
  });
  observer.observe(document.body);
  on(document, "keydown", (e) => {
    if (e.key === "Escape") stop(false);
  });
  root.classList.add("experience-ready");
  schedule();
  return {
    routeTo(value) {
      routeTarget = clamp(value);
      schedule();
    },
    refresh() {
      dirty = true;
      schedule();
    },
    dispose() {
      disposed = true;
      stop(false);
      abort.abort();
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
      root.classList.remove("experience-ready");
      root.removeAttribute("data-cinema");
      beats.forEach((b) => {
        b.inert = false;
        b.removeAttribute("aria-hidden");
      });
    },
  };
}
