import imgBysound from "assets/images/p-bysound.jpg";
import imgMeowverse from "assets/images/p-meowverse-1.jpg";
import imgSocialmana from "assets/images/p-socialmana-1.jpg";
import imgBookbuddy from "assets/images/p-bookbuddy-1.jpg";

export const projetos = [
  {
    id: 1,
    title: "BySound: Rede Social de Músicas",
    description:
      "Rede social mobile feita para conectar pessoas através da música. Compartilhe seus pensamentos sobre suas músicas favoritas, conecte-se com seus amigos e saiba o que estão ouvindo.",
    image: imgBysound,
    tags: ["Flutterflow", "Spotify API", "Firebase"],
  },
  {
    id: 2,
    title: "Meowverse: Loja Virtual",
    description:
      "Loja de artigos colecionáveis. Navegue pelo amplo catálogo de produtos, adicione seus produtos favoritos ao carrinho e realize o pagamento.",
    image: imgMeowverse,
    tags: ["PHP", "Bootstrap", "JavaScript", "MySQL", "ajax", "jQuery"],
    github: "https://github.com/lumahloi/meowverse",
  },
  {
    id: 5,
    title: "Mana: Rede Social",
    description:
      "Rede social inspirada no Twitter/X e Reddit para postagem de pensamentos. Conecte-se com a galera e deixe sua opinião.",
    image: imgSocialmana,
    tags: ["React", "Node", "MySQL"],
    github: "https://github.com/lumahloi/social-mana",
  },
  {
    id: 6,
    title: "BookBuddy: rede social",
    description:
      "Rede social simples focada no compartilhamento de opiniões sobre livros. Conecte-se com novas amizades, deixe suas opiniões e organize seus livros em listas.",
    image: imgBookbuddy,
    tags: ["React Native", "Google API", "Recite API"],
    github: "https://github.com/lumahloi/bookbuddy",
  },
];
