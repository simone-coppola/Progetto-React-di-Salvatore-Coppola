import "./App.css";

import { Routes, Route } from "react-router-dom";

import { MenuProvider } from "./context/MenuContext";
import { ArticlesProvider } from "./context/ArticlesContext";

import Home from "./pages/Home";
import WorldPage from "./pages/WorldPage";
import BusinessPage from "./pages/BusinessPage";
import ArtsPage from "./pages/ArtsPage";
import LifestylePage from "./pages/LifestylePage";
import OpinionPage from "./pages/OpinionPage";
import VideoPage from "./pages/VideoPage";
import AudioPage from "./pages/AudioPage";
import GamesPage from "./pages/GamesPage";
import CookingPage from "./pages/CookingPage";
import WirecutterPage from "./pages/WirecutterPage";
import TheAthleticPage from "./pages/TheAthleticPage";
import USPage from "./pages/USPage";

function App() {
  return (
    <ArticlesProvider>
      <MenuProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/world" element={<WorldPage />} />
          <Route path="/business" element={<BusinessPage />} />
          <Route path="/arts" element={<ArtsPage />} />
          <Route path="/lifestyle" element={<LifestylePage />} />
          <Route path="/opinion" element={<OpinionPage />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="/audio" element={<AudioPage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/cooking" element={<CookingPage />} />
          <Route path="/wirecutter" element={<WirecutterPage />} />
          <Route path="/the-athletic" element={<TheAthleticPage />} />
          <Route path="/us" element={<USPage />} />
        </Routes>
      </MenuProvider>
    </ArticlesProvider>
  );
}

export default App;