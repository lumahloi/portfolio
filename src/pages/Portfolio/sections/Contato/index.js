import MKBox from "components/MKBox";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";
import bgContact from "assets/images/bg-contact.avif";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Contato() {
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
                Vamos desenvolver algo incrível!
              </MKTypography>
              <MKTypography variant="body2" color="white" mb={3} mt={2}>
                Entre em contato através das formas listadas abaixo e vamos colaborar em projetos.
              </MKTypography>
              <Grid item>
                <MKSocialButton
                  component="a"
                  href="https://github.com/lumahloi"
                  target="_blank"
                  color="github"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-twitter" />
                  <GitHubIcon /> &nbsp; GitHub
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.linkedin.com/in/lumah-pereira/"
                  target="_blank"
                  color="linkedin"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-facebook" />
                  <LinkedInIcon /> &nbsp; LinkedIn
                </MKSocialButton>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </MKBox>
    </>
  );
}
