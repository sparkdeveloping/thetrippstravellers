export default function Preparation() {
  return (
    <section
      className="prepare section"
      id="prepare"
      aria-labelledby="prepare-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">TRAVEL LIGHT. ARRIVE READY.</p>
          <h2 id="prepare-title">
            The details,
            <br />
            <span>before departure.</span>
          </h2>
        </div>
        <p>
          A little preparation for the flight. Something olive for their roora.
          More room to enjoy being there.
        </p>
      </div>
      <div className="baggage-layout">
        <div className="luggage-scene" aria-hidden="true">
          <div className="luggage-grid"></div>
          <span className="luggage-caption">THE PLANNED LUGGAGE ALLOWANCE</span>
          <div className="case case-large">
            <i className="handle"></i>
            <i className="case-rib"></i>
            <i className="case-rib"></i>
            <i className="case-rib"></i>
            <span className="luggage-label">
              23<span>KG</span>
            </span>
            <i className="wheel left"></i>
            <i className="wheel right"></i>
          </div>
          <div className="case case-second">
            <i className="handle"></i>
            <i className="case-rib"></i>
            <i className="case-rib"></i>
            <i className="case-rib"></i>
            <span className="luggage-label">
              23<span>KG</span>
            </span>
            <i className="wheel left"></i>
            <i className="wheel right"></i>
          </div>
          <div className="bag-tag">
            ZIMBABWE
            <br />
            <b>2027</b>
          </div>
        </div>
        <div className="baggage-copy">
          <h3>Room for what matters.</h3>
          <div className="allowance">
            <strong>Two checked bags.</strong>
            <span>Planned maximum: 23kg / 50lb each.</span>
          </div>
          <div className="allowance">
            <strong>One carry-on.</strong>
            <span>Subject to Emirates’ cabin size and weight rules.</span>
          </div>
          <p>
            Weigh each bag before leaving home to help avoid overweight charges
            and check-in delays.
          </p>
          <p className="small">
            The group estimate includes these bags. Your confirmed allowance
            depends on the route and fare printed on your e-ticket.
          </p>
          <a
            className="underlink"
            href="https://www.emirates.com/us/english/before-you-fly/baggage/checked-baggage/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check Emirates’ baggage guidance
          </a>
        </div>
      </div>
      <div className="layover-note">
        <span className="layover-mark" aria-hidden="true">
          <svg viewBox="0 0 64 64">
            <path d="M7 43h50M12 43V30h40v13M17 30V18h30v12M21 18V9m22 9V9M18 50v6m28-6v6M23 24h5m8 0h5"></path>
          </svg>
        </span>
        <div>
          <p className="eyebrow">A PAUSE IN DUBAI</p>
          <h3>Time to reset, before the next takeoff.</h3>
          <p>
            The organizer’s plan includes a hotel stop, shuttle transport and
            refreshments during the layover. Complimentary Dubai Connect
            benefits depend on the final itinerary, fare, availability and entry
            eligibility. Nester will need to confirm them at booking.
          </p>
          <a
            className="underlink"
            href="https://www.emirates.com/english/before-you-fly/dubai-international-airport/dubai-connect/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read Emirates’ Dubai Connect details
          </a>
        </div>
      </div>
    </section>
  );
}
