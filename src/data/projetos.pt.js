import imgBysound from "assets/images/p-bysound.jpg";
import imgMeowverse from "assets/images/p-meowverse-1.jpg";
import imgMovienews from "assets/images/p-movienews-1.jpg";
import imgSisu from "assets/images/p-sisu.jpg";
import imgSocialmana from "assets/images/p-socialmana-1.jpg";

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
    tags: ["PHP", "Bootstrap", "JavaScript", "MySQL"],
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
    id: 3,
    title: "MovieNews: Notícias de Filmes",
    description: "Plataforma que retorna informações e notícias relativas a um filme.",
    image: imgMovienews,
    tags: ["HTML", "CSS", "Java", "OMDB Api", "News Api"],
    github: "https://github.com/lumahloi/movienews",
  },
  {
    id: 4,
    title: "Simulador Sisu",
    description:
      "Calculadora de média ponderada que busca simular o mesmo procedimento utilizado pelo Sisu.",
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
