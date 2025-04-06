import MKBox from "components/MKBox";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKTypography from "components/MKTypography";
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

export default function Experiencia() {
    return (
        <>
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
        </>
    )
}