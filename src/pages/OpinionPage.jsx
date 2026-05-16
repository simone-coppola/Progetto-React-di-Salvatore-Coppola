import Header from "../components/Header/Header";
import Opinion from "../components/Header/Navbar/Opinion";
import Footer from "../components/Footer/Footer";

function OpinionPage() {
  return (
    <div className="App">
      <section className="HeaderSection">
        <Header />
      </section>

      <section className="Article">
        <Opinion />
      </section>

      <section className="Footer">
        <Footer />
      </section>
    </div>
  );
}

export default OpinionPage;
