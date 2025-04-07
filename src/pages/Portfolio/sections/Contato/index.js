import MKBox from "components/MKBox";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";
import bgImage from "assets/images/bg-cats.gif";

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
                  href="https://twitter.com/intent/tweet?text=Check%20Material%20Design%20System%20made%20by%20%40CreativeTim%20%23webdesign%20%23designsystem%20%23mui5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fmaterial-kit-react"
                  target="_blank"
                  color="twitter"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-twitter" />
                  &nbsp;Tweet
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-kit-react"
                  target="_blank"
                  color="facebook"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-facebook" />
                  &nbsp;Share
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.pinterest.com/pin/create/button/?url=https://www.creative-tim.com/product/material-kit-react"
                  target="_blank"
                  color="pinterest"
                >
                  <i className="fab fa-pinterest" />
                  &nbsp;Pin it
                </MKSocialButton>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </MKBox>
    </>
  );
}
