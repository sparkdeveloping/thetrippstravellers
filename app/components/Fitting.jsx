import { MEASUREMENTS_URL } from "../../lib/links.mjs";

export default function Fitting() {
  return (
    <section
      className="fitting section"
      id="fitting"
      aria-labelledby="fitting-title"
      data-fitting-step="look"
    >
      <div className="fitting-heading">
        <p className="eyebrow">THE ROORA COLLECTION · NATALIE &amp; JORDAN</p>
        <h2 id="fitting-title">
          A look worth
          <br />
          <span>travelling for.</span>
        </h2>
        <p>
          Somewhere between booking the flight and packing the bags, there’s
          something being made just for you.
        </p>
        <a className="fitting-shortcut" href={MEASUREMENTS_URL} target="_blank" rel="noopener noreferrer">
          Go straight to the fitting form
        </a>
      </div>

      <div className="fitting-scene" id="fitting-scene" aria-hidden="true">
        <div className="fitting-orbit"></div>
        <span className="fitting-scene-caption">A LITTLE OLIVE. A LITTLE ANTICIPATION.</span>
        <div className="fitting-rig">
          <div className="wardrobe-case">
            <div className="wardrobe-handle"></div>
            <div className="wardrobe-lining"></div>
          </div>
          <figure className="fitting-look fitting-look-e">
            <img src="/assets/women-e.webp" width="242" height="522" alt="" loading="lazy" decoding="async" />
            <figcaption>WOMEN · STYLE E</figcaption>
          </figure>
          <figure className="fitting-look fitting-look-j">
            <img src="/assets/men-j.webp" width="234" height="464" alt="" loading="lazy" decoding="async" />
            <figcaption>MEN · STYLE J</figcaption>
          </figure>
          <figure className="fitting-look fitting-look-b">
            <img src="/assets/men-b.webp" width="242" height="471" alt="" loading="lazy" decoding="async" />
            <figcaption>MEN · STYLE B</figcaption>
          </figure>
          <figure className="fitting-look fitting-look-a">
            <img src="/assets/women-a.webp" width="239" height="522" alt="" loading="lazy" decoding="async" />
            <figcaption>WOMEN · STYLE A</figcaption>
          </figure>
          <svg className="fitting-tape" viewBox="0 0 640 560" fill="none">
            <path className="fitting-tape-shadow" d="M132 387C75 337 131 215 227 194S445 223 462 296 354 416 238 393 132 300 218 282 367 294 381 323" pathLength="1" />
            <path className="fitting-tape-body" d="M132 387C75 337 131 215 227 194S445 223 462 296 354 416 238 393 132 300 218 282 367 294 381 323" pathLength="1" />
            <path className="fitting-tape-ticks" d="M132 387C75 337 131 215 227 194S445 223 462 296 354 416 238 393 132 300 218 282 367 294 381 323" pathLength="1" />
          </svg>
          <div className="wardrobe-pocket">
            <span>N &amp; J</span>
            <span>ZIMBABWE<br />01 DECEMBER 2027</span>
          </div>
          <div className="fitting-tag">
            <i></i>
            <span className="fitting-tag-kicker">FOR THE OCCASION</span>
            <strong>Made<br />for you.</strong>
            <span className="fitting-tag-rule"></span>
            <span>YOUR NEXT STEP</span>
            <b>The Roora Collection</b>
            <span>Choose. Measure. Send.</span>
          </div>
        </div>
        <div className="fitting-scene-footer">
          <span>THEIR ROORA. YOUR OWN SILHOUETTE.</span>
          <span>ORIGINAL OUTFIT REFERENCES</span>
        </div>
      </div>

      <div className="fitting-workbench">
        <div className="fitting-tabs" role="tablist" aria-label="Your fitting journey" inert aria-busy="true">
          <button id="fitting-tab-look" type="button" role="tab" aria-selected="true" aria-controls="fitting-panel-look" tabIndex={0} data-fitting-tab="look">
            <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 5a3 3 0 0 1 3 3c0 2-3 2-3 4v2M16 14 4 23v3h24v-3Z" /></svg>
            <span>The look</span>
          </button>
          <button id="fitting-tab-fit" type="button" role="tab" aria-selected="false" aria-controls="fitting-panel-fit" tabIndex={-1} data-fitting-tab="fit">
            <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M5 9h22v14H5ZM10 9v6m6-6v4m6-4v6" /></svg>
            <span>The fit</span>
          </button>
          <button id="fitting-tab-send" type="button" role="tab" aria-selected="false" aria-controls="fitting-panel-send" tabIndex={-1} data-fitting-tab="send">
            <svg viewBox="0 0 32 32" aria-hidden="true"><path d="m6 5 15 1 7 7-15 15L5 20ZM11 11h.01M13 19l6-6" /></svg>
            <span>The tailor</span>
          </button>
        </div>
        <div className="fitting-panels">
          <div id="fitting-panel-look" role="tabpanel" aria-labelledby="fitting-tab-look" tabIndex={0}>
            <p className="fitting-panel-kicker">FIND YOUR SILHOUETTE</p>
            <h3>Something olive.<br />Something you.</h3>
            <p>
              Explore the family’s twenty original looks. A flowing skirt, a
              tailored tunic, a little more coverage: make room for a look
              that feels like you.
            </p>
            <div className="fitting-board-links">
              <button type="button" data-board="women">Women’s reference board</button>
              <button type="button" data-board="men">Men’s reference board</button>
            </div>
          </div>
          <div id="fitting-panel-fit" role="tabpanel" aria-labelledby="fitting-tab-fit" tabIndex={0} hidden>
            <p className="fitting-panel-kicker">A LITTLE CARE, A BETTER FIT</p>
            <h3>Made for you.<br />Before we fly.</h3>
            <p>
              Get a soft tape measure and ask someone to help. The fitting
              form shows the measurements and units for your chosen look.
            </p>
            <ul className="fitting-tips">
              <li>Stand naturally; keep the tape snug, never tight.</li>
              <li>Check each measurement against the form’s guidance.</li>
              <li>Add any fit preferences or modesty adjustments.</li>
            </ul>
          </div>
          <div id="fitting-panel-send" role="tabpanel" aria-labelledby="fitting-tab-send" tabIndex={0} hidden>
            <p className="fitting-panel-kicker">THE NEXT PART IS PERSONAL</p>
            <h3>From your measurements<br />to their tailor.</h3>
            <p>
              Open Natalie and Jordan’s Roora Collection to choose your look
              and submit your measurements. They’ll take it from there with
              a quote from their tailor.
            </p>
            <p className="fitting-send-note">
              The form has a place for the ladies, the gentlemen and the
              parents. Please send your details as soon as you can.
            </p>
          </div>
        </div>
        <div className="fitting-action">
          <a className="button" id="fitting-link" href={MEASUREMENTS_URL} target="_blank" rel="noopener noreferrer">
            Start my fitting
          </a>
          <p>Opens their existing Roora Collection in a new tab.</p>
        </div>
      </div>

      <div className="fitting-palette" aria-label="Celebration attire colours">
        <p>One celebration.<br /><strong>A family of colours.</strong></p>
        <div><i style={{ "--fitting-swatch": "#657246" }}></i><span>Guests<strong>Olive green</strong></span></div>
        <div><i style={{ "--fitting-swatch": "#e9dfc9" }}></i><span>Parents &amp; grandparents<strong>Ivory or champagne</strong></span></div>
        <div><i style={{ "--fitting-swatch": "#704c3c" }}></i><span>The couple<strong>Chocolate brown</strong></span></div>
        <p className="fitting-palette-note">Cream or champagne details welcome. Modest options encouraged. Please avoid bright multicoloured prints.</p>
      </div>
    </section>
  );
}
