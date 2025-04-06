import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";

import bgImage from "assets/images/bg-cats.gif";
import bgOffice from "assets/images/bg-office.gif";

import Nav from 'pages/Portfolio/sections/Header/sections/Nav';

export default function Header() {
    return (
        <>
            <MKBox component="header" position="relative">
                <Nav />

                <MKBox
                    display="flex"
                    alignItems="center"
                    minHeight="100vh"
                    sx={{
                        backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) => `${linearGradient(rgba(gradients.dark.main, 0.5), rgba(gradients.dark.state, 0.5))}, url(${bgOffice})`,
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
                        <Grid container item xs={12} md={12} lg={12} flexDirection="column" alignItems="center">
                            <MKTypography color="white" variant="h1" mb={2}>
                                Lumah Pereira
                            </MKTypography>
                            <MKTypography variant="h2" color="white" opacity={0.8} mb={2} textAlign="center">
                                Uso a tecnologia para fazer a diferença
                            </MKTypography>
                            <MKTypography variant="subtitle1" color="white" opacity={0.8} textAlign="center">
                                Desenvolvedora fullstack focada em soluções eficientes e experiências de usuário memoráveis
                            </MKTypography>
                            <Stack direction="row" spacing={1} mt={4}>
                                <MKButton color="white">Entre em contato</MKButton>
                            </Stack>
                        </Grid>
                    </Container>
                </MKBox>
            </MKBox>
        </>
    )
}