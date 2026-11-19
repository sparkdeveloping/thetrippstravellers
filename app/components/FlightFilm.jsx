export default function FlightFilm() {
  return (
    <section
      className="flight-film"
      id="flight-film"
      aria-labelledby="film-title"
    >
      <div className="film-stage">
        <div className="film-sky" aria-hidden="true"></div>
        <div className="film-map" aria-hidden="true">
          <img
            src="/assets/africa-route.svg"
            alt=""
            width="1000"
            height="900"
          />
          <svg viewBox="0 0 1000 900" fill="none">
            <path
              className="film-grid"
              d="M0 200H1000M0 400H1000M0 600H1000M0 800H1000M200 0V900M400 0V900M600 0V900M800 0V900"
            ></path>
            <path
              className="film-route-base"
              d="M802 248C850 425 625 495 542 690"
            ></path>
            <path id="film-route" d="M802 248C850 425 625 495 542 690"></path>
            <circle cx="802" cy="248" r="7"></circle>
            <circle cx="542" cy="690" r="7"></circle>
            <text x="765" y="218">
              DUBAI
            </text>
            <text x="565" y="720">
              ZIMBABWE
            </text>
            <g id="film-plane">
              <path d="m0-18 5 12 17 8v5L5 3 4 13l5 5v3L0 17l-9 4v-3l5-5L-5 3l-17 4V2l17-8Z"></path>
            </g>
          </svg>
        </div>
        <div className="film-title">
          <p className="eyebrow">EVERY MILE HAS A REASON</p>
          <h2 id="film-title">
            The journey
            <br />
            to their roora.
          </h2>
        </div>
        <div className="film-story">
          <article className="film-beat" data-film-beat="0">
            <span className="eyebrow">26 NOVEMBER · THE DEPARTURE</span>
            <h3>
              It begins
              <br />
              with all of us.
            </h3>
            <p>
              A shared departure. A plane full of anticipation. We’re travelling
              to Zimbabwe to celebrate Natalie and Jordan with the people they
              love.
            </p>
          </article>
          <article className="film-beat" data-film-beat="1">
            <span className="eyebrow">DUBAI · THE PLANNED CONNECTION</span>
            <h3>
              A pause
              <br />
              between worlds.
            </h3>
            <p>
              A little rest before the next takeoff. Our planned Emirates
              journey connects through Dubai; the exact flights and layover
              arrangements will be confirmed at booking.
            </p>
          </article>
          <article className="film-beat" data-film-beat="2">
            <span className="eyebrow">01 DECEMBER · NATALIE &amp; JORDAN</span>
            <h3>
              This is what
              <br />
              the miles are for.
            </h3>
            <p>
              Their roora. Their families. A homecoming that honours their
              roots—and the joy of being there together.
            </p>
          </article>
        </div>
        <figure className="film-memory">
          <img
            src="/assets/story-promise.webp"
            width="900"
            height="1341"
            alt="Natalie and Jordan embracing beside a lake"
            loading="lazy"
            decoding="async"
          />
          <figcaption>A memory from their life together</figcaption>
        </figure>
        <div className="film-rail" aria-label="Journey chapters">
          <button
            type="button"
            data-film-jump="0"
            aria-label="Departure chapter"
            aria-pressed="true"
          >
            <span>Departure</span>
          </button>
          <i aria-hidden="true"></i>
          <button
            type="button"
            data-film-jump="1"
            aria-label="Dubai chapter"
            aria-pressed="false"
          >
            <span>Dubai</span>
          </button>
          <i aria-hidden="true"></i>
          <button
            type="button"
            data-film-jump="2"
            aria-label="Roora chapter"
            aria-pressed="false"
          >
            <span>Their roora</span>
          </button>
        </div>
        <div className="film-controls">
          <button type="button" id="film-play">
            Play journey
          </button>
          <a href="#celebration">Skip to the celebration</a>
          <span className="film-scroll-hint">Scroll to travel</span>
        </div>
        <p className="film-map-note">
          Illustrative route · airports and flights to be confirmed
        </p>
      </div>
    </section>
  );
}
