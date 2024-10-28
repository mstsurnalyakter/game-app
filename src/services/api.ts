export const fetchGames = () =>
  new Promise((resolve) => {
    const games = [
      {
        id: "101",
        name: "SHADLIN CREW",
        img: "https://i.postimg.cc/Kzxj2rgz/crew.png",
      },
      {
        id: "102",
        name: "BIG BAD WOLF",
        img: "https://i.postimg.cc/RZvvqVZs/wolf.png",
      },
      {
        id: "103",
        name: "Book OF EGYPT",
        img: "https://i.postimg.cc/SQTyjpMk/book.png",
      },
      {
        id: "104",
        name: "PIRATES POWER",
        img: "https://i.postimg.cc/wv4Sxgbr/power.png",
      },
      {
        id: "105",
        name: "CROCODILE BLITZ",
        img: "https://i.postimg.cc/Z5Vks8xZ/xtreme.png",
      },
      {
        id: "106",
        name: "ANACONDA WILD 2 POWERPLAY JACKPOT",
        img: "https://i.postimg.cc/Z5Vks8xZ/xtreme.png",
      },
      {
        id: "106",
        name: "MAYA JACKPOT",
        img: "https://i.postimg.cc/R0kgghy4/jackpot.png",
      },
      {
        id: "107",
        name: "BEACH LIFE",
        img: "https://i.postimg.cc/DzLrygp3/beach.png",
      },
      {
        id: "108",
        name: "INCA JACKPOT",
        img: "https://i.postimg.cc/0Q9w5qJ7/inca.png",
      },
      {
        id: "109",
        name: "PRIDE OF PERSIA EMPIRE",
        img: "https://i.postimg.cc/0Q9w5qJ7/inca.png",
      }
    ];
    setTimeout(() => resolve(games), 3000); 
  });
