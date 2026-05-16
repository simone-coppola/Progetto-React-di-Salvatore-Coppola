import Header from "../components/Header/Header";
import Audio from "../components/Header/Navbar/Audio";
import Footer from "../components/Footer/Footer";

function AudioPage() {
  return (
    <div className="App">
      <section className="HeaderSection">
        <Header />
      </section>

      <section className="Article">
        <Audio />
      </section>

      <section className="Footer">
        <Footer />
      </section>
    </div>
  );
}

export default AudioPage;
