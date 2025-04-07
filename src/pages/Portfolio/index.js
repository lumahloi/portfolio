import Card from "@mui/material/Card";

import MKBox from "components/MKBox";

import DefaultFooter from "examples/Footers/DefaultFooter";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

import footerRoutes from "footer.routes";

import Header from "pages/Portfolio/sections/Header";
import Sobre from "pages/Portfolio/sections/Sobre";
import Projetos from "pages/Portfolio/sections/Projetos";
import Experiencia from "pages/Portfolio/sections/Experiencia";
import Contato from "pages/Portfolio/sections/Contato";

import { useRef } from "react";

function Portfolio() {
  const sobreRef = useRef(null);
  const projetosRef = useRef(null);
  const experienciaRef = useRef(null);
  const contatoRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const navbarRoutes = [
    {
      name: "Sobre",
      onClick: () => scrollTo(sobreRef),
    },
    {
      name: "Projetos",
      onClick: () => scrollTo(projetosRef),
    },
    {
      name: "Experiência",
      onClick: () => scrollTo(experienciaRef),
    },
    {
      name: "Contato",
      onClick: () => scrollTo(contatoRef),
    },
  ];

  return (
    <>
      <DefaultNavbar brand="Lumah Pereira" routes={navbarRoutes} sticky />
      <Header />
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <div ref={sobreRef}>
          <Sobre />
        </div>
        <div ref={projetosRef}>
          <Projetos />
        </div>
        <div ref={experienciaRef}>
          <Experiencia />
        </div>
        <div ref={contatoRef}>
          <Contato />
        </div>
      </Card>

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Portfolio;
