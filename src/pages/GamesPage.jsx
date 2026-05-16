import Header from "../components/Header/Header";
import Games from "../components/Header/Navbar/Games";
import Footer from "../components/Footer/Footer";

function GamesPage() {
  return (
    <div className="App">
      <section className="HeaderSection">
        <Header />
      </section>

      <section className="Article">
        <Games />
      </section>

      <section className="Footer">
        <Footer />
      </section>
    </div>
  );
}

export default GamesPage;
