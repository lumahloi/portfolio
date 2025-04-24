import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Link from "@mui/material/Link";
import { useTheme } from "@mui/material/styles";

function TransparentBlogCard({ image, title, description, tags = [], github }) {
  const theme = useTheme();

  const imageTemplate = (
    <Link href={github} target="_blank" rel="noopener noreferrer" sx={{ display: "block" }}>
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
          sx={{
            cursor: "pointer",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.02)",
            },
          }}
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
    </Link>
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
        <Link
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          underline="none"
        >
          <MKTypography
            variant="h5"
            gutterBottom
            color="white"
            sx={{
              cursor: "pointer",
              transition: "color 0.3s ease",
            }}
          >
            {title}
          </MKTypography>
        </Link>

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
  github: PropTypes.string.isRequired,
};

export default TransparentBlogCard;
