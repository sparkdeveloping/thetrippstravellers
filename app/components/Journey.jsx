export default function Journey() {
  return (
    <section
      className="journey section"
      id="journey"
      aria-labelledby="journey-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">THE WAY THERE</p>
          <h2 id="journey-title">
            Getting there.
            <br />
            <span>Together.</span>
          </h2>
        </div>
        <p>
          The practical plan for travelling to Natalie and Jordan’s roora:
          depart together, connect through Dubai, and keep the return date
          clear.
        </p>
      </div>
      <div className="route-experience">
        <div className="route-drawing" aria-hidden="true">
          <svg className="route-svg" viewBox="0 0 1120 260" fill="none">
            <defs>
              <lineargradient id="route-color">
                <stop stopColor="#e87348"></stop>
                <stop offset="1" stopColor="#183e59"></stop>
              </lineargradient>
            </defs>
            <path
              className="route-ghost"
              d="M70 195C230 195 300 55 555 55S875 195 1050 195"
            ></path>
            <path
              id="route-trail"
              d="M70 195C230 195 300 55 555 55S875 195 1050 195"
            ></path>
            <g className="route-endpoints">
              <circle cx="70" cy="195" r="7"></circle>
              <circle cx="555" cy="55" r="7"></circle>
              <circle cx="1050" cy="195" r="7"></circle>
            </g>
            <g
              id="route-plane"
              transform="translate(70 195) rotate(90) scale(.8)"
            >
              <path
                d="m0-18 5 12 17 8v5L5 3 4 13l5 5v3L0 17l-9 4v-3l5-5L-5 3l-17 4V2l17-8Z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
          <span className="route-note">
            A ROUTE SKETCH, NOT A CONFIRMED FLIGHT PATH
          </span>
        </div>
        <div
          className="route-stops"
          role="tablist"
          aria-label="Explore the planned journey"
        >
          <button
            type="button"
            role="tab"
            aria-selected="true"
            aria-controls="route-panel"
            id="stop-departure"
            data-stop="departure"
          >
            <span className="stop-kicker">THE TAKEOFF</span>
            <span className="stop-name">Your departure</span>
            <span className="stop-detail">Friday, November 26</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected="false"
            aria-controls="route-panel"
            id="stop-dubai"
            data-stop="dubai"
            tabIndex="-1"
          >
            <span className="stop-kicker">THE PAUSE</span>
            <span className="stop-name">Dubai</span>
            <span className="stop-detail">A little time between worlds</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected="false"
            aria-controls="route-panel"
            id="stop-zimbabwe"
            data-stop="zimbabwe"
            tabIndex="-1"
          >
            <span className="stop-kicker">THE REASON</span>
            <span className="stop-name">Zimbabwe</span>
            <span className="stop-detail">Natalie &amp; Jordan’s roora</span>
          </button>
        </div>
        <div
          className="route-panel"
          id="route-panel"
          role="tabpanel"
          tabIndex="0"
          aria-labelledby="stop-departure"
        >
          <div>
            <span id="route-tag" className="pill">
              THE OUTBOUND PLAN
            </span>
            <h3 id="route-title">Keep November 26 free.</h3>
          </div>
          <div>
            <p id="route-copy">
              The group plans to depart for Zimbabwe on Friday, November 26,
              2027. The departure airport, flight numbers and times will be
              shared once the booking is confirmed.
            </p>
            <p className="small" id="route-aside">
              The return flight departs Zimbabwe on Monday, December 6. Your
              arrival-home date is still to be confirmed.
            </p>
          </div>
        </div>
      </div>
      <div className="booking-note">
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <rect x="5" y="7" width="22" height="21" rx="2"></rect>
          <path d="M10 4v7m12-7v7M5 14h22m-16 6 4 4 7-7"></path>
        </svg>
        <p>
          <strong>January 2027 is the booking window.</strong> The organizer
          plans to purchase the group tickets then. Dates, fare and connection
          details remain planned until the tickets are issued.
        </p>
      </div>
    </section>
  );
}
