import "../../style/Article/SecondaryArticle.css";

function Secondary({ articles }) {
  const firstWithImage = articles.find((a) => a.multimedia?.[0]?.url);
  const remaining = articles.filter((a) => a !== firstWithImage);

  const leftArticles = remaining.slice(0, 3);
  const rightArticles = remaining.slice(3, 6);

  return (
    <div className="secondary-container">
      <div className="secondary-left">
        {leftArticles.map((article) => (
          <div key={article.url} className="secondary-card" onClick={() => window.open(article.url, '_blank', 'noopener,noreferrer')}>
            <h3>
                {article.title}
            </h3>
            <p>{article.abstract}</p>
          </div>
        ))}
      </div>

      {firstWithImage && (
        <div className="secondary-center" onClick={() => window.open(firstWithImage.url, '_blank', 'noopener,noreferrer')}>
          <img
            src={firstWithImage.multimedia[0].url}
            alt={firstWithImage.title}
            className="secondary-image"
          />
          <h3>
            {firstWithImage.title}
          </h3>
          <p>{firstWithImage.abstract}</p>
        </div>
      )}

      <div className="secondary-right">
        {rightArticles.map((article) => (
          <div key={article.url} className="secondary-card" onClick={() => window.open(article.url, '_blank', 'noopener,noreferrer')}>
            <h3>
                {article.title}
            </h3>
            <p>{article.abstract}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Secondary;
