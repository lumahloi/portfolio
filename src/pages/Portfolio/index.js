import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Card from "@mui/material/Card";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import Footer from "./sections/Footer";
import Navbar from "./sections/Navbar";
import Header from "./sections/Header";
import Sobre from "./sections/Sobre";
import Projetos from "./sections/Projetos";
import Experiencia from "./sections/Experiencia";
import Contato from "./sections/Contato";

import PropTypes from "prop-types";

const AnimatedSection = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

AnimatedSection.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
};

function Portfolio() {
  const date = new Date().getFullYear();
  const sobreRef = useRef(null);
  const projetosRef = useRef(null);
  const experienciaRef = useRef(null);
  const contatoRef = useRef(null);

  const { t } = useTranslation();

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const navbarRoutes = [
    {
      name: t("nav-1"),
      onClick: () => scrollTo(sobreRef),
    },
    {
      name: t("nav-2"),
      onClick: () => scrollTo(projetosRef),
    },
    {
      name: t("nav-3"),
      onClick: () => scrollTo(experienciaRef),
    },
    {
      name: t("nav-4"),
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
      {
        icon: <MailIcon />,
        link: "mailto:lumah.pereira26@gmail.com",
      },
    ],
    menus: [
      {
        name: t("nav-1"),
        items: [{ name: t("footer-txt-1"), onClick: () => scrollTo(sobreRef) }],
      },
      {
        name: t("nav-2"),
        items: [{ name: t("footer-txt-2"), onClick: () => scrollTo(projetosRef) }],
      },
      {
        name: t("nav-3"),
        items: [{ name: t("footer-txt-3"), onClick: () => scrollTo(experienciaRef) }],
      },
      {
        name: t("nav-4"),
        items: [{ name: t("nav-4"), onClick: () => scrollTo(contatoRef) }],
      },
    ],

    copyright: (
      <MKTypography variant="button" fontWeight="regular">
        {t("footer-main-1")} &copy; {date} {t("footer-main-2")}{" "}
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
        . Copyright &copy; {date} Material Kit {t("footer-main-3")}{" "}
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
      <Navbar brand="Lumah Pereira" routes={navbarRoutes} sticky />
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
          <AnimatedSection>
            <Sobre />
          </AnimatedSection>
        </div>

        <div ref={projetosRef}>
          <AnimatedSection delay={0.2}>
            <Projetos />
          </AnimatedSection>
        </div>

        <div ref={experienciaRef}>
          <AnimatedSection delay={0.4}>
            <Experiencia />
          </AnimatedSection>
        </div>

        <div ref={contatoRef} id="contato">
          <AnimatedSection delay={0.6}>
            <Contato />
          </AnimatedSection>
        </div>
      </Card>

      <MKBox pt={6} px={1} mt={6}>
        <Footer content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Portfolio;
