import Header from "../components/Header/Header";
import Lifestyle from "../components/Header/Navbar/Lifestyle";
import Footer from "../components/Footer/Footer";

function LifestylePage() {
  return (
    <div className="App">
      <section className="HeaderSection">
        <Header />
      </section>

      <section className="Article">
        <Lifestyle />
      </section>

      <section className="Footer">
        <Footer />
      </section>
    </div>
  );
}

export default LifestylePage;
