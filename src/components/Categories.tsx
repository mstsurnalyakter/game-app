import React from "react";

interface CategoriesProps {
  selectedCategory: string | null;
  onCategorySelect: (category: string) => void;
}

const categories = [
  {
    name: "START",
    icon: "https://i.postimg.cc/wjSchv1z/fire-svgrepo-com-1-1.png",
  },
  {
    name: "NEW",
    icon: "https://i.postimg.cc/mDcsKmbC/Vector-3.png",
  },
  {
    name: "SLOTS",
    icon: "https://i.postimg.cc/0Q7t6Snh/slot-machine-casino-svgrepo-com-2-1.png",
  },
  {
    name: "LIVE",
    icon: "https://i.postimg.cc/2800Brdj/casino-dealer-illustration-2-svgrepo-com-1-1.png",
  },
  {
    name: "JACKPOTS",
    icon: "https://i.postimg.cc/3wv16GsW/jackpots.png",
  },
];

const Categories: React.FC<CategoriesProps> = ({
  selectedCategory,
  onCategorySelect,
}) => {
  return (
    <div className="flex flex-wrap space-x-2 sm:space-x-4 mb-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategorySelect(category.name)}
          className={`py-1 sm:py-2 px-2 sm:px-4 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-200 ${
            selectedCategory === category.name
              ? "text-[#00A6FF]"
              : " text-gray-700"
          }`}
        >
          <img className="" src={category.icon} alt="" />
          <span
            className={` ${
              selectedCategory === category.name
                ? "text-[#00A6FF] underline"
                : " text-gray-700"
            }`}
          >
            {category.name}
          </span>
        </button>
      ))}
    </div>
  );
};

export default Categories;
