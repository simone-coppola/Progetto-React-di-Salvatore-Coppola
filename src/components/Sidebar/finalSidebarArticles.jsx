import "../../style/Sidebar/finalSidebarArticles.css";

function FinalSidebarArticles({ articles }) {
  return (
    <div className="finalSidebarArticles">
      {articles.map((article) => (
        <div key={article.url} className="finalSidebarCard">
          <div className="finalSidebarText">
            <h2>{article.title}</h2>
            <p>{article.abstract}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FinalSidebarArticles;