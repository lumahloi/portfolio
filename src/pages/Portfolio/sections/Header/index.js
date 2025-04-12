import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import DownloadIcon from "@mui/icons-material/Download";

import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";

import bgOffice from "assets/images/bg-office.gif";
import cv from "assets/cv/curriculo.pdf";

import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();

  return (
    <>
      <MKBox component="header" position="relative">
        <MKBox
          display="flex"
          alignItems="center"
          minHeight="100vh"
          sx={{
            backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.5),
                rgba(gradients.dark.state, 0.5)
              )}, url(${bgOffice})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "100vh",
            }}
          >
            <Grid container item xs={12} md={12} lg={12} flexDirection="column" alignItems="center">
              <MKTypography color="white" variant="h1" mb={2}>
                Lumah Pereira
              </MKTypography>
              <MKTypography variant="h2" color="white" opacity={0.8} mb={2} textAlign="center">
                {t("header-1")}
              </MKTypography>
              <MKTypography variant="subtitle1" color="white" opacity={0.8} textAlign="center">
                {t("header-2")}
              </MKTypography>
              <Stack direction="row" spacing={2} mt={4}>
                <MKButton
                  color="primary"
                  onClick={() => {
                    const contato = document.getElementById("contato");
                    if (contato) {
                      contato.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {t("header-btn-1")}
                </MKButton>
                <a href={cv} download="curriculo.pdf">
                  <MKButton>
                    <DownloadIcon />
                    <Stack ml={1}>{t("header-btn-2")}</Stack>
                  </MKButton>
                </a>
              </Stack>
            </Grid>
          </Container>
        </MKBox>
      </MKBox>
    </>
  );
}
