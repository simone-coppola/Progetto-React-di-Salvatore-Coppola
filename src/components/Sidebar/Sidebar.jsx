import FirstSidebarArticle from "./firstSidebarArticle";
import SecondSidebarArticles from "./secondSidebarArticles";
import ThirdSidebarArticles from "./thirdSidebarArticles";
import FinalSidebarArticles from "./finalSidebarArticles";
import { useArticles } from "../../context/ArticlesContext";

const API_URL = "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json";
const API_KEY = import.meta.env.VITE_NYT_API_KEY;

function Sidebar() {
  const { mostPopular, loading, error } = useArticles();

  if (loading) return <p>Caricamento...</p>;
  if (error) return <p>{error}</p>;

  const articles = mostPopular;

  const firstSidebarArticle = articles.find((a) => a.media?.length > 0);
  const remaining = articles.filter((a) => a !== firstSidebarArticle);
  const secondSidebarArticles = remaining.slice(0, 4);
  const thirdSidebarArticles = remaining
    .filter((a) => a.media?.length > 0)
    .slice(0, 4);
  const finalSidebarArticles = remaining.slice(8, 14);

  return (
    <div className="Sidebar">
      <section className="first-sidebar-article">
        <FirstSidebarArticle article={firstSidebarArticle} />
      </section>

      <section className="second-sidebar-articles">
        <SecondSidebarArticles articles={secondSidebarArticles} />
      </section>

      <section className="third-sidebar-articles">
        <ThirdSidebarArticles articles={thirdSidebarArticles} />
      </section>

      <section className="final-sidebar-articles">
        <FinalSidebarArticles articles={finalSidebarArticles} />
      </section>
    </div>
  );
}

export default Sidebar;