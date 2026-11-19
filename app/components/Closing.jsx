export default function Closing() {
  return (
    <section className="closing section" aria-labelledby="closing-title">
      <p className="eyebrow">THE TRIPPS TRAVELLERS · ZIMBABWE 2027</p>
      <h2 id="closing-title">
        Every mile.
        <br />
        <span>For this moment.</span>
      </h2>
      <p>
        For Natalie and Jordan. For family. For a roora we get to be part of
        together. Questions about travel, payments or clothing? Reach out
        privately to the organizer.
      </p>
      <div className="closing-actions">
        <button type="button" className="button coral" data-calendar>
          Keep the dates
        </button>
        <button type="button" className="button ghost" id="download-guide">
          Download the trip notes
        </button>
      </div>
      <div className="closing-route" aria-hidden="true">
        <span>26 NOV</span>
        <svg viewBox="0 0 500 50">
          <path d="M1 40Q250-30 499 40"></path>
        </svg>
        <span>06 DEC</span>
      </div>
    </section>
  );
}
