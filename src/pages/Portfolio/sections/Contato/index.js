import MKBox from "components/MKBox";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
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
        </>
    )
}