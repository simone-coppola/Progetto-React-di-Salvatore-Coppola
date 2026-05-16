import Header from "../components/Header/Header";
import Wirecutter from "../components/Header/Navbar/Wirecutter";
import Footer from "../components/Footer/Footer";

function WirecutterPage() {
  return (
    <div className="App">
      <section className="HeaderSection">
        <Header />
      </section>

      <section className="Article">
        <Wirecutter />
      </section>

      <section className="Footer">
        <Footer />
      </section>
    </div>
  );
}

export default WirecutterPage;
