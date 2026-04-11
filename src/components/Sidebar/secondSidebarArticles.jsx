import "../../style/Sidebar/secondSidebarArticles.css";

function SecondSidebarArticles({ articles }) {
  return (
    <div className="secondSidebarArticles">
      {articles.map((article) => (
        <div key={article.url} className="secondSidebarCard">
          <div className="secondSidebarText">
            <h3>{article.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SecondSidebarArticles;