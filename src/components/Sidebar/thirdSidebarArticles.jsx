import "../../style/Sidebar/thirdSidebarArticles.css";

function ThirdSidebarArticles({ articles }) {
  return (
    <div className="thirdSidebarArticles">
      {articles.map((article) => (
        <div key={article.url} className="thirdSidebarCard">
          <div className="thirdSidebarText">
            <h2>{article.title}</h2>
          </div>

          {article.media?.[0]?.["media-metadata"]?.[2]?.url && (
            <img
              src={article.media[0]["media-metadata"][2].url}
              alt={article.title}
              className="thirdSidebarImage"
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default ThirdSidebarArticles;