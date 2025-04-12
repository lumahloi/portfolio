import MKBox from "components/MKBox";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKTypography from "components/MKTypography";
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import { experiencias as experienciasPT } from "../../../../data/experiencias.pt";
import { experiencias as experienciasEN } from "../../../../data/experiencias.en";

export default function Experiencia() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const experiencias = useMemo(() => {
    return i18n.language === "en" ? experienciasEN : experienciasPT;
  }, [i18n.language]);

  return (
    <>
      <MKBox component="section" py={12}>
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={6}
            justifyContent="center"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography variant="h2">{t("experiences-title")}</MKTypography>
          </Grid>

          <Grid container spacing={3} sx={{ mt: 8 }} justifyContent="center">
            {experiencias.map((experiencia) => (
              <Grid item xs={12} md={6} lg={12} key={experiencia.id}>
                <DefaultReviewCard
                  color={experiencia.color}
                  name={experiencia.name}
                  where={experiencia.where}
                  date={experiencia.date}
                  review={experiencia.review}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </MKBox>
    </>
  );
}
