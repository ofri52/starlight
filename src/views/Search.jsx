import { useEffect, useState } from "react";
import { LuSearch } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { BannerAd, NativeBannerAd } from "../components/Ad";

function Search() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const apps = [
    {
      name: "Chess",
      image: "/media/apps/chess.png",
      link: "https://www.chess.com",
    },
    {
      name: "Discord",
      image: "/media/apps/discord.jpeg",
      link: "https://discord.com/app",
    },
    {
      name: "GFN",
      image: "/media/apps/GFN.png",
      link: "https://www.geforce.com",
    },
    {
      name: "Google",
      image: "/media/apps/google.png",
      link: "https://www.google.com",
    },
    {
      name: "Netflix",
      image: "/media/apps/netflix.png",
      link: "https://www.netflix.com",
    },
    { name: "Now.gg", image: "/media/apps/nowgg.png", link: "https://now.gg" },
    {
      name: "Reddit",
      image: "/media/apps/reddit.png",
      link: "https://www.reddit.com",
    },
    {
      name: "Sflix",
      image: "/media/apps/sflix.png",
      link: "https://www.sflix.to",
    },
    {
      name: "Spotify",
      image: "/media/apps/spotify.png",
      link: "https://www.spotify.com",
    },
    {
      name: "Telegram",
      image: "/media/apps/Telegram.png",
      link: "https://telegram.org",
    },
    {
      name: "TikTok",
      image: "/media/apps/tiktok.jpg",
      link: "https://www.tiktok.com",
    },
    { name: "X", image: "/media/apps/x.jpg", link: "https://x.com" },
    {
      name: "YouTube",
      image: "/media/apps/youtube.jpg",
      link: "https://www.youtube.com",
    },
  ];

  function updateTime() {
    setTime(new Date().toLocaleTimeString());
  }
  useEffect(() => {
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  async function handleOnSearch() {
    const encodedResult = await chemical.encode(searchTerm, {
      service: "uv",
      autoHttps: true,
      searchEngine: chemical.getStore("searchEngine"),
    });
    navigate("/go");
    sessionStorage.setItem("lpurl", encodedResult);
  }
  function handleOnSubmit(e) {
    e.preventDefault();
    sessionStorage.setItem("rawurl", searchTerm);
    handleOnSearch(searchTerm);
  }
  async function handleButton(link) {
    const encodedResult = await chemical.encode(link, {
      service: "uv",
      autoHttps: true,
      searchEngine: chemical.getStore("searchEngine"),
    });
    navigate("/go");
    sessionStorage.setItem("rawurl", link);
    sessionStorage.setItem("lpurl", encodedResult);
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <BannerAd />
      <h1 className="text-7xl font-bold transition-all">{time}</h1>
      <form onSubmit={handleOnSubmit} className="join items-center mt-5">
        <div className="join-item btn btn-lg btn-primary">
          <img
            src={
              localStorage.getItem("searchEngineFavicon") ||
              "/media/apps/google.png"
            }
            alt=""
            className="w-10"
          />
        </div>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          className="input input-bordered input-lg transition-width duration-300 w-[500px] focus:w-[520px] focus:input-primary join-item "
          placeholder="Search The web"
        ></input>

        <button
          className="btn btn-lg btn-primary join-item border-l-0"
          type="submit"
        >
          <LuSearch size={24} />
        </button>
      </form>
      <div className="flex mt-6 flex-wrap justify-center gap-5 w-[700px]">
        {apps.map((app, index) => {
          return (
            <button
              onClick={() => handleButton(app.link)}
              key={index}
              className="btn flex flex-col btn-ghost justify-center items-center h-[100px] w-[100px]"
            >
              <div className="flex flex-col justify-center items-center">
                <img src={`${app.image}`} alt="" className="w-7 mb-3" />
                {app.name}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Search;
