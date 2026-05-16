import Header from "../components/Header/Header";
import US from "../components/Header/Navbar/U.S";
import Footer from "../components/Footer/Footer";

function USPage() {
  return (
    <div className="App">
      <section className="HeaderSection">
        <Header />
      </section>

      <section className="Article">
        <US />
      </section>

      <section className="Footer">
        <Footer />
      </section>
    </div>
  );
}

export default USPage;
