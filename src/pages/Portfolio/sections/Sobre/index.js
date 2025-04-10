import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";
import MKButton from "components/MKButton";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import DownloadIcon from "@mui/icons-material/Download";
import MailIcon from "@mui/icons-material/Mail";

import profileImage from "assets/images/profile-img.png";
import cv from "assets/cv/curriculo.pdf";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Sobre() {
  return (
    <>
      <MKBox component="section" py={12}>
        <Container>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} lg={4} md={12} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
              <Card>
                <MKBox position="relative" borderRadius="lg" mx={2} mt={-3}>
                  <MKBox
                    component="img"
                    src={profileImage}
                    alt="Lumah Pereira em Pixel Art"
                    borderRadius="lg"
                    width="100%"
                    position="relative"
                    zIndex={1}
                  />
                  <MKBox
                    borderRadius="lg"
                    shadow="md"
                    width="100%"
                    height="100%"
                    position="absolute"
                    left={0}
                    top={0}
                    sx={{
                      backgroundImage: `url(${profileImage})`,
                      transform: "scale(0.94)",
                      filter: "blur(12px)",
                      backgroundSize: "cover",
                    }}
                  />
                </MKBox>
              </Card>
            </Grid>
            <Grid item xs={12} lg={6} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
              <Grid container justifyContent="flex-start">
                <Grid item xs={12} md={12} lg={12}>
                  <MKBox mb={12} lg={12}>
                    <MKTypography variant="h3" mb={3}>
                      Sobre mim
                    </MKTypography>{" "}
                    <Grid container>
                      <MKTypography variant="body1" mb={3}>
                        {" "}
                        Uso da tecnologia para superar obstáculos e automatizar tarefas tanto da
                        minha vida pessoal quanto dos que observo ao meu redor. Para tanto, sou
                        formada em Análise e Desenvolvimento de Sistemas e coleciono algumas
                        certificações na área.
                      </MKTypography>
                      <MKTypography variant="body1" mb={3}>
                        {" "}
                        Ainda na tecnologia, sou fascinada por testes de intrusão (o tal Red Team) e
                        desenvolvimento de jogos.
                      </MKTypography>
                      <MKTypography variant="body1" mb={3}>
                        {" "}
                        Minhas principais soft skills que humildemente destaco são adaptação, rápida
                        aprendizagem, organização, resiliência e iniciativa própria. Os meus hobbies
                        incluem design gráfico, crochet, vídeo-games e crítica do audiovisual.
                      </MKTypography>
                      <Grid
                        container
                        spacing={1}
                        alignItems="center"
                        justifyContent="center"
                        sx={{ width: "100%" }}
                        mt={3}
                      >
                        <Grid item xs={12} sm="auto">
                          <MKSocialButton
                            component="a"
                            href="https://github.com/lumahloi"
                            target="_blank"
                            color="github"
                            fullWidth
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              py: 1.5,
                              "& .MuiButton-startIcon": {
                                margin: 0,
                                "& > *:nth-of-type(1)": {
                                  fontSize: "1rem",
                                  marginBottom: 0,
                                },
                              },
                            }}
                            startIcon={
                              <>
                                <i className="fab fa-github" />
                                <GitHubIcon sx={{ fontSize: "1rem", ml: 0.5 }} />
                              </>
                            }
                          >
                            <span style={{ marginLeft: "8px" }}>GitHub</span>
                          </MKSocialButton>
                        </Grid>

                        <Grid item xs={12} sm="auto">
                          <MKSocialButton
                            component="a"
                            href="https://www.linkedin.com/in/lumah-pereira/"
                            target="_blank"
                            color="linkedin"
                            fullWidth
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              py: 1.5,
                              "& .MuiButton-startIcon": {
                                margin: 0,
                                "& > *:nth-of-type(1)": {
                                  fontSize: "1rem",
                                  marginBottom: 0,
                                },
                              },
                            }}
                            startIcon={
                              <>
                                <i className="fab fa-linkedin" />
                                <LinkedInIcon sx={{ fontSize: "1rem", ml: 0.5 }} />
                              </>
                            }
                          >
                            <span style={{ marginLeft: "8px" }}>LinkedIn</span>
                          </MKSocialButton>
                        </Grid>

                        <Grid item xs={12} sm="auto">
                          <MKButton
                            component="a"
                            href={cv}
                            download="curriculo.pdf"
                            color="primary"
                            fullWidth
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              py: 1.5,
                              textDecoration: "none",
                            }}
                            startIcon={<DownloadIcon />}
                          >
                            <span style={{ marginLeft: "8px" }}>Currículo</span>
                          </MKButton>
                        </Grid>

                        <Grid item xs={12} sm="auto">
                          <MKButton
                            component="a"
                            href="mailto:lumah.pereira26@gmail.com"
                            color="secondary"
                            fullWidth
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              py: 1.5,
                              textDecoration: "none",
                            }}
                            startIcon={<MailIcon />}
                          >
                            <span style={{ marginLeft: "8px" }}>E-mail</span>
                          </MKButton>
                        </Grid>
                      </Grid>
                    </Grid>
                  </MKBox>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    </>
  );
}
