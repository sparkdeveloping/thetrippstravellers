export default function Celebration() {
  return (
    <section
      className="celebration section"
      id="celebration"
      aria-labelledby="celebration-title"
    >
      <div className="celebration-photo">
        <img
          src="/assets/story-homecoming.webp"
          width="900"
          height="972"
          alt="Natalie and Jordan standing together beneath magnolia trees"
          loading="lazy"
          decoding="async"
        />
        <span className="photo-label">NATALIE &amp; JORDAN</span>
      </div>
      <div className="celebration-copy">
        <p className="eyebrow">THE REASON WE’RE GOING</p>
        <h2 id="celebration-title">
          For their love.
          <br />
          <span>For their roots.</span>
        </h2>
        <p className="roora-definition">
          Natalie and Jordan are already husband and wife. On December 1,
          they’re returning to their roots for their roora: a traditional
          celebration with family at the heart of it.
        </p>
        <p>
          As they describe it, roora honours the joining of two families through
          respectful introductions, discussions and traditional proceedings.
          Their family elders and designated representatives will guide the
          occasion.
        </p>
        <p className="small">
          We’re travelling to be there for them. The gathering is planned at
          Natalie’s grandparents’ homestead; exact location, time and arrival
          instructions will be shared with confirmed guests.
        </p>
        <a
          className="underlink"
          href="https://thetrippsroora.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Natalie &amp; Jordan’s invitation
        </a>
      </div>
      <div className="arrival-wallet">
        <div className="wallet-heading">
          <span className="eyebrow">THE DATES THAT BRING US TOGETHER</span>
          <div
            className="wallet-tabs"
            role="group"
            aria-label="Travel wallet view"
          >
            <button type="button" data-wallet="travel" aria-pressed="true">
              Travel window
            </button>
            <button type="button" data-wallet="roora" aria-pressed="false">
              Roora day
            </button>
          </div>
        </div>
        <div className="wallet-perspective">
          <div className="wallet-turn" id="wallet-turn">
            <div className="wallet-face wallet-front" id="wallet-travel">
              <span className="eyebrow">
                THE TRIPPS TRAVELLERS · GROUP PLAN
              </span>
              <div className="wallet-dates">
                <div>
                  <span>DEPART</span>
                  <strong>26 NOV</strong>
                  <small>Friday</small>
                </div>
                <i aria-hidden="true"></i>
                <div className="wallet-roora">
                  <span>THEIR ROORA</span>
                  <strong>01 DEC</strong>
                  <small>Wednesday</small>
                </div>
                <i aria-hidden="true"></i>
                <div>
                  <span>RETURN DEPARTURE</span>
                  <strong>06 DEC</strong>
                  <small>Monday</small>
                </div>
              </div>
              <p>Zimbabwe · 2027 · flights pending confirmation</p>
            </div>
            <div
              className="wallet-face wallet-back"
              id="wallet-roora"
              inert
              aria-hidden="true"
            >
              <div>
                <span className="eyebrow">WEDNESDAY · 01 DECEMBER 2027</span>
                <strong>Natalie &amp; Jordan’s roora</strong>
                <p>Traditional proceedings followed by a family celebration.</p>
              </div>
              <div className="wallet-location">
                <span>THE PLACE</span>
                <b>Natalie’s grandparents’ homestead</b>
                <p>
                  Exact address and arrival time shared with confirmed guests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
