import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import { projetos as projetosPT } from "../../../../data/projetos.pt";
import { projetos as projetosEN } from "../../../../data/projetos.en";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import TransparentBlogCard from "./sections/TransparentBlogCard";

export default function Projetos() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const projetos = useMemo(() => {
    return i18n.language === "en" ? projetosEN : projetosPT;
  }, [i18n.language]);

  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            {t("projects-title")}
          </MKTypography>
        </Grid>

        <Grid container spacing={3}>
          {projetos.map((projeto) => (
            <Grid item xs={12} md={6} lg={4} key={projeto.id}>
              <TransparentBlogCard
                image={projeto.image}
                title={projeto.title}
                description={projeto.description}
                tags={projeto.tags}
                github={projeto.github}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}
