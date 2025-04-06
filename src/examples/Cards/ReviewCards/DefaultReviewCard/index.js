import PropTypes from "prop-types";
import Icon from "@mui/material/Icon";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function DefaultReviewCard({ color, name, where, date, review}) {
  const reviewWithBreaks = review.replace(/\n/g, '<br />');

  return (
    <MKBox
      variant={color === "transparent" ? "contained" : "gradient"}
      bgColor={color}
      borderRadius="xl"
      shadow={color === "transparent" ? "none" : "md"}
      p={3}
    >
      <MKBox>
        <MKTypography
          display="block"
          variant={"h5"}
          fontWeight="bold"
          color={color === "transparent" || color === "light" ? "dark" : "white"}
          mb={0.5}
        >
          {name}
        </MKTypography>
        <MKTypography
          display="block"
          variant={"h6"}
          fontWeight="bold"
          color={color === "transparent" || color === "light" ? "dark" : "white"}
          mb={1}
        >
          {where}
        </MKTypography>
        <MKTypography
          variant={"caption"}
          fontWeight="regular"
          lineHeight={1}
          color={color === "transparent" || color === "light" ? "text" : "white"}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Icon>schedule</Icon>&nbsp;
          {date}
        </MKTypography>
      </MKBox>
      <MKTypography
        component="p"
        variant="body2"
        color={color === "transparent" ? "text" : "white"}
        dangerouslySetInnerHTML={{ __html: reviewWithBreaks }}
        mt={3}
      />
      <MKTypography
        variant="h4"
        color={color === "transparent" || color === "light" ? "text" : "white"}
        sx={{
          display: "flex",
          alignItems: "center",
          ml: 0.375,

          "& .material-icons-round": {
            ml: -0.375,
          },
        }}
      >
      </MKTypography>
    </MKBox>
  );
}

DefaultReviewCard.defaultProps = {
  color: "transparent"
};

DefaultReviewCard.propTypes = {
  color: PropTypes.oneOf([
    "transparent",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  name: PropTypes.string.isRequired,
  where: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
};

export default DefaultReviewCard;
