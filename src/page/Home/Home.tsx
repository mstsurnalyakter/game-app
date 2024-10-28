import React, { useState, useEffect } from "react";
import { fetchGames } from "../../services/api";
import Banner from "../../components/Banner";
import SearchBar from "../../components/SearchBar";
import GameList from "../../components/GameList";
import Categories from "../../components/Categories";
import Header from "../../components/Header";

interface Game {
  id: string;
  name: string;
  img: string;
  provider: string;
  category: string;
}

const HomePage: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const getGames = async () => {
      const data: Game[] = await fetchGames();
      setGames(data);
      setFilteredGames(data);
    };
    getGames();
  }, []);

  const toggleSearchBar = () => {
    setShowSearchBar((prev) => !prev);
  };

  useEffect(() => {
    let result = games;

    if (selectedCategory) {
      result = result.filter((game) => game.category === selectedCategory);
    }

    if (searchQuery) {
      result = result.filter((game) =>
        game.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredGames(result);
  }, [selectedCategory, searchQuery, games]);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(prevCategory => (prevCategory === category ? null : category));
    setSearchQuery('');
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const toggleFavorite = (id: string) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((favoriteId) => favoriteId !== id)
        : [...prevFavorites, id]
    );
  };

  return (
    <div className="mx-auto max-w-7xl px-7 lg:px-2 space-y-11">
      <Header />

      <div className="space-y-11">
        <Banner />

        <div className="flex items-center  ">
          <div className="flex justify-end mb-4">
            <button
              onClick={toggleSearchBar}
              className="text-lg sm:text-xl items-center p-2 flex flex-col"
            >
              <img src="https://i.postimg.cc/pXWj8jkz/search.png" alt="" />
              <span> SEARCH</span>
            </button>
          </div>
          <div className="border-l-2 border-black h-10"></div>

          <Categories
            selectedCategory={selectedCategory}
            onCategorySelect={handleCategorySelect}
          />
        </div>
        {showSearchBar && <SearchBar onSearch={handleSearch} />}

        <GameList
          games={filteredGames}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
      </div>
    </div>
  );
};

export default HomePage;
