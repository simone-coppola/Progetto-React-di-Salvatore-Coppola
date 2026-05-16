import Header from "../components/Header/Header";
import Business from "../components/Header/Navbar/Business";
import Footer from "../components/Footer/Footer";

function BusinessPage() {
  return (
    <div className="App">
      <section className="HeaderSection">
        <Header />
      </section>

      <section className="Article">
        <Business />
      </section>

      <section className="Footer">
        <Footer />
      </section>
    </div>
  );
}

export default BusinessPage;
