import { Box, Typography, Paper, Chip, useTheme, Stack } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

const ExperienciasTimeline = ({ experiencias }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        maxWidth: "800px",
        mx: "auto",
        position: "relative",
        pl: 4,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: 20,
          top: 0,
          bottom: 0,
          width: "2px",
          backgroundColor: theme.palette.divider,
        }}
      />

      {experiencias.map((experiencia) => (
        <Box key={experiencia.id} sx={{ mb: 4, position: "relative" }}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              mb: 2,
              backgroundColor:
                theme.palette[experiencia.color]?.light || theme.palette.primary.light,
              position: "relative",
              left: -4,
            }}
          >
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Box>
                <Typography variant="h6" sx={{ color: theme.palette.common.white }}>
                  {experiencia.name}
                </Typography>
                <Typography variant="subtitle2" sx={{ color: theme.palette.common.white }}>
                  {experiencia.where}
                </Typography>
              </Box>
              <Chip label={experiencia.date} color={experiencia.color} size="small" />
            </Stack>
          </Paper>

          {/* Lista de atribuições */}
          <Box sx={{ ml: 3 }}>
            {experiencia.atributions.map((atribuicao, attrIndex) => (
              <React.Fragment key={attrIndex}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 2,
                    mb: 2,
                    position: "relative",
                    "&:before": {
                      content: '""',
                      position: "absolute",
                      left: -20,
                      top: "50%",
                      width: "20px",
                      height: "2px",
                      backgroundColor: theme.palette.divider,
                    },
                  }}
                >
                  <Typography variant="body2">{atribuicao}</Typography>
                </Paper>
              </React.Fragment>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

ExperienciasTimeline.propTypes = {
  experiencias: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      color: PropTypes.oneOf([
        "primary",
        "secondary",
        "error",
        "info",
        "success",
        "warning",
        "inherit",
      ]).isRequired,
      name: PropTypes.string.isRequired,
      where: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      atributions: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default ExperienciasTimeline;
