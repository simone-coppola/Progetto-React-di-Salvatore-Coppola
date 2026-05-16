import Header from "../components/Header/Header";
import TheAthletic from "../components/Header/Navbar/TheAthletic";
import Footer from "../components/Footer/Footer";

function TheAthleticPage() {
  return (
    <div className="App">
      <section className="HeaderSection">
        <Header />
      </section>

      <section className="Article">
        <TheAthletic />
      </section>

      <section className="Footer">
        <Footer />
      </section>
    </div>
  );
}

export default TheAthleticPage;
