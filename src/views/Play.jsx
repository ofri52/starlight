import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import games from "../assets/games.json";
import { Fullscreen } from "lucide-react";

function Play() {
  const iframe = useRef(null);
  const { game } = useParams();
  const gameData = games.find((g) => g.url === game);

  if (!gameData) {
    return <div>Game not found.</div>;
  }
  const gameUrl = `/cdn/${gameData.url}/`;
  console.log(gameUrl);

  return (
    <div className="flex flex-col items-center aspect-video overflow-hidden">
      <div className="card bg-base-300 w-[calc(100vw-9.9rem)] h-[calc(100vh-9.9rem)]  shadow-xl flex overflow-hidden">
        <iframe
          ref={iframe}
          src={gameUrl}
          title={gameData.name || "Game"}
          allowFullScreen
          className="w-full h-full"
          frameBorder="0"
        />
        <div className="flex flex-row items-center p-4 justify-between">
          <img
            src={gameUrl + gameData.image}
            alt=""
            className="w-10 rounded-2xl"
          />
          <h1 className="text-lg font-bold mt-2">{gameData.name || game}</h1>
          <button
            className="btn btn-primary"
            onClick={() => {
              iframe.current.requestFullscreen();
            }}
          >
            <Fullscreen />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Play;
