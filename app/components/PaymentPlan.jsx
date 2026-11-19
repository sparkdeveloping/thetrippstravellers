export default function PaymentPlan() {
  return (
    <section className="pace section" id="pace" aria-labelledby="pace-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">THE WAY TO MAKE IT HAPPEN</p>
          <h2 id="pace-title">
            One trip closer.
            <br />
            <span>At your pace.</span>
          </h2>
        </div>
        <p>
          No fixed instalment schedule. A flexible plan, a clear estimate, and
          one less thing to figure out.
        </p>
      </div>
      <div className="budget-grid">
        <div className="fare-summary">
          <span className="eyebrow">CURRENT ROUND-TRIP FLIGHT ESTIMATE</span>
          <div className="fare">
            <span className="fare-currency">US$</span>
            <strong>2,030</strong>
          </div>
          <p>per person · planned Emirates airfare</p>
          <div className="fare-rule"></div>
          <p className="fare-note">
            This is the organizer’s estimate, not a locked fare. It may rise or
            fall before booking. Transfer fees are additional.
          </p>
          <div className="fare-includes">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m3 13 7 2 8-11 3 1-5 13-6-1-5 4-2-1 3-5Z"></path>
            </svg>
            <span>
              Round trip
              <br />
              <b>Via Dubai</b>
            </span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="5" y="7" width="14" height="14" rx="2"></rect>
              <path d="M9 7V3h6v4M8 11v6m8-6v6"></path>
            </svg>
            <span>
              Checked luggage
              <br />
              <b>Planned: 2 × 23kg</b>
            </span>
          </div>
        </div>
        <form
          id="budget-form"
          className="budget-form"
          noValidate
          inert
          aria-busy="true"
        >
          <div className="tool-heading">
            <h3>Find a pace that feels right.</h3>
            <span className="small">YOUR PERSONAL PLANNING SKETCH</span>
          </div>
          <div className="budget-inputs">
            <label htmlFor="people">
              Travellers you’re planning for
              <select id="people" name="people">
                <option value="1">Just me</option>
                <option value="2">2 travellers</option>
                <option value="3">3 travellers</option>
                <option value="4">4 travellers</option>
                <option value="5">5 travellers</option>
                <option value="6">6 travellers</option>
                <option value="7">7 travellers</option>
                <option value="8">8 travellers</option>
              </select>
            </label>
            <label htmlFor="saved">
              Already set aside (US$)
              <input
                id="saved"
                name="saved"
                type="number"
                inputMode="decimal"
                min="0"
                step="0.01"
                defaultValue="0"
                aria-describedby="saved-hint"
              />
              <span id="saved-hint" className="small">
                Your own savings, not a payment record.
              </span>
            </label>
          </div>
          <fieldset className="split-field">
            <legend>Split the rest into</legend>
            <div className="split-options">
              <label>
                <input type="radio" name="parts" defaultValue="2" />
                <span>
                  2 <small>parts</small>
                </span>
              </label>
              <label>
                <input
                  type="radio"
                  name="parts"
                  defaultValue="4"
                  defaultChecked
                />
                <span>
                  4 <small>parts</small>
                </span>
              </label>
              <label>
                <input type="radio" name="parts" defaultValue="6" />
                <span>
                  6 <small>parts</small>
                </span>
              </label>
              <label>
                <input type="radio" name="parts" defaultValue="8" />
                <span>
                  8 <small>parts</small>
                </span>
              </label>
            </div>
          </fieldset>
          <div className="budget-result" aria-live="polite" aria-atomic="true">
            <span>At your own pace</span>
            <strong id="part-amount">$507.50</strong>
            <span id="part-caption">each across 4 contributions</span>
            <div className="pace-track" id="pace-track" aria-hidden="true">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>
            <p id="budget-remainder">
              $2,030.00 left to set aside · estimated airfare only
            </p>
            <p className="small" id="rounding-note" hidden></p>
          </div>
          <p id="budget-error" className="error" role="alert" hidden></p>
          <button className="button ink" type="button" data-open="start-dialog">
            Prepare my start-date update
          </button>
          <p className="small tool-note">
            You choose when to contribute. This sketch doesn’t send money,
            reserve a seat or confirm a balance.
          </p>
        </form>
      </div>
      <div className="transfer-layout">
        <div className="transfer-intro">
          <p className="eyebrow">WHEN YOU’RE READY</p>
          <h3>
            A clear path
            <br />
            for every payment.
          </h3>
          <p>
            Payments can begin whenever you’re ready. The organizer’s plan is
            for travel coordinator Nester Gadaga to hold payments until the
            January 2027 ticket purchase.
          </p>
          <p className="small">
            Before sending, confirm your recipient, delivery method, balance and
            the holding arrangement privately with the organizer.
          </p>
          <div className="recipient">
            <span className="eyebrow">TRAVEL COORDINATOR</span>
            <strong>Nester Gadaga</strong>
            <a href="tel:+263772853085">+263 77 285 3085</a>
            <button type="button" className="text-button" id="copy-recipient">
              Copy name &amp; phone
            </button>
            <p className="small">
              Request any required recipient ID through your private group
              contact.
            </p>
          </div>
        </div>
        <div className="transfer-steps">
          <div className="provider-links">
            <a
              href="https://www.westernunion.com/us/en/mobile-app.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Western Union <span>Official app &amp; service</span>
            </a>
            <a
              href="https://www.worldremit.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              WorldRemit <span>Official app &amp; service</span>
            </a>
          </div>
          <details open>
            <summary>Create your account</summary>
            <p>
              Download either provider’s app, create an account and choose an
              available way to pay, such as a debit card, credit card or bank
              account. Options vary by service and location.
            </p>
          </details>
          <details>
            <summary>Set up the transfer</summary>
            <p>
              Choose Zimbabwe. Enter Nester’s confirmed recipient details and
              the amount. Agree on cash pickup or an eligible mobile-money
              account before choosing delivery. A phone number alone doesn’t
              confirm a mobile wallet.
            </p>
          </details>
          <details>
            <summary>Check, then send</summary>
            <p>
              Review the fee, exchange rate, recipient amount and delivery
              details in the app. Use recipient identification supplied
              privately if the provider requests it. Complete the transfer
              within the provider’s app.
            </p>
          </details>
          <details>
            <summary>Keep the organizer in the loop</summary>
            <p>
              Send the organizer a private message with your planned start date.
              After every transfer, send a screenshot or confirmation so they
              can record the payment and update your balance. Don’t post
              receipts or identity documents publicly.
            </p>
          </details>
          <p className="small provider-note">
            Each transfer may carry fees. Use the provider’s displayed total; no
            transfer is processed through this site.
          </p>
        </div>
      </div>
    </section>
  );
}
