import Card from "@mui/material/Card";

import MKBox from "components/MKBox";

import DefaultFooter from "examples/Footers/DefaultFooter";

import footerRoutes from "footer.routes";

import Header from "pages/Portfolio/sections/Header";
import Sobre from "pages/Portfolio/sections/Sobre";
import Projetos from "pages/Portfolio/sections/Projetos";
import Experiencia from "pages/Portfolio/sections/Experiencia";
import Contato from "pages/Portfolio/sections/Contato";

function Portfolio() {
  return (
    <>
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
        <Sobre />

        <Projetos />

        <Experiencia />

        <Contato />
      </Card>

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Portfolio;
