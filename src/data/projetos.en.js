import imgBysound from "assets/images/p-bysound.jpg";
import imgMeowverse from "assets/images/p-meowverse-1.jpg";
import imgSocialmana from "assets/images/p-socialmana-1.jpg";
import imgBookbuddy from "assets/images/p-bookbuddy-1.jpg";

export const projetos = [
  {
    id: 1,
    title: "BySound: Music Social Network",
    description:
      "Social network that connects people through music. Share your thoughts on your favorite songs and find out what people are listening to.",
    image: imgBysound,
    tags: ["Flutterflow", "Spotify API", "Firebase"],
  },
  {
    id: 2,
    title: "Meowverse: Online Store",
    description:
      "Collectibles store. Browse the extensive product catalog, add your favorite products to your cart and checkout these pretty collectibles.",
    image: imgMeowverse,
    tags: ["CSS", "PHP", "Bootstrap", "JavaScript", "MySQL", "jQuery"],
    github: "https://github.com/lumahloi/meowverse",
  },
  {
    id: 5,
    title: "Mana: Social Network",
    description:
      "Twitter/X and Reddit-inspired social network for posting thoughts. Connect with people, leave your opinion, upvote or downvote posts.",
    image: imgSocialmana,
    tags: ["React", "Node.js", "CSS", "MySQL", "Express.js"],
    github: "https://github.com/lumahloi/social-mana",
  },
  {
    id: 6,
    title: "BookBuddy: Social Network",
    description:
      "Simple social network focused on sharing opinions about books. Connect with new friends, leave your opinions and organize your books into lists.",
    image: imgBookbuddy,
    tags: ["React Native", "Google API", "Recite API", "JavaScript", "CSS"],
    github: "https://github.com/lumahloi/bookbuddy",
  },
  {
    id: 7,
    title: "Tweet Deleter",
    description:
      "Based on your Twitter/X credentials contained in the script, Selenium is activated and the deletion process is done automatically.",
    image: imgBookbuddy,
    tags: ["Python", "Selenium"],
    github: "https://github.com/lumahloi/tweet-deleter",
  },
];
