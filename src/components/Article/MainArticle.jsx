import "../../style/Article/MainArticle.css";

function Main({ articles }) {
  return (
    <>
      {articles.map((article) => (
        <div key={article.url} className="main-card" onClick={() => window.open(article.url, '_blank', 'noopener,noreferrer')}>
          <div className="main-text">
            <h2>
                {article.title}
            </h2>
            <p>{article.abstract}</p>
          </div>

          {article.multimedia?.[1]?.url && (
            <img
              src={article.multimedia[1].url}
              alt={article.title}
              className="main-image"
            />
          )}
        </div>
      ))}
    </>
  );
}

export default Main;
