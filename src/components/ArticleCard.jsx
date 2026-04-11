import Hero from "./HeroArticle";
import Main from "./MainArticle";
import Secondary from "./SecondaryArticle";
import Scroll from "./ScrollArticle";
import { useArticles } from "../context/ArticlesContext";

function ArticleCard() {
  const { topStories, loading, error } = useArticles();

  if (loading) return <p>Caricamento...</p>;
  if (error) return <p>{error}</p>;

  const articles = topStories;

  const heroArticle = articles.find((a) => a.multimedia?.[0]?.url);
  const mainArticles = articles.slice(1, 5);
  const secondaryArticles = articles.slice(5);
  const scrollArticles = secondaryArticles
    .filter((a) => a.multimedia?.[0]?.url)
    .slice(0, 6);

  return (
    <div className="article-card">
      <section className="hero-section">
        <Hero article={heroArticle} />
      </section>

      <section className="scroll-section">
        <Scroll articles={scrollArticles} />
      </section>

      <section className="main-section">
        <Main articles={mainArticles} />
      </section>

      <section className="secondary-section">
        <Secondary articles={secondaryArticles} />
      </section>
    </div>
  );
}

export default ArticleCard;