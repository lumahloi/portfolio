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
                        <Grid item xs={12} md={6} lg={12}>
                            <DefaultReviewCard
                                color="primary"
                                name="Estagiária em Desenvolvimento Web"
                                where="Ministério Público do Rio de Janeiro"
                                date="Julho 2024 - o momento"
                                review={`Fui responsável por contribuições significativas que impactaram diretamente a eficiência e performance dos projetos. Atuei no desenvolvimento e otimização de sistemas web utilizando React e Django, sempre com foco em melhorar a qualidade do código e a experiência do usuário.
                                
                                - Otimização na velocidade de carregamento de aplicações web através da refatoração de componentes React;\n
                                - Redução no tempo de processamento de operações críticas após a reestruturação de algoritmos em Python e melhorias nas queries do banco de dados;\n
                                - Implementação de boas práticas de código que diminuíram os bugs reportados em produção, aumentando a estabilidade dos sistemas;\n
                                - Colaboração ativa no Scrum, participando do planejamento de sprints e ajudando a equipe a entregar features mais rápido devido a uma melhor organização de tarefas.`}
                            />
                        </Grid>
                        {/* <Grid item xs={12} md={6} lg={12}>
                            <DefaultReviewCard
                                color="transparent"
                                name="Estagiária em Desenvolvimento Web"
                                where="Ministério Público do Rio de Janeiro"
                                date="Julho 2024 - o momento"
                                review={`Fui responsável por contribuições significativas que impactaram diretamente a eficiência e performance dos projetos. Atuei no desenvolvimento e otimização de sistemas web utilizando React e Django, sempre com foco em melhorar a qualidade do código e a experiência do usuário.
                                
                                - Otimização na velocidade de carregamento de aplicações web através da refatoração de componentes React;\n
                                - Redução no tempo de processamento de operações críticas após a reestruturação de algoritmos em Python e melhorias nas queries do banco de dados;\n
                                - Implementação de boas práticas de código que diminuíram os bugs reportados em produção, aumentando a estabilidade dos sistemas;\n
                                - Colaboração ativa no Scrum, participando do planejamento de sprints e ajudando a equipe a entregar features mais rápido devido a uma melhor organização de tarefas.`}
                            />
                        </Grid> */}
                    </Grid>
                </Container>
            </MKBox>
        </>
    )
}