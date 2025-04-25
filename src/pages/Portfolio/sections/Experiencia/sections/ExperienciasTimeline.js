import { Box, Typography, Paper, useTheme, Container, Chip } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

const ExperienciasTimeline = ({ experiencias }) => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box
        sx={{
          position: "relative",
          maxWidth: "1200px",
          mx: "auto",
          pt: 4,
          "&::after": {
            content: '""',
            position: "absolute",
            width: "2px",
            backgroundColor: theme.palette.primary.main,
            top: 180,
            bottom: 0,
            left: "50%",
            zIndex: 1,
            [theme.breakpoints.down("md")]: {
              left: "20px",
            },
          },
        }}
      >
        {experiencias.map((experiencia) => (
          <React.Fragment key={experiencia.id}>
            {/* Nó principal */}
            <Box
              sx={{
                width: "100%",
                textAlign: "center",
                mb: 8,
              }}
            >
              <Paper
                elevation={4}
                sx={{
                  display: "inline-flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  p: 4,
                  minHeight: "120px",
                  maxWidth: "500px",
                  mx: "auto",
                  background: theme.palette.primary.main,
                  color: "white",
                  borderRadius: 2,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: theme.shadows[8],
                  },
                }}
              >
                <Typography variant="h5" fontWeight={600}>
                  {experiencia.name}
                </Typography>
                <Typography variant="subtitle1" sx={{ opacity: 0.9 }}>
                  {experiencia.where}
                </Typography>
                <Chip
                  label={experiencia.date}
                  size="small"
                  sx={{
                    mt: 1,
                    backgroundColor: "rgba(255,255,255,0.2)",
                    color: "white",
                  }}
                />
              </Paper>
            </Box>

            {/* Nós secundários */}
            {experiencia.atributions.map((atribuicao, attrIndex) => (
              <Box
                key={attrIndex}
                sx={{
                  position: "relative",
                  width: { xs: "100%", md: "50%" },
                  pl: {
                    xs: attrIndex % 2 === 1 ? "48px" : "6px",
                    md: attrIndex % 2 === 1 ? "48px" : 0,
                  },
                  pr: { xs: 2, md: 6 },
                  pb: 4,
                  left: attrIndex % 2 === 0 ? { md: 0 } : { md: "50%" },
                  right: attrIndex % 2 === 1 ? { md: "50%" } : { md: 0 },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: "20px",
                    height: "20px",
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: "50%",
                    top: "50%",
                    transform: "translateY(-50%)",
                    left: {
                      md: attrIndex % 2 === 0 ? "calc(100% - 10px)" : "-10px",
                    },
                    right: {
                      md: attrIndex % 2 === 1 ? "-10px" : "calc(100% - 10px)",
                    },
                  },
                }}
              >
                <Paper
                  elevation={4}
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    border: "1px solid",
                    borderColor: theme.palette.divider,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: theme.shadows[8],
                      borderColor: theme.palette.primary.main,
                    },
                  }}
                >
                  <Typography variant="h6" color="primary" fontWeight={600} mb={1}>
                    {atribuicao.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {atribuicao.description}
                  </Typography>
                </Paper>
              </Box>
            ))}
          </React.Fragment>
        ))}
      </Box>
    </Container>
  );
};

ExperienciasTimeline.propTypes = {
  experiencias: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      where: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      atributions: PropTypes.arrayOf(
        PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string,
          }),
        ])
      ).isRequired,
    })
  ).isRequired,
};

export default ExperienciasTimeline;
