import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";
import MKButton from "components/MKButton";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import DownloadIcon from "@mui/icons-material/Download";
import MailIcon from "@mui/icons-material/Mail";

import profileImage from "assets/images/profile-img.png";
import cv from "assets/cv/curriculo.pdf";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { useTranslation } from "react-i18next";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function Sobre() {
  const { t } = useTranslation();

  return (
    <>
      <MKBox component="section" py={12}>
        <Container>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} lg={4} md={12} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
              <MKBox
                position="relative"
                borderRadius="lg"
                mx={2}
                mt={-3}
                sx={{
                  overflow: "visible",
                  padding: "20px",
                  border: "none",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    width: "calc(100% + 160px)",
                    height: "calc(100% + 160px)",
                    top: "-80px",
                    left: "-80px",
                    zIndex: 0,
                  }}
                >
                  <Particles
                    id="tsparticles"
                    init={useCallback(async (engine) => {
                      await loadSlim(engine);
                    }, [])}
                    options={{
                      fullScreen: { enable: false },
                      background: {
                        color: "transparent",
                      },
                      fpsLimit: 120,
                      interactivity: {
                        events: {
                          onHover: {
                            enable: true,
                            mode: "repulse",
                          },
                        },
                        modes: {
                          repulse: {
                            distance: 100,
                            duration: 0.4,
                          },
                        },
                      },
                      particles: {
                        color: {
                          value: "#ffffff",
                        },
                        links: {
                          color: "#ffffff",
                          distance: 150,
                          enable: true,
                          opacity: 0.5,
                          width: 1,
                        },
                        move: {
                          enable: true,
                          speed: 2,
                        },
                        number: {
                          density: {
                            enable: true,
                          },
                          value: 80,
                        },
                        opacity: {
                          value: 0.5,
                        },
                        shape: {
                          type: "circle",
                        },
                        size: {
                          value: { min: 1, max: 3 },
                        },
                      },
                    }}
                  />
                </div>

                <MKBox
                  component="img"
                  src={profileImage}
                  alt="Lumah Pereira em Pixel Art"
                  borderRadius="lg"
                  width="100%"
                  position="relative"
                  zIndex={1}
                  sx={{
                    boxShadow: "0 4px 20px 0 rgba(0, 0, 0, 0.25)",
                  }}
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} lg={6} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
              <Grid container justifyContent="flex-start">
                <Grid item xs={12} md={12} lg={12}>
                  <MKBox mb={12} lg={12}>
                    <MKTypography variant="h3" mb={3}>
                      {t("about-title")}
                    </MKTypography>{" "}
                    <Grid container>
                      <MKTypography variant="body1" mb={3}>
                        {" "}
                        {t("about-txt-1")}
                      </MKTypography>
                      <MKTypography variant="body1" mb={3}>
                        {" "}
                        {t("about-txt-2")}
                      </MKTypography>
                      <MKTypography variant="body1" mb={3}>
                        {" "}
                        {t("about-txt-3")}
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
                            <span style={{ marginLeft: "8px" }}>{t("header-btn-2")}</span>
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
