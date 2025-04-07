import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function TransparentBlogCard({ image, title, description, tags = [] }) {
  const imageTemplate = (
    <MKBox position="relative" borderRadius="lg">
      <MKBox
        component="img"
        src={image}
        alt={title}
        borderRadius="lg"
        shadow="md"
        width="100%"
        position="relative"
        zIndex={1}
      />
      <MKBox
        borderRadius="lg"
        shadow="md"
        width="100%"
        height="100%"
        position="absolute"
        left={0}
        top={0}
        sx={{
          backgroundImage: `url(${image})`,
          transform: "scale(0.94)",
          filter: "blur(12px)",
          backgroundSize: "cover",
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
        <MKTypography variant="h5" gutterBottom>
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
                  backgroundColor: `rgba(${hexToRgb(getTagColor(tag))}, 0.7)`, // Adiciona transparência 70%
                  color: "white !important", // Garante texto branco
                  backdropFilter: "blur(6px)", // Efeito de vidro fosco
                  border: "1px solid rgba(255, 255, 255, 0.2)", // Borda sutil
                  "& .MuiChip-label": {
                    color: "white", // Texto branco
                    fontWeight: 500, // Peso da fonte
                  },
                  "& .MuiChip-icon": {
                    color: "white",
                    marginLeft: "4px",
                    opacity: 0.9, // Opacidade do ícone
                  },
                  "&:hover": {
                    backgroundColor: `rgba(${hexToRgb(getTagColor(tag))}, 0.9)`, // Efeito hover
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

function getTagColor(tag) {
  const colorMap = {
    Flutterflow: "#4c3af0",
    React: "#61dbfb",
    JavaScript: "#f7e018",
    PHP: "#777bb3",
    Java: "#ec2025",
    Firebase: "#ffcb2b",
    MySQL: "#005d8a",
    Node: "#80be03",
    HTML: "#ff4b00",
    CSS: "#1572b6",
    Bootstrap: "#7708f7",
    Supabase: "#3ecf8e",
  };

  return colorMap[tag] || "0B0D0E";
}

function hexToRgb(hex) {
  hex = hex.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `${r}, ${g}, ${b}`;
}

TransparentBlogCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default TransparentBlogCard;
