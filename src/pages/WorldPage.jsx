import Header from "../components/Header/Header";
import World from "../components/Header/Navbar/World";
import Footer from "../components/Footer/Footer";

function WorldPage() {
  return (
    <div className="App">
      <section className="HeaderSection">
        <Header />
      </section>

      <section className="Article">
        <World />
      </section>

      <section className="Footer">
        <Footer />
      </section>
    </div>
  );
}

export default WorldPage;
