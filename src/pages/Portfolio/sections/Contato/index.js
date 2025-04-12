import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MailIcon from "@mui/icons-material/Mail";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";
import MKButton from "components/MKButton";

import bgContact from "assets/images/bg-contact.jpg";
import { useTranslation } from "react-i18next";

export default function Contato() {
  const { t } = useTranslation();
  return (
    <>
      <MKBox component="section" py={{ xs: 0, sm: 12 }}>
        <MKBox
          variant="gradient"
          bgColor="dark"
          position="relative"
          borderRadius="xl"
          sx={{ overflow: "hidden" }}
        >
          <MKBox
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            zIndex={1}
            sx={{
              backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
                `${linearGradient(
                  rgba(gradients.dark.main, 0.5),
                  rgba(gradients.dark.state, 0.5)
                )}, url(${bgContact})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <Container sx={{ position: "relative", zIndex: 2, py: 12 }}>
            <Grid
              container
              item
              xs={12}
              md={7}
              justifyContent="center"
              mx="auto"
              textAlign="center"
            >
              <MKTypography variant="h3" color="white">
                {t("contact-title")}
              </MKTypography>
              <MKTypography variant="body2" color="white" mb={3} mt={2}>
                {t("contact-1")}
              </MKTypography>
              <Grid container spacing={1} justifyContent="center">
                <Grid item xs={12} sm="auto">
                  <MKSocialButton
                    component="a"
                    href="https://github.com/lumahloi"
                    target="_blank"
                    color="github"
                    fullWidth
                  >
                    <i className="fab fa-github" />
                    <GitHubIcon /> &nbsp; GitHub
                  </MKSocialButton>
                </Grid>
                <Grid item xs={12} sm="auto">
                  <MKSocialButton
                    component="a"
                    href="https://www.linkedin.com/in/lumah-pereira/"
                    target="_blank"
                    color="linkedin"
                    fullWidth
                  >
                    <i className="fab fa-linkedin" />
                    <LinkedInIcon /> &nbsp; LinkedIn
                  </MKSocialButton>
                </Grid>
                <Grid item xs={12} sm="auto">
                  <MKButton
                    component="a"
                    href="mailto:lumah.pereira26@gmail.com"
                    color="secondary"
                    fullWidth
                  >
                    <i className="fas fa-envelope" /> <MailIcon /> &nbsp; E-mail
                  </MKButton>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </MKBox>
    </>
  );
}
