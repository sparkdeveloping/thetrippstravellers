import Experience from "./Experience.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import FlightFilm from "./components/FlightFilm.jsx";
import Celebration from "./components/Celebration.jsx";
import Journey from "./components/Journey.jsx";
import PaymentPlan from "./components/PaymentPlan.jsx";
import Preparation from "./components/Preparation.jsx";
import Fitting from "./components/Fitting.jsx";
import Checklist from "./components/Checklist.jsx";
import Closing from "./components/Closing.jsx";
import Footer from "./components/Footer.jsx";
import Dialogs from "./components/Dialogs.jsx";
export default function Home() {
  return (
    <Experience>
      <Header />
      <main>
        <Hero />
        <FlightFilm />
        <Celebration />
        <Journey />
        <PaymentPlan />
        <Preparation />
        <Fitting />
        <Checklist />
        <Closing />
      </main>
      <Footer />
      <Dialogs />
    </Experience>
  );
}
