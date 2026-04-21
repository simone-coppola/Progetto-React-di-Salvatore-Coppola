import "../style/SecondaryArticle.css";

function Secondary({ articles }) {
  const firstWithImage = articles.find((a) => a.multimedia?.[0]?.url);
  const remaining = articles.filter((a) => a !== firstWithImage);

  const leftArticles = remaining.slice(0, 3);
  const rightArticles = remaining.slice(3, 6);

  return (
    <div className="secondary-container">
      <div className="secondary-left">
        {leftArticles.map((article) => (
          <div key={article.url} className="secondary-card">
            <h3>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </h3>
            <p>{article.abstract}</p>
          </div>
        ))}
      </div>

      {firstWithImage && (
        <div className="secondary-center">
          <img
            src={firstWithImage.multimedia[0].url}
            alt={firstWithImage.title}
            className="secondary-image"
          />
          <h3>
            <a
              href={firstWithImage.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {firstWithImage.title}
            </a>
          </h3>
          <p>{firstWithImage.abstract}</p>
        </div>
      )}

      <div className="secondary-right">
        {rightArticles.map((article) => (
          <div key={article.url} className="secondary-card">
            <h3>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </h3>
            <p>{article.abstract}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Secondary;
