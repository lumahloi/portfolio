import imgBysound from "assets/images/p-bysound.jpg";
import imgMeowverse from "assets/images/p-meowverse-1.jpg";
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
    tags: ["PHP", "Bootstrap", "JavaScript", "MySQL", "ajax", "jQuery"],
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
    id: 6,
    title: "BookBuddy: Social Network",
    description:
      "Simple social network focused on sharing opinions about books. Connect with new friends, leave your opinions and organize your books into lists.",
    image: imgBookbuddy,
    tags: ["React Native", "Google API", "Recite API"],
    github: "https://github.com/lumahloi/bookbuddy",
  },
];
