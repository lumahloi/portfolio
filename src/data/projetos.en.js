import imgBysound from "assets/images/p-bysound.jpg";
import imgMeowverse from "assets/images/p-meowverse-1.jpg";
import imgMovienews from "assets/images/p-movienews-1.jpg";
import imgSisu from "assets/images/p-sisu.jpg";
import imgSocialmana from "assets/images/p-socialmana-1.jpg";

export const projetos = [
  {
    id: 1,
    title: "BySound: Music Social Network",
    description:
      "Mobile social network designed to connect people through music. Share your thoughts on your favorite songs, connect with your friends and see what they're listening to.",
    image: imgBysound,
    tags: ["Flutterflow", "Spotify API", "Firebase"],
  },
  {
    id: 2,
    title: "Meowverse: Online Store",
    description:
      "Collectibles store. Browse the extensive product catalog, add your favorite products to your cart and checkout.",
    image: imgMeowverse,
    tags: ["PHP", "Bootstrap", "JavaScript", "MySQL"],
    github: "https://github.com/lumahloi/meowverse",
  },
  {
    id: 5,
    title: "Mana: Social Network",
    description:
      "Social network inspired by Twitter/X and Reddit for posting thoughts. Connect with people and leave your opinion.",
    image: imgSocialmana,
    tags: ["React", "Node", "MySQL"],
    github: "https://github.com/lumahloi/social-mana",
  },
  {
    id: 3,
    title: "MovieNews: News about Movies",
    description: "Platform that returns information and news related to a film.",
    image: imgMovienews,
    tags: ["HTML", "CSS", "Java", "OMDB Api", "News Api"],
    github: "https://github.com/lumahloi/movienews",
  },
  {
    id: 4,
    title: "Sisu Simulator",
    description:
      "Weighted average calculator that seeks to simulate the same procedure used by Sisu.",
    image: imgSisu,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/lumahloi/simulador-sisu",
  },
  // {
  //   id: X,
  //   title: "NOME",
  //   description:
  //     "AAAAAAAAAAAAAAAAAA",
  //   image: AQUI,
  //   tags: ["", ""],
  //   github: "AAAAAAAAAAAA",
  // },
];
