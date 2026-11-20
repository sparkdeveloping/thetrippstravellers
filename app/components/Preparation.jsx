import { MEASUREMENTS_URL } from "../../lib/links.mjs";

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
      <div className="roora-attire" id="roora-attire">
        <div className="attire-intro">
          <p className="eyebrow">PACK FOR THEIR ROORA</p>
          <h3>
            Something olive.
            <br />
            Something you.
          </h3>
          <p>
            For the celebration, guests are asked to wear traditional
            African-inspired attire in olive green. Choose a silhouette that
            feels comfortable and beautiful.
          </p>
          <div className="attire-colours">
            <span>
              <i
                style={{
                  "--cloth": "#50583b",
                }}
              ></i>
              Guests · olive
            </span>
            <span>
              <i
                style={{
                  "--cloth": "#ede6d7",
                }}
              ></i>
              Parents &amp; grandparents · ivory or champagne
            </span>
            <span>
              <i
                style={{
                  "--cloth": "#493127",
                }}
              ></i>
              The couple · chocolate
            </span>
          </div>
          <p className="small">
            Understated cream or champagne details are welcome. Avoid bright
            multicoloured prints. Modest options include covered shoulders,
            higher necklines and longer sleeves.
          </p>
          <div className="attire-buttons">
            <button type="button" className="button outline" data-board="women">
              Women’s reference board
            </button>
            <button type="button" className="button outline" data-board="men">
              Men’s reference board
            </button>
          </div>
        </div>
        <div
          className="packed-looks"
          aria-label="Approved olive attire inspiration"
        >
          <figure>
            <img
              src="/assets/women-a.webp"
              width="329"
              height="465"
              alt="Olive corset and wrap skirt, original style A"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Corset &amp; wrap skirt</figcaption>
          </figure>
          <figure>
            <img
              src="/assets/men-b.webp"
              width="329"
              height="465"
              alt="Olive traditional modern tunic, original style B"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Traditional modern tunic</figcaption>
          </figure>
          <figure>
            <img
              src="/assets/women-e.webp"
              width="329"
              height="465"
              alt="Olive high-neck top and full skirt, original style E"
              loading="lazy"
              decoding="async"
            />
            <figcaption>High-neck &amp; full skirt</figcaption>
          </figure>
          <figure>
            <img
              src="/assets/men-j.webp"
              width="329"
              height="465"
              alt="Olive two-piece print set, original style J"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Two-piece print set</figcaption>
          </figure>
        </div>
      </div>
      <div className="measurements">
        <div>
          <p className="eyebrow">MADE FOR THE OCCASION</p>
          <h3>
            Made for
            <br />
            their roora.
          </h3>
          <p>
            Natalie and Jordan have a fitting form ready for you. Choose your
            look and share your measurements as soon as possible so clothing
            arrangements for their celebration can begin.
          </p>
          <a
            className="button outline"
            href={MEASUREMENTS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Attire &amp; measurements
          </a>
          <p className="small">
            Opens their Roora Collection in a new tab. Follow the measurement
            guidance for your chosen look.
          </p>
        </div>
        <div className="measure-art" aria-hidden="true">
          <svg viewBox="0 0 420 380">
            <path
              className="garment"
              d="m136 72 63-27h22l63 27 57 72-45 36-23-27 16 175H131l16-175-23 27-45-36Z"
            ></path>
            <path
              className="garment-seam"
              d="M199 45q11 48 22 0M147 153l12-54m114 54-12-54M136 259h148M210 74v254"
            ></path>
            <path
              className="tape"
              d="M100 263c23-40 183-48 221 0s-145 74-189 31 66-64 112-47"
            ></path>
            <path
              className="tape-marks"
              d="m120 252 5 14m16-22 5 14m18-20 4 14m18-18 4 14m19-16 3 14m20-14 2 14m20-11 1 14m20-6-3 14m19-1-6 13m16 6-10 10m-4 13-12-7m-13 17-7-13m-14 17-3-14m-16 16-2-14m-18 14 1-14m-19 12 2-14m-20 10 5-14"
            ></path>
          </svg>
          <span>YOUR STYLE. YOUR MEASUREMENTS.</span>
        </div>
      </div>
    </section>
  );
}
