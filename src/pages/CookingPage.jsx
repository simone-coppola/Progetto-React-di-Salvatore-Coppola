import Header from "../components/Header/Header";
import Cooking from "../components/Header/Navbar/Cooking";
import Footer from "../components/Footer/Footer";

function CookingPage() {
  return (
    <div className="App">
      <section className="HeaderSection">
        <Header />
      </section>

      <section className="Article">
        <Cooking />
      </section>

      <section className="Footer">
        <Footer />
      </section>
    </div>
  );
}

export default CookingPage;
