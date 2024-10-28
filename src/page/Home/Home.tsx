import React, { useState, useEffect } from "react";
import { fetchGames } from "../../services/api";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import SearchBar from "../../components/SearchBar";

const HomePage: React.FC = () => {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);

  useEffect(() => {
    const getGames = async () => {
      const data: any = await fetchGames();
      setGames(data);
      setFilteredGames(data);
    };
    getGames();
  }, []);

  const handleSearch = (query: string) => {
    const results = games.filter((game) =>
      game.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredGames(results);
  };

  return (
    <div className="px-20 space-y-10">
      <Header />
      <Banner />
      <div className="flex gap-2 items-center">
        <img
          src="https://i.postimg.cc/d0nn2nvP/bell-svgrepo-com-1.png"
          alt=""
          className="w-7"
        />
        <h2 className="text-2xl text-[#00A6FF]">
          ¡FELICIDADES artxxxxipa! GANADOR DESTACADO{" "}
        </h2>
        <SearchBar onSearch={handleSearch} />
      </div>
    </div>
    // <div>
    //   <Banner />
    //   <SearchBar onSearch={handleSearch} />
    //   <GameList games={filteredGames} />
    // </div>
  );
};

export default HomePage;
