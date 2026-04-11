import "../../style/Sidebar/firstSidebarArticle.css";

function FirstSidebarArticle({ article }) {
  if (!article) return null;

  return (
    <div className="firstSidebarArticle">
      {article.media?.[0]?.["media-metadata"]?.[2]?.url && (
        <>
          <img
            src={article.media[0]["media-metadata"][2].url}
            alt={article.title}
            className="firstSidebarImage"
          />

          <div className="firstSidebarText">
            <h3>{article.title}</h3>
            <p>{article.abstract}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default FirstSidebarArticle;