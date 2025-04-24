import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { useTheme } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";

function TransparentBlogCard({ image, title, description, tags = [], github }) {
  const theme = useTheme();

  const imageTemplate = (
    <MKBox
      position="relative"
      borderRadius="lg"
      sx={{
        overflow: "hidden",
        backgroundColor: theme.palette.primary.main,
        backgroundImage: theme.palette.primary.main, // para garantir consistência
      }}
    >
      {github && (
        <IconButton
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          color="white"
          sx={{
            position: "absolute",
            top: 8,
            left: 8,
            zIndex: 3,
            backgroundColor: theme.palette.primary.main,
            backdropFilter: "blur(6px)",
            "&:hover": {
              backgroundColor: "#000000",
            },
          }}
        >
          <GitHubIcon />
        </IconButton>
      )}

      <MKBox
        component="img"
        src={image}
        alt={title}
        width="100%"
        position="relative"
        zIndex={2}
        sx={{
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.02)",
          },
          display: "block",
        }}
      />
    </MKBox>
  );

  return (
    <Card
      sx={{
        background: "transparent",
        boxShadow: "none",
        overflow: "visible",
      }}
    >
      {imageTemplate}

      <MKBox pt={2} pb={3}>
        <MKTypography variant="h5" gutterBottom color="white">
          {title}
        </MKTypography>

        <MKTypography variant="body2" component="p" color="text" mb={3}>
          {description}
        </MKTypography>

        {tags.length > 0 && (
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                sx={{
                  marginBottom: 1,
                  backgroundColor: theme.palette.primary.main,
                  color: "white !important",
                  backdropFilter: "blur(6px)",
                  "& .MuiChip-label": {
                    color: "white",
                    fontWeight: 500,
                  },
                  "& .MuiChip-icon": {
                    color: "white",
                    marginLeft: "4px",
                    opacity: 0.9,
                  },
                  "&:hover": {
                    backgroundColor: theme.palette.primary.main,
                  },
                }}
              />
            ))}
          </Stack>
        )}
      </MKBox>
    </Card>
  );
}

TransparentBlogCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  github: PropTypes.string,
};

export default TransparentBlogCard;
