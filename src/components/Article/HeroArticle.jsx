import "../../style/Article/HeroArticle.css";

function Hero({ article }) {
  if (!article) return null;

  return (
  <div className="hero-card" onClick={() => window.open(article.url, '_blank', 'noopener,noreferrer')}>
      <div className="hero-text">
        <h1>
              {article.title}
        </h1>
        <p>{article.abstract}</p>
      </div>

      {article.multimedia?.[1]?.url && (
        <img
          src={article.multimedia[1].url}
          alt={article.title}
          className="hero-image"
        />
      )}
    </div>
  );
}

export default Hero;
