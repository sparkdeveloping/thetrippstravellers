export default function Footer() {
  return (
    <>
      <footer>
        <a className="footer-brand" href="#top">
          THE TRIPPS TRAVELLERS
        </a>
        <span>Natalie &amp; Jordan’s roora · December 1, 2027 · Zimbabwe</span>
        <button className="motion-control" type="button" aria-pressed="false">
          Reduce motion
        </button>
        <button
          type="button"
          className="text-button"
          data-open="sources-dialog"
        >
          About this guide
        </button>
      </footer>
    </>
  );
}
