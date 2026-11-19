export default function Header() {
  return (
    <>
      <a href="#journey" className="skip">
        Skip to travel information
      </a>
      <header className="header" id="site-header">
        <a
          className="brand"
          href="#top"
          aria-label="The Tripps Travellers, back to top"
        >
          <svg viewBox="0 0 48 48" aria-hidden="true">
            <path d="M8 30 40 10 28 40l-5-13-15 3Z"></path>
            <path d="m23 27 17-17"></path>
          </svg>
          <span>
            THE TRIPPS
            <br />
            <b>TRAVELLERS</b>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Main">
          <a href="#celebration">Their roora</a>
          <a href="#journey">The journey</a>
          <a href="#pace">Your pace</a>
          <a href="#prepare">Get ready</a>
        </nav>
        <button
          className="motion-control header-motion"
          type="button"
          aria-pressed="false"
        >
          Reduce motion
        </button>
        <a href="#notes" className="header-action">
          My trip notes{" "}
          <span
            className="notes-count"
            aria-label="Completed preparation steps"
          >
            0/6
          </span>
        </a>
        <details className="mobile-menu">
          <summary>Menu</summary>
          <nav aria-label="Mobile">
            <a href="#celebration">Their roora</a>
            <a href="#journey">The journey</a>
            <a href="#pace">Your pace</a>
            <a href="#prepare">Get ready</a>
            <a href="#notes">My trip notes</a>
            <button
              className="motion-control"
              type="button"
              aria-pressed="false"
            >
              Reduce motion
            </button>
          </nav>
        </details>
        <div className="reading-progress" aria-hidden="true"></div>
      </header>
    </>
  );
}
