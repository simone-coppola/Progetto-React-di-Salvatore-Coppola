import Header from "../components/Header/Header";
import Arts from "../components/Header/Navbar/Arts";
import Footer from "../components/Footer/Footer";

function ArtsPage() {
  return (
    <div className="App">
      <section className="HeaderSection">
        <Header />
      </section>

      <section className="Article">
        <Arts />
      </section>

      <section className="Footer">
        <Footer />
      </section>
    </div>
  );
}

export default ArtsPage;
