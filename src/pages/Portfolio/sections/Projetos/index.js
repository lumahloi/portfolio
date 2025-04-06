import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";

import bgCats from "assets/images/bg-cats.gif";

const projetos = [
  {
    id: 1,
    title: "Rover raised $65 million",
    description: "Finding temporary housing for your dog...",
    image: bgCats, // Remova as chaves {} - use a referência diretamente
    tags: ["finanças", "startup"]
  },
  {
    id: 2,
    title: "Rover raised $65 million",
    description: "Finding temporary housing for your dog...",
    image: bgCats, // Remova as chaves {} - use a referência diretamente
    tags: ["finanças", "startup"]
  }
];

export default function Projetos() {
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            Meus projetos
          </MKTypography>
        </Grid>

        <Grid container spacing={3}>
          {projetos.map((projeto) => (
            <Grid item xs={12} md={6} lg={4} key={projeto.id}>
              <TransparentBlogCard
                image={projeto.image}
                title={projeto.title}
                description={projeto.description}
                action={{
                  type: "internal",
                  route: `/projetos/${projeto.id}`,
                  color: "info",
                  label: "ver detalhes",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}