import PropTypes from "prop-types";

import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

import Collapse from "@mui/material/Collapse";
import Icon from "@mui/material/Icon";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function NavbarDropdown({ name, icon, children, collapseStatus, href, route, collapse, ...rest }) {
  const theme = useTheme();

  const linkComponent = {
    component: "a",
    href,
    target: "_blank",
    rel: "noreferrer",
  };

  const routeComponent = {
    component: Link,
    to: route,
  };

  return (
    <>
      <MKBox
        {...rest}
        mx={1}
        p={1}
        display="flex"
        alignItems="baseline"
        color={theme.palette.text.main}
        sx={{ cursor: "pointer", userSelect: "none" }}
        {...(route && routeComponent)}
        {...(href && linkComponent)}
      >
        <MKTypography
          variant="body2"
          lineHeight={1}
          color="inherit"
          sx={{ alignSelf: "center", "& *": { verticalAlign: "middle" } }}
        >
          {icon}
        </MKTypography>
        <MKTypography
          variant="button"
          fontWeight="regular"
          textTransform="capitalize"
          color={theme.palette.text.main}
          sx={{ fontWeight: "100%", ml: 1, mr: 0.25 }}
        >
          {name}
        </MKTypography>
        <MKTypography variant="body2" color={theme.palette.text.main} ml="auto">
          <Icon sx={{ fontWeight: "normal", verticalAlign: "middle" }}>
            {collapse && "keyboard_arrow_down"}
          </Icon>
        </MKTypography>
      </MKBox>
      {children && (
        <Collapse in={Boolean(collapseStatus)} timeout={400} unmountOnExit>
          {children}
        </Collapse>
      )}
    </>
  );
}

NavbarDropdown.defaultProps = {
  children: false,
  collapseStatus: false,
  href: "",
  route: "",
};

NavbarDropdown.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  children: PropTypes.node,
  collapseStatus: PropTypes.bool,
  href: PropTypes.string,
  route: PropTypes.string,
  collapse: PropTypes.bool.isRequired,
};

export default NavbarDropdown;
