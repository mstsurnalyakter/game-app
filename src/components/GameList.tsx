import React from "react";

interface Game {
  id: string;
  name: string;
  img: string;
  provider: string;
  category: string;
}

interface GameListProps {
  games: Game[];
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

const GameList: React.FC<GameListProps> = ({
  games,
  favorites,
  onToggleFavorite,
}) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {games.map((game) => (
        <div
          key={game.id}
          className="bg-white p-2 sm:p-4 rounded-lg shadow-md relative flex flex-col items-center"
        >
          <div className="w-full aspect-w-16 aspect-h-9 mb-2">
            <img
              src={game.img}
              alt={game.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h3 className="text-sm sm:text-lg font-semibold text-center">
            {game.name} | {game.category}
          </h3>
          <button
            onClick={() => onToggleFavorite(game.id)}
            className={`absolute text-6xl top-4 right-7  ${
              favorites.includes(game.id) ? "text-yellow-400" : "text-gray-400"
            }`}
          >
            ★
          </button>
        </div>
      ))}
    </div>
  );
};

export default GameList;
