import "../style/HeroArticle.css";

function Hero({ article }) {
  if (!article) return null;

  return (
    <div className="hero-card">
      <div className="hero-text">
        <h1>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            {article.title}
          </a>
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
