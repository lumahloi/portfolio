import { useState } from "react";

import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

import PropTypes from "prop-types";

import Collapse from "@mui/material/Collapse";
import MuiLink from "@mui/material/Link";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import NavbarDropdown from "./NavbarDropdown";

function NavbarMobile({ routes, open }) {
  const theme = useTheme();

  const [collapse, setCollapse] = useState("");

  const handleSetCollapse = (name) => (collapse === name ? setCollapse(false) : setCollapse(name));

  const renderNavbarItems = routes.map(
    ({ name, icon, collapse: routeCollapses, href, route, collapse: navCollapse }) => (
      <NavbarDropdown
        key={name}
        name={name}
        icon={icon}
        collapseStatus={name === collapse}
        onClick={() => handleSetCollapse(name)}
        href={href}
        route={route}
        collapse={Boolean(navCollapse)}
      >
        <MKBox sx={{ height: "15rem", maxHeight: "15rem", overflowY: "scroll" }}>
          {routeCollapses &&
            routeCollapses.map((item) => (
              <MKBox key={item.name} px={2}>
                {item.collapse ? (
                  <>
                    <MKTypography
                      display="block"
                      variant="button"
                      fontWeight="bold"
                      textTransform="capitalize"
                      py={1}
                      px={0.5}
                      color={theme.palette.text.main}
                    >
                      {item.name}
                    </MKTypography>
                    {item.collapse.map((el) => (
                      <MKTypography
                        key={el.name}
                        component={el.route ? Link : MuiLink}
                        to={el.route ? el.route : ""}
                        href={el.href ? el.href : ""}
                        target={el.href ? "_blank" : ""}
                        rel="noreferrer"
                        minWidth="11.25rem"
                        display="block"
                        variant="button"
                        textTransform="capitalize"
                        fontWeight="regular"
                        py={0.625}
                        px={2}
                        color={theme.palette.text.main}
                        sx={({ borders: { borderRadius } }) => ({
                          borderRadius: borderRadius.md,
                          cursor: "pointer",
                          transition: "all 300ms linear",
                          "&:hover": {
                            backgroundColor: theme.palette.dark.main,
                            color: theme.palette.text.main,
                          },
                        })}
                      >
                        {el.name}
                      </MKTypography>
                    ))}
                  </>
                ) : (
                  <MKBox
                    key={item.key}
                    display="block"
                    component={item.route ? Link : MuiLink}
                    to={item.route ? item.route : ""}
                    href={item.href ? item.href : ""}
                    target={item.href ? "_blank" : ""}
                    rel="noreferrer"
                    sx={({ borders: { borderRadius } }) => ({
                      borderRadius: borderRadius.md,
                      cursor: "pointer",
                      transition: "all 300ms linear",
                      py: 1,
                      px: 1.625,
                      "&:hover": {
                        backgroundColor: theme.palette.dark.main,
                        color: theme.palette.text.main,
                        "& *": {
                          color: theme.palette.text.main,
                        },
                      },
                    })}
                  >
                    <MKTypography
                      display="block"
                      variant="button"
                      fontWeight="bold"
                      textTransform="capitalize"
                      color={theme.palette.text.main}
                    >
                      {item.name}
                    </MKTypography>
                    <MKTypography
                      display="block"
                      variant="button"
                      fontWeight="regular"
                      color={theme.palette.text.main}
                      sx={{ transition: "all 300ms linear" }}
                    >
                      {item.description}
                    </MKTypography>
                  </MKBox>
                )}
              </MKBox>
            ))}
        </MKBox>
      </NavbarDropdown>
    )
  );

  return (
    <Collapse in={Boolean(open)} timeout="auto" unmountOnExit>
      <MKBox width="calc(100% + 1.625rem)" my={2} ml={-2}>
        {renderNavbarItems}
      </MKBox>
    </Collapse>
  );
}

NavbarMobile.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
};

export default NavbarMobile;
