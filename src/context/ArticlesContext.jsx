import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ArticlesContext = createContext();

const TOP_STORIES_URL = "https://api.nytimes.com/svc/topstories/v2/home.json";
const MOST_POPULAR_URL =
  "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json";
const API_KEY = import.meta.env.VITE_NYT_API_KEY;

export function ArticlesProvider({ children }) {
  const [topStories, setTopStories] = useState([]);
  const [mostPopular, setMostPopular] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [topRes, popularRes] = await Promise.all([
          axios.get(TOP_STORIES_URL, { params: { "api-key": API_KEY } }),
          axios.get(MOST_POPULAR_URL, { params: { "api-key": API_KEY } }),
        ]);
          console.log("Top Stories:", topRes.data.results);
          console.log("Most Popular:", popularRes.data.results); 
        setTopStories(topRes.data.results);
        setMostPopular(popularRes.data.results);
      } catch (err) {
        setError("Errore nel caricamento degli articoli");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  return (
    <ArticlesContext.Provider
      value={{ topStories, mostPopular, loading, error }}
    >
      {children}
    </ArticlesContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useArticles() {
  return useContext(ArticlesContext);
}