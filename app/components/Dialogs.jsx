import { INVITATION_URL, MEASUREMENTS_URL } from "../../lib/links.mjs";

export default function Dialogs() {
  return (
    <>
      <dialog id="start-dialog" aria-labelledby="start-title">
        <button
          className="dialog-close"
          type="button"
          data-close
          aria-label="Close start-date message"
        >
          Close
        </button>
        <p className="eyebrow">KEEP THE ORGANIZER IN THE LOOP</p>
        <h2 id="start-title">
          Your first
          <br />
          little step.
        </h2>
        <p>
          Prepare an update, then copy it into your private conversation with
          the organizer.
        </p>
        <form id="start-form" inert aria-busy="true">
          <label htmlFor="traveller-name">
            Your name (optional)
            <input
              id="traveller-name"
              autoComplete="given-name"
              maxLength="80"
            />
          </label>
          <label htmlFor="start-date">
            When do you plan to begin?
            <input id="start-date" type="date" required />
          </label>
          <button className="button ink" type="submit">
            Prepare my message
          </button>
        </form>
        <div id="start-result" hidden>
          <label htmlFor="start-message">
            Your message
            <textarea id="start-message" rows="5" readOnly></textarea>
          </label>
          <button
            className="button coral"
            type="button"
            data-copy="start-message"
          >
            Copy message
          </button>
        </div>
        <p className="small">
          A draft only. Copying doesn’t send your message or commit you to a
          payment schedule.
        </p>
      </dialog>
      <dialog id="sources-dialog" aria-labelledby="sources-title">
        <button
          className="dialog-close"
          type="button"
          data-close
          aria-label="Close guide information"
        >
          Close
        </button>
        <p className="eyebrow">A SHARED PLAN, CLEARLY EXPLAINED</p>
        <h2 id="sources-title">About this guide.</h2>
        <p>
          The dates, estimated fare, coordinator and January 2027 booking plan
          come from the organizer’s trip information. Airports, flight times,
          arrival dates and hotel eligibility are not yet confirmed.
        </p>
        <p>
          Personal planning tools run in your browser. This guide doesn’t take
          payments, keep an official balance, receive measurements or send
          messages. Only your six checklist ticks and motion preference are
          saved on this device. Clothing selections and measurements are handled
          on Natalie and Jordan’s separate Roora Collection form.
        </p>
        <p>
          Recipient identity documents are deliberately excluded. Obtain
          required identification privately. Aviation imagery is generated
          editorial artwork, not a photograph of the group’s flight.
        </p>
        <p>
          The roora date, family explanation and attire guidance come from
          Natalie and Jordan’s existing invitation. Their original photographs
          illustrate their life together, not the future ceremony. The map uses
          Natural Earth geography and an illustrative route.
        </p>
        <h3>From Natalie &amp; Jordan</h3>
        <ul className="source-links">
          <li>
            <a href={INVITATION_URL} target="_blank" rel="noopener noreferrer">
              The roora invitation
            </a>
          </li>
          <li>
            <a href={MEASUREMENTS_URL} target="_blank" rel="noopener noreferrer">
              Attire &amp; measurements form
            </a>
          </li>
        </ul>
        <h3>Official guidance</h3>
        <ul className="source-links">
          <li>
            <a
              href="https://www.zimimmigration.gov.zw/?page_id=6900"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zimbabwe Department of Immigration
            </a>
          </li>
          <li>
            <a
              href="https://www.emirates.com/us/english/before-you-fly/baggage/checked-baggage/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Emirates checked baggage
            </a>
          </li>
          <li>
            <a
              href="https://www.emirates.com/us/english/before-you-fly/baggage/cabin-baggage-rules/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Emirates cabin baggage
            </a>
          </li>
          <li>
            <a
              href="https://www.emirates.com/english/before-you-fly/dubai-international-airport/dubai-connect/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Emirates Dubai Connect
            </a>
          </li>
          <li>
            <a
              href="https://www.westernunion.com/us/en/send-money-to-zimbabwe.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Western Union, Zimbabwe
            </a>
          </li>
          <li>
            <a
              href="https://www.worldremit.com/en-us/zimbabwe/cash-pickup"
              target="_blank"
              rel="noopener noreferrer"
            >
              WorldRemit cash pickup
            </a>
          </li>
          <li>
            <a
              href="https://www.worldremit.com/en-us/zimbabwe/mobile-money"
              target="_blank"
              rel="noopener noreferrer"
            >
              WorldRemit mobile money
            </a>
          </li>
        </ul>
        <p className="small">
          Reviewed November 2026. Recheck current provider terms when booking or
          transferring.
        </p>
      </dialog>
      <dialog id="board-dialog" aria-labelledby="board-title">
        <button
          className="dialog-close"
          type="button"
          data-close
          aria-label="Close attire reference board"
        >
          Close
        </button>
        <p className="eyebrow">NATALIE &amp; JORDAN’S ROORA · OLIVE ATTIRE</p>
        <h2 id="board-title">The original reference.</h2>
        <img
          id="board-image"
          alt="Original women’s olive attire reference board"
          width="1199"
          height="1312"
        />
        <p className="small">
          Original colours and all ten looks, preserved as supplied.
        </p>
      </dialog>
      <div className="toast" id="toast" role="status" aria-live="polite"></div>
    </>
  );
}
