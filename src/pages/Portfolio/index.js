import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";
import DefaultFooter from "examples/Footers/DefaultFooter";

import bgImage from "assets/images/bg-cats.gif";
import profileImage from "assets/images/profile-img.png";

import footerRoutes from "footer.routes";

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

        <MKBox component="section" py={2}>
          <Container>
            <Grid container item xs={12} lg={6}>
              <MKTypography variant="h3" mb={6}>
                Meus projetos
              </MKTypography>
            </Grid>
            <Grid container spacing={5} justifyContent="space-around">
              <Grid item xs={12} md={6} sm={12} lg={4}>
                <TransparentBlogCard
                  image={bgImage}
                  title="Rover raised $65 million"
                  description="Finding temporary housing for your dog should be as easy as renting an Airbnb. That’s the idea behind Rover ..."
                  action={{
                    type: "internal",
                    route: "/pages/blogs/author",
                    color: "info",
                    label: "read more",
                  }}
                />
              </Grid>
            </Grid>
          </Container>
        </MKBox>

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
              <MKTypography variant="h2">Experiência profissional</MKTypography>
            </Grid>
            <Grid container spacing={3} sx={{ mt: 8 }} justifyContent="center">
              <Grid item xs={12} md={6} lg={4}>
                <DefaultReviewCard
                  color="info"
                  name="Estagiária em Desenvolvimento Web"
                  date="Julho 2024 - Julho 2025"
                  review="I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!"
                />
              </Grid>
              {/* <Grid item xs={12} md={6} lg={4}>
                <DefaultReviewCard
                  name="Nick Willever"
                  date="1 day ago"
                  review="This is an excellent product, the documentation is excellent and helped me get things done more efficiently."
                  rating={5}
                />
              </Grid> */}
            </Grid>
          </Container>
        </MKBox>

        <MKBox component="section" py={{ xs: 0, sm: 12 }}>
          <MKBox
            variant="gradient"
            bgColor="dark"
            position="relative"
            borderRadius="xl"
            sx={{ overflow: "hidden" }}
          >
            <MKBox
              component="bgImage"
              src={bgImage}
              alt="pattern-lines"
              position="absolute"
              top={0}
              left={0}
              width="100%"
              zIndex={1}
              opacity={0.2}
            />
            <Container sx={{ position: "relative", zIndex: 2, py: 12 }}>
              <Grid container item xs={12} md={7} justifyContent="center" mx="auto" textAlign="center">
                <MKTypography variant="h3" color="white">
                  Do you love this awesome
                </MKTypography>
                <MKTypography variant="h3" color="white" mb={1}>
                  UI Kit for ReactJS &amp; MUI?
                </MKTypography>
                <MKTypography variant="body2" color="white" mb={6}>
                  Cause if you do, it can be yours for FREE. Hit the button below to navigate to
                  Creative Tim where you can find the Design System in HTML. Start a new project or give
                  an old Bootstrap project a new look!
                </MKTypography>
                <MKButton
                  variant="gradient"
                  color="info"
                  size="large"
                  component="a"
                  href="https://www.creative-tim.com/product/material-kit-react"
                  sx={{ mb: 2 }}
                >
                  Download Now
                </MKButton>
                <MKButton
                  variant="gradient"
                  color="info"
                  size="large"
                  component="a"
                  href="https://www.creative-tim.com/product/material-kit-react"
                  sx={{ mb: 2 }}
                >
                  Download Now
                </MKButton>
                <MKButton
                  variant="gradient"
                  color="info"
                  size="large"
                  component="a"
                  href="https://www.creative-tim.com/product/material-kit-react"
                  sx={{ mb: 2 }}
                >
                  Download Now
                </MKButton>
              </Grid>
            </Container>
          </MKBox>
        </MKBox>
      </Card>

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Portfolio;