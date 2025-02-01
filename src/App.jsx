import "./index.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./views/Home.jsx";
import { useRecoilValue } from "recoil";
import Atom from "./lib/Atom.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nopage from "./views/Nopage.jsx";
import Settings from "./views/Settings.jsx";
import Games from "./views/Games.jsx";
import Search from "./views/Search.jsx";
import { useEffect } from "react";
import Play from "./views/Play.jsx";
import Go from "./views/Go.jsx";
import { SocialBarAd, NativeBannerAd } from "./components/Ad.jsx";

function App() {
  const currentTheme = useRecoilValue(Atom);

  useEffect(() => {
    const title = localStorage.getItem("cloakTitle");
    const favicon = localStorage.getItem("cloakFavicon");
    if (title && favicon) {
      window.cloak.setCloak(title, favicon);
    }
    if (!localStorage.getItem("searchEngine")) {
      chemical.setStore("searchEngine", "https://www.google.com/search?q=%s");
    }
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, [currentTheme]);

  return (
    <>
      <SocialBarAd />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/science" element={<Games />} />
        <Route path="/math" element={<Search />} />
        <Route path="/go" element={<Go />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/play/:game" element={<Play />} />
        <Route path="*" element={<Nopage />} />
      </Routes>
      <NativeBannerAd />
    </>
  );
}

export default App;
