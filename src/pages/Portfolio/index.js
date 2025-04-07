import Card from "@mui/material/Card";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import DefaultFooter from "examples/Footers/DefaultFooter";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

import Header from "pages/Portfolio/sections/Header";
import Sobre from "pages/Portfolio/sections/Sobre";
import Projetos from "pages/Portfolio/sections/Projetos";
import Experiencia from "pages/Portfolio/sections/Experiencia";
import Contato from "pages/Portfolio/sections/Contato";

const date = new Date().getFullYear();

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
      name: "Experiências",
      onClick: () => scrollTo(experienciaRef),
    },
    {
      name: "Contato",
      onClick: () => scrollTo(contatoRef),
    },
  ];

  const footerRoutes = {
    brand: {
      name: "Lumah Pereira",
    },
    socials: [
      {
        icon: <GitHubIcon />,
        link: "https://github.com/lumahloi",
      },
      {
        icon: <LinkedInIcon />,
        link: "https://www.linkedin.com/in/lumah-pereira/",
      },
    ],
    menus: [
      {
        name: "Sobre",
        items: [{ name: "Quem sou", onClick: () => scrollTo(sobreRef) }],
      },
      {
        name: "Projetos",
        items: [{ name: "Meus Projetos", onClick: () => scrollTo(projetosRef) }],
      },
      {
        name: "Experiências",
        items: [{ name: "Experiência Profissional", onClick: () => scrollTo(experienciaRef) }],
      },
      {
        name: "Contato",
        items: [{ name: "Fale comigo", onClick: () => scrollTo(contatoRef) }],
      },
    ],

    copyright: (
      <MKTypography variant="button" fontWeight="regular">
        Todos os direitos reservados. &copy; {date} Portfolio por{" "}
        <MKTypography
          component="a"
          href="https://github.com/lumahloi"
          target="_blank"
          rel="noreferrer"
          variant="button"
          fontWeight="regular"
        >
          Lumah Pereira
        </MKTypography>
        . Copyright &copy; {date} Material Kit por{" "}
        <MKTypography
          component="a"
          href="https://www.creative-tim.com"
          target="_blank"
          rel="noreferrer"
          variant="button"
          fontWeight="regular"
        >
          Creative Tim
        </MKTypography>
        .
      </MKTypography>
    ),
  };

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
        <div ref={contatoRef} id="contato">
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
