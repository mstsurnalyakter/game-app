import React, { useState, useEffect } from "react";
import { fetchGames } from "../../services/api";
import Banner from "../../components/Banner";
import SearchBar from "../../components/SearchBar";
import GameList from "../../components/GameList";
import Categories from "../../components/Categories";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FaThLarge, FaTimes } from "react-icons/fa";

interface Game {
  id: string;
  name: string;
  img: string;
  provider: string;
  category: string;
}

// Array of game providers with logo URLs
const gameProviders = [
  {
    name: "PRAGMATICPLAY",
  },
  {
    name: "Every Matrix",
  },
  {
    name: "Evolution",
  },
  {
    name: "Ezugi",
  },
  {
    name: "Habanero",
  },
  {
    name: "Inbet",
  },
  {
    name: "NETENT",
  },
  {
    name: "Play’n GO",
  },
  {
    name: "Playson",
  },
  {
    name: "Red Tiger",
  },
];

const HomePage: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isProviderModalVisible, setIsProviderModalVisible] = useState(false);

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

  const toggleProviderModal = () => {
    setIsProviderModalVisible((prev) => !prev);
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
    setSelectedCategory((prevCategory) =>
      prevCategory === category ? null : category
    );
    setSearchQuery("");
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

        {/* Categories and Search Button */}
        <div className="flex items-center">
          <div className="flex justify-end mb-4">
            <button
              onClick={toggleSearchBar}
              className="text-lg sm:text-xl items-center p-2 flex flex-col"
            >
              <img src="https://i.postimg.cc/pXWj8jkz/search.png" alt="" />
              <span>SEARCH</span>
            </button>
          </div>
          <div className="border-l-2 border-black h-10"></div>

          {/* Categories Component */}
          <Categories
            selectedCategory={selectedCategory}
            onCategorySelect={handleCategorySelect}
          />
        </div>

        {showSearchBar && (
          <div className="flex items-center justify-center">
            <div className="flex-grow">
              <SearchBar onSearch={handleSearch} />
            </div>
            <button
              onClick={toggleProviderModal}
              className="text-gray-500 ml-4 text-lg sm:text-xl"
            >
              <FaThLarge className="text-3xl" />
            </button>
          </div>
        )}

        {/* Game List */}
        <GameList
          games={filteredGames}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
      </div>

      {/* Game Provider Modal */}
      {isProviderModalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-md w-10/12 max-w-lg p-6 relative">
            <button
              onClick={toggleProviderModal}
              className="absolute top-2 right-2 text-gray-500"
            >
              <FaTimes />
            </button>
            <h3 className="text-lg font-semibold text-blue-500 mb-4">
              Game Provider <span className="text-gray-400">(119)</span>
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {gameProviders.map((provider, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-md p-2 flex items-center justify-center"
                >
                  <span>{provider.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default HomePage;
