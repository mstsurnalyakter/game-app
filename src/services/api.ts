// src/services/api.ts

export const fetchGames = () =>
  new Promise((resolve) => {
    const games = [
      {
        id: "101",
        name: "SHADLIN CREW",
        img: "https://i.postimg.cc/Kzxj2rgz/crew.png",
        category: "NEW",
      },
      {
        id: "102",
        name: "BIG BAD WOLF",
        img: "https://i.postimg.cc/RZvvqVZs/wolf.png",
        category: "SLOTS",
      },
      {
        id: "103",
        name: "Book OF EGYPT",
        img: "https://i.postimg.cc/SQTyjpMk/book.png",
        category: "NEW",
      },
      {
        id: "104",
        name: "PIRATES POWER",
        img: "https://i.postimg.cc/wv4Sxgbr/power.png",
        category: "JACKPOTS",
      },
      {
        id: "105",
        name: "CROCODILE BLITZ",
        img: "https://i.postimg.cc/Z5Vks8xZ/xtreme.png",
        category: "SLOTS",
      },
      {
        id: "106",
        name: "ANACONDA WILD 2 POWERPLAY JACKPOT",
        img: "https://i.postimg.cc/Z5Vks8xZ/xtreme.png",
        category: "LIVE",
      },
      {
        id: "107",
        name: "MAYA JACKPOT",
        img: "https://i.postimg.cc/R0kgghy4/jackpot.png",
        category: "SLOTS",
      },
      {
        id: "108",
        name: "BEACH LIFE",
        img: "https://i.postimg.cc/DzLrygp3/beach.png",
        category: "START",
      },
      {
        id: "109",
        name: "INCA JACKPOT",
        img: "https://i.postimg.cc/0Q9w5qJ7/inca.png",
        category: "SLOTS",
      },
      {
        id: "110",
        name: "PRIDE OF PERSIA EMPIRE",
        img: "https://i.postimg.cc/0Q9w5qJ7/inca.png",
        category: "JACKPOTS",
      },
    ];
    setTimeout(() => resolve(games), 3000);
  });
