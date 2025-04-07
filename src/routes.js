import Experiencia from "pages/Portfolio/sections/Experiencia";
import Projetos from "pages/Portfolio/sections/Projetos";
import Sobre from "pages/Portfolio/sections/Contato";

const routes = [
  {
    name: "Sobre",
    route: "/",
    component: <Sobre />,
  },
  {
    name: "Projetos",
    route: "/",
    component: <Projetos />,
  },
  {
    name: "Experiência",
    route: "/",
    component: <Experiencia />,
  },
];

export default routes;
