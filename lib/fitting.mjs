// The wardrobe shares the scroll rig's camera; this controller only changes
// its three explanatory views. It never stores or submits fitting information.
export function mountFitting(root) {
  const section = root.querySelector("#fitting");
  const tabs = [...section.querySelectorAll("[data-fitting-tab]")];
  const panels = [...section.querySelectorAll('[role="tabpanel"]')];
  const tablist = section.querySelector('[role="tablist"]');
  const abort = new AbortController();
  function select(tab, focus = false) {
    const key = tab.dataset.fittingTab;
    section.dataset.fittingStep = key;
    for (const button of tabs) {
      const active = button === tab;
      button.setAttribute("aria-selected", String(active));
      button.tabIndex = active ? 0 : -1;
    }
    for (const panel of panels) panel.hidden = panel.id !== `fitting-panel-${key}`;
    if (focus) tab.focus({ preventScroll: true });
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => select(tab), { signal: abort.signal });
    tab.addEventListener("keydown", (event) => {
      let next;
      if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
      if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = tabs.length - 1;
      if (next != null) {
        event.preventDefault();
        select(tabs[next], true);
      }
    }, { signal: abort.signal });
  });
  select(tabs[0]);
  tablist.inert = false;
  tablist.removeAttribute("aria-busy");
  return () => {
    abort.abort();
    tablist.inert = true;
    tablist.setAttribute("aria-busy", "true");
  };
}
