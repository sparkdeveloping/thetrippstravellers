export default function Checklist() {
  return (
    <section className="notes section" id="notes" aria-labelledby="notes-title">
      <div className="notes-intro">
        <p className="eyebrow">A LITTLE LESS TO REMEMBER</p>
        <h2 id="notes-title">
          Ready,
          <br />
          <span>little by little.</span>
        </h2>
        <p>
          Your own departure checklist. Tick things off as you go; your progress
          stays in this browser.
        </p>
        <div className="notes-progress">
          <strong id="notes-progress-text">0 of 6 ready</strong>
          <div>
            <span id="notes-progress-bar"></span>
          </div>
        </div>
        <button className="text-button" id="clear-notes" type="button">
          Reset my checklist
        </button>
      </div>
      <div className="checklist" aria-label="Personal trip preparation">
        <label>
          <input type="checkbox" data-check="dates" />
          <span>
            <strong>Save travel &amp; roora dates</strong>
            <small>
              November 26 out. Roora December 1. December 6 departing Zimbabwe.
            </small>
          </span>
        </label>
        <label>
          <input type="checkbox" data-check="start" />
          <span>
            <strong>Share my planned payment start</strong>
            <small>Send your start date privately to the organizer.</small>
          </span>
        </label>
        <label>
          <input type="checkbox" data-check="details" />
          <span>
            <strong>Confirm the transfer details</strong>
            <small>
              Recipient, delivery method, fees and holding arrangement.
            </small>
          </span>
        </label>
        <label>
          <input type="checkbox" data-check="measure" />
          <span>
            <strong>Send clothing measurements</strong>
            <small>
              Choose your look and complete the Roora Collection form.
            </small>
          </span>
        </label>
        <label>
          <input type="checkbox" data-check="receipts" />
          <span>
            <strong>Make a place for payment confirmations</strong>
            <small>Keep receipts and send each one to the organizer.</small>
          </span>
        </label>
        <label>
          <input type="checkbox" data-check="roora" />
          <span>
            <strong>Prepare for their roora</strong>
            <small>
              Choose olive attire and review the family’s ceremony guidance.
            </small>
          </span>
        </label>
        <p className="small" id="notes-storage">
          Personal notes only. This checklist doesn’t notify the organizer or
          confirm a booking.
        </p>
        <a href="#fitting" className="underlink notes-fitting-link">
          Return to your fitting
        </a>
      </div>
    </section>
  );
}
