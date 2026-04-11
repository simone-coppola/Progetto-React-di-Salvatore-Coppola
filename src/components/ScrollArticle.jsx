import { useState, useEffect } from "react";
import "../style/ScrollArticle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Scroll({ articles }) {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setItemsPerView(1);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleArticles = articles.slice(startIndex, startIndex + itemsPerView);

  const next = () => {
    if (startIndex + itemsPerView < articles.length) {
      setStartIndex(startIndex + itemsPerView);
    }
  };

  const prev = () => {
    if (startIndex - itemsPerView >= 0) {
      setStartIndex(startIndex - itemsPerView);
    }
  };

  return (
    <div className="scroll-container">
      {startIndex > 0 && (
        <button className="arrow left" onClick={prev}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
      )}

      <div className="scroll-wrapper">
        {visibleArticles.map((article) => (
          <div key={article.url} className="scroll-card">
            {article.multimedia?.[2]?.url && (
              <img
                src={article.multimedia[2].url}
                alt={article.title}
                className="scroll-image"
              />
            )}

            <div className="scroll-text">
              <h2>{article.title}</h2>
            </div>
          </div>
        ))}
      </div>

      {startIndex + itemsPerView < articles.length && (
        <button className="arrow right" onClick={next}>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      )}
    </div>
  );
}

export default Scroll;