import { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

import PropTypes from "prop-types";

import Container from "@mui/material/Container";
import Icon from "@mui/material/Icon";
import Popper from "@mui/material/Popper";
import Grow from "@mui/material/Grow";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

import NavbarDropdown from "./NavbarDropdown";
import NavbarMobile from "./NavbarMobile";

import breakpoints from "assets/theme/base/breakpoints";

function Navbar({ routes, sticky }) {
  const [dropdown, setDropdown] = useState("");
  const [dropdownEl, setDropdownEl] = useState("");
  const [setDropdownName] = useState("");
  const [nestedDropdown] = useState("");
  const [arrowRef, setArrowRef] = useState(null);
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const theme = useTheme();

  const { i18n } = useTranslation();

  const openMobileNavbar = () => setMobileNavbar(!mobileNavbar);

  useEffect(() => {
    function displayMobileNavbar() {
      if (window.innerWidth < breakpoints.values.lg) {
        setMobileView(true);
        setMobileNavbar(false);
      } else {
        setMobileView(false);
        setMobileNavbar(false);
      }
    }

    window.addEventListener("resize", displayMobileNavbar);
    displayMobileNavbar();
    return () => window.removeEventListener("resize", displayMobileNavbar);
  }, []);

  const renderNavbarItems = routes.map(({ name, icon, href, route, onClick, collapse }) => (
    <NavbarDropdown
      key={name}
      name={name}
      icon={icon}
      href={href}
      route={route}
      collapse={Boolean(collapse)}
      onClick={onClick}
      onMouseEnter={({ currentTarget }) => {
        if (collapse) {
          setDropdown(currentTarget);
          setDropdownEl(currentTarget);
          setDropdownName(name);
        }
      }}
      onMouseLeave={() => collapse && setDropdown(null)}
      light
    />
  ));

  const dropdownMenu = (
    <Popper
      anchorEl={dropdown}
      open={Boolean(dropdown)}
      placement="top-start"
      transition
      style={{ zIndex: 10 }}
      modifiers={[{ name: "arrow", enabled: true, options: { element: arrowRef } }]}
      onMouseEnter={() => setDropdown(dropdownEl)}
      onMouseLeave={() => {
        if (!nestedDropdown) {
          setDropdown(null);
          setDropdownName("");
        }
      }}
    >
      {({ TransitionProps }) => (
        <Grow {...TransitionProps} sx={{ transformOrigin: "left top" }}>
          <MKBox borderRadius="lg" bgcolor="white">
            <MKTypography variant="h1" color={theme.palette.text.main}>
              <Icon ref={setArrowRef} sx={{ mt: -3 }}>
                arrow_drop_up
              </Icon>
            </MKTypography>
            <MKBox shadow="lg" borderRadius="lg" p={2} mt={2}></MKBox>
          </MKBox>
        </Grow>
      )}
    </Popper>
  );

  return (
    <Container sx={sticky ? { position: "sticky", top: 0, zIndex: 10 } : null}>
      <MKBox
        py={1}
        px={3}
        my={2}
        mx={3}
        width="calc(100% - 48px)"
        borderRadius="xl"
        shadow="md"
        position="absolute"
        left={0}
        zIndex={3}
        sx={{
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.main,
        }}
      >
        <MKBox display="flex" justifyContent="space-between" alignItems="center">
          <MKBox
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            lineHeight={1}
            py={0.75}
            sx={{ cursor: "pointer" }}
          >
            <MKTypography variant="button" fontWeight="bold" color="text">
              Lumah Pereira
            </MKTypography>
          </MKBox>

          <MKBox display={{ xs: "none", lg: "flex" }} ml="auto" color={theme.palette.text.main}>
            {renderNavbarItems}
          </MKBox>

          <MKBox ml={{ xs: "auto", lg: 0 }} display="flex" alignItems="center" gap={1}>
            <MKButton
              onClick={() => {
                const newLang = i18n.language === "pt" ? "en" : "pt";
                i18n.changeLanguage(newLang);
              }}
              color="primary"
              size="small"
              sx={{ fontWeight: "bold", px: 2 }}
            >
              {i18n.language === "pt" ? "🇺🇸 EN" : "🇧🇷 PT-BR"}
            </MKButton>
          </MKBox>

          <MKBox
            display={{ xs: "inline-block", lg: "none" }}
            py={1.5}
            pl={1.5}
            sx={{ cursor: "pointer", color: theme.palette.text.main }}
            onClick={openMobileNavbar}
          >
            <Icon fontSize="default">{mobileNavbar ? "close" : "menu"}</Icon>
          </MKBox>
        </MKBox>

        <MKBox>{mobileView && <NavbarMobile routes={routes} open={mobileNavbar} />}</MKBox>
      </MKBox>
      {dropdownMenu}
    </Container>
  );
}

Navbar.defaultProps = {
  sticky: false,
};

Navbar.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape).isRequired,
  sticky: PropTypes.bool,
};

export default Navbar;
