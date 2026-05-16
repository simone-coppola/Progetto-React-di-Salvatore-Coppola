import Header from "../components/Header/Header";
import ArticleCard from "../components/Article/ArticleCard";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import { useMenu } from "../context/MenuContext";

function Home() {
  const { menuOpen } = useMenu();

  return (
    <div className="App">
      <section className="HeaderSection">
        <Header />
      </section>

      <section className="Article" style={{ display: menuOpen ? "none" : "" }}>
        <div className="ArticleCard">
          <ArticleCard />
        </div>

        <div className="Sidebar">
          <Sidebar />
        </div>
      </section>

      <section className="Footer" style={{ display: menuOpen ? "none" : "" }}>
        <Footer />
      </section>
    </div>
  );
}

export default Home;
