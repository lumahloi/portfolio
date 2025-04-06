import MKBox from "components/MKBox";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKTypography from "components/MKTypography";
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import bgImage from "assets/images/bg-cats.gif";

export default function Projetos() {
    return (
        <>
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
        </>
    )
}