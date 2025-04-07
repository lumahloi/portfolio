// @mui icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

const date = new Date().getFullYear();

export default {
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
      items: [{ name: "Quem sou", route: "/portfolio#sobre" }],
    },
    {
      name: "Projetos",
      items: [{ name: "Meus Projetos", route: "/portfolio#projetos" }],
    },
    {
      name: "Experiências",
      items: [{ name: "Experiência Profissional", route: "/portfolio#experiencias" }],
    },
    {
      name: "Contato",
      items: [{ name: "Fale comigo", route: "/portfolio#contato" }],
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
