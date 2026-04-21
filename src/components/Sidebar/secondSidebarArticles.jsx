import "../../style/Sidebar/secondSidebarArticles.css";

function SecondSidebarArticles({ articles }) {
  return (
    <div className="secondSidebarArticles">
      {articles.map((article) => (
        <div key={article.url} className="secondSidebarCard">
          <div className="secondSidebarText">
            <h3>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SecondSidebarArticles;
