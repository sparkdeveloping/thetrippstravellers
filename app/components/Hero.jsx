export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <img
        className="hero-art"
        src="/assets/departure.webp"
        srcSet="/assets/departure-small.webp 900w, /assets/departure.webp 1536w"
        sizes="100vw"
        width="1536"
        height="1024"
        alt=""
        fetchPriority="high"
        decoding="async"
      />
      <div className="hero-shade"></div>
      <div className="hero-content">
        <p className="eyebrow light">
          THE JOURNEY TO NATALIE &amp; JORDAN’S ROORA
        </p>
        <h1 id="hero-title">
          Next stop:
          <br />
          <span>their roora.</span>
        </h1>
        <p className="hero-couple">
          <strong>Natalie &amp; Jordan</strong>
          <span>Wednesday, December 1, 2027 · Zimbabwe</span>
        </p>
        <div className="hero-bottom">
          <p>
            We’re crossing oceans to celebrate love,
            <br />
            family and a homecoming worth every mile.
          </p>
          <div className="hero-actions">
            <button type="button" className="button coral" data-watch>
              Watch the journey
            </button>
            <a href="#pace" className="hero-essentials">
              Go to travel essentials
            </a>
          </div>
        </div>
        <figure className="hero-window">
          <div className="window-rim">
            <img
              src="/assets/story-homecoming.webp"
              width="900"
              height="972"
              alt="Natalie and Jordan standing arm in arm beneath magnolia trees"
              decoding="async"
              fetchPriority="high"
            />
          </div>
          <figcaption>
            <span>THE PEOPLE WE’RE GOING FOR</span>
            <strong>Natalie &amp; Jordan</strong>
          </figcaption>
          <span className="window-shadow" aria-hidden="true"></span>
        </figure>
      </div>
      <div className="flight-strip" aria-label="Travel and roora dates">
        <div className="strip-roora">
          <span className="eyebrow">NATALIE &amp; JORDAN’S ROORA</span>
          <strong>
            01 <span>Dec</span>
          </strong>
          <span>Wednesday, 2027 · Zimbabwe</span>
        </div>
        <div>
          <span className="eyebrow">DEPART FOR ZIMBABWE</span>
          <strong>
            26 <span>Nov</span>
          </strong>
          <span>Friday, 2027</span>
        </div>
        <div>
          <span className="eyebrow">DEPART FROM ZIMBABWE</span>
          <strong>
            06 <span>Dec</span>
          </strong>
          <span>Monday, 2027</span>
        </div>
        <div className="strip-save">
          <button type="button" data-calendar className="text-button">
            Save travel &amp; roora dates{" "}
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 5h14v15H5zM8 3v4m8-4v4M5 10h14m-9 4 2 2 3-3"></path>
            </svg>
          </button>
          <span>Emirates via Dubai planned · booking pending</span>
        </div>
      </div>
      <span className="hero-art-caption">ILLUSTRATIVE JOURNEY ARTWORK</span>
    </section>
  );
}
