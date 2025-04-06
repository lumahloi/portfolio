import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import bgImage from "assets/images/bg-cats.gif";
import img from "assets/images/rotating-card-bg-front.jpeg"

function Portfolio() {
  return (
    <>
      <MKBox component="header" position="relative">
        <MKBox component="nav" position="absolute" top="0.5rem" width="100%">
          <Container>
            <Grid container flexDirection="row" alignItems="center">
              <MKTypography
                component={Link}
                href="#"
                variant="button"
                color="white"
                fontWeight="regular"
                py={0.8125}
                mr={2}
              >
                Material Design
              </MKTypography>
              <MKButton
                variant="outlined"
                color="white"
                sx={{ display: { xs: "block", lg: "none" }, ml: "auto" }}
              >
                <MKBox component="i" color="white" className="fas fa-bars" />
              </MKButton>
              <MKBox
                component="ul"
                display={{ xs: "none", lg: "flex" }}
                p={0}
                my={0}
                mx="auto"
                sx={{ listStyle: "none" }}
              >
                <MKBox component="li">
                  <MKTypography
                    component={Link}
                    href="#"
                    variant="button"
                    color="white"
                    fontWeight="regular"
                    p={1}
                    onClick={(e) => e.preventDefault()}
                  >
                    Home
                  </MKTypography>
                </MKBox>
                <MKBox component="li">
                  <MKTypography
                    component={Link}
                    href="#"
                    variant="button"
                    color="white"
                    fontWeight="regular"
                    p={1}
                    onClick={(e) => e.preventDefault()}
                  >
                    About Us
                  </MKTypography>
                </MKBox>
                <MKBox component="li">
                  <MKTypography
                    component={Link}
                    href="#"
                    variant="button"
                    color="white"
                    fontWeight="regular"
                    p={1}
                    onClick={(e) => e.preventDefault()}
                  >
                    Contact Us
                  </MKTypography>
                </MKBox>
              </MKBox>
              <MKBox
                component="ul"
                display={{ xs: "none", lg: "flex" }}
                p={0}
                m={0}
                sx={{ listStyle: "none" }}
              >
                <MKBox component="li">
                  <MKTypography
                    component={Link}
                    href="#"
                    variant="button"
                    p={1}
                    onClick={(e) => e.preventDefault()}
                  >
                    <MKBox component="i" color="white" className="fab fa-twitter" />
                  </MKTypography>
                </MKBox>
                <MKBox component="li">
                  <MKTypography
                    component={Link}
                    href="#"
                    variant="button"
                    p={1}
                    onClick={(e) => e.preventDefault()}
                  >
                    <MKBox component="i" color="white" className="fab fa-facebook" />
                  </MKTypography>
                </MKBox>
                <MKBox component="li">
                  <MKTypography
                    component={Link}
                    href="#"
                    variant="button"
                    p={1}
                    onClick={(e) => e.preventDefault()}
                  >
                    <MKBox component="i" color="white" className="fab fa-instagram" />
                  </MKTypography>
                </MKBox>
              </MKBox>
            </Grid>
          </Container>
        </MKBox>
        <MKBox
          display="flex"
          alignItems="center"
          minHeight="100vh"
          sx={{
            backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) => `${linearGradient(rgba(gradients.dark.main, 0.5), rgba(gradients.dark.state, 0.5))}, url(${bgImage})`,
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
            <Grid container item xs={12} md={12} lg={12} flexDirection="column" justifyContent="center" alignItems="center">
              <MKTypography color="white" variant="h1">
                Lumah Pereira
              </MKTypography>
              <MKTypography variant="h2" color="white" opacity={0.8} textAlign="center">
                Uso a tecnologia para fazer a diferença
              </MKTypography>
              <MKTypography variant="subtitle1" color="white" opacity={0.8} textAlign="center">
                Desenvolvedora fullstack focada em soluções eficientes e experiências de usuário memoráveis
              </MKTypography>
              <Stack direction="row" spacing={1} mt={3}>
                <MKButton color="white">Get Started</MKButton>
                <MKButton variant="text" color="white">
                  Read more
                </MKButton>
              </Stack>
            </Grid>
          </Container>
        </MKBox>
      </MKBox>
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
        <MKBox component="section" py={12}>
          <Container>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} lg={4} md={12} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
                <CenteredBlogCard
                  image={img}
                  action={{
                    type: "internal",
                    route: "pages/company/about-us",
                    color: "info",
                    label: "GitHub",
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={6} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
                <Grid container justifyContent="flex-start">
                  <Grid item xs={12} md={12} lg={12}>
                    <MKBox mb={12} lg={12}>
                      <MKTypography variant="h3" mb={3}>Sobre mim</MKTypography>  {/* Adicionei mb aqui */}
                      <MKTypography variant="body1" mb={3}>  {/* mb=3 equivale a 24px */}
                        Uso da tecnologia para superar obstáculos e automatizar tarefas tanto da minha vida pessoal quanto dos que observo ao meu redor. Para tanto, sou formada em Análise e Desenvolvimento de Sistemas e coleciono algumas certificações na área.
                      </MKTypography>
                      <MKTypography variant="body1" mb={3}>  {/* mb=3 mantém consistência */}
                        Ainda na tecnologia, sou fascinada por testes de intrusão (o tal Red Team) e desenvolvimento de jogos.
                      </MKTypography>
                      <MKTypography variant="body1">  {/* Sem mb no último parágrafo */}
                        Minhas principais soft skills que humildemente destaco são adaptação, honestidade, organização, resiliência e iniciativa própria. Os meus hobbies incluem design gráfico, crochet, vídeo-games e crítica do audiovisual.
                      </MKTypography>
                    </MKBox>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </Card>
    </>
  );
}

export default Portfolio;