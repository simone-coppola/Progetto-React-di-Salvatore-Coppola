import "./App.css";
import Header from "./components/Header";
import ArticleCard from "./components/ArticleCard";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import { MenuProvider } from "./context/MenuContext";
import { ArticlesProvider } from "./context/ArticlesContext";
import { useMenu } from "./context/MenuContext";

function AppContent() {
  const { menuOpen } = useMenu();

  return (
    <div className="App">
      <section className="HeaderSection">
        <Header />
      </section>

      <section className="Article" style={{ display: menuOpen ? "none" : "" }}>
        <div className="ArticleCard"><ArticleCard /></div>
        <div className="Sidebar"><Sidebar /></div>
      </section>

      <section className="Footer" style={{ display: menuOpen ? "none" : "" }}>
        <Footer />
      </section>
    </div>
  );
}

function App() {
  return (
    <ArticlesProvider>
      <MenuProvider>
        <AppContent />
      </MenuProvider>
    </ArticlesProvider>
  );
}

export default App;