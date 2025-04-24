import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import profileImage from "assets/images/profile-img.png";

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
            <Grid container spacing={2} alignItems="center" sx={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
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
              <Grid
                item
                xs={12}
                lg={4}
                md={12}
                sx={{ ml: "auto", mt: { xs: 3, lg: 0 }, position: "relative", zIndex: 1 }}
              >
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

              <Grid
                item
                xs={12}
                lg={6}
                sx={{ ml: "auto", mt: { xs: 3, lg: 0 }, position: "relative", zIndex: 1 }}
              >
                <Grid container justifyContent="flex-start">
                  <Grid item xs={12} md={12} lg={12}>
                    <MKBox mb={12} lg={12}>
                      <MKTypography variant="h3" mb={3} color="white">
                        {t("about-title")}
                      </MKTypography>{" "}
                      <Grid container>
                        <MKTypography variant="body1" mb={3} color="white">
                          {" "}
                          {t("about-txt-1")}
                        </MKTypography>
                        <MKTypography variant="body1" mb={3} color="white">
                          {" "}
                          {t("about-txt-2")}
                        </MKTypography>
                        <MKTypography variant="body1" mb={3} color="white">
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
                        ></Grid>
                      </Grid>
                    </MKBox>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    </>
  );
}
