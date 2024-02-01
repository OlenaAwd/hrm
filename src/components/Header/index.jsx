import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import SelectComponent from "../Select";
import ButtonComponent from "../Button";
import { appBarStyles } from "../../constants/styles/appBar.js";
import { typographyDesktopStyles } from "../../constants/styles/typographyLogoBig";
import { boxSmallStyles } from "../../constants/styles/boxSmall";
import { menuStyles } from "../../constants/styles/menu";
import { typographySmallStyles } from "../../constants/styles/typographyLogoSmall";
import { boxDesktopStyles } from "../../constants/styles/boxDesktop";
import {
  pages,
  pagesSelectAbout,
  pagesSelectEarlyBird,
  pagesSelectRelocate,
} from "../../mockedData/data";
import styles from "./Header.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import logoTM from "../../assets/HRMlogo.png";


const Header = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleLogoClick = () => {
    navigate("/");
  };

  const handleJoin = () => {
    navigate("/members");
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <header>
      <AppBar position="static" sx={appBarStyles}>
        <Container disableGutters>
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={typographyDesktopStyles}
            >
              <img
                className={styles.logo}
                // src={logo}
                src={logoTM}
                alt="House Relocation"
                onClick={handleLogoClick}
              />
            </Typography>

            <Box sx={boxSmallStyles}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={typographySmallStyles}
              >
                <img
                  className={styles.logo}
                  src={logoTM}
                  alt="House Relocation"
                  onClick={handleLogoClick}
                />
              </Typography>

              <ButtonComponent
                onClick={handleJoin}
                classes={styles.joinBtnMobile}
              >
                Join
              </ButtonComponent>

              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{
                  padding: 0,
                  zIndex: 9,
                  marginLeft: "10px",
                  width: "30px",
                  height: "30px",
                }}
              >
                <MenuIcon
                  style={{
                    color: "#000000",
                    background: "#fff",
                  }}
                />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={menuStyles}
              >
                <li className={styles.responsiveItem}>
                  <SelectComponent
                    title="Relocate"
                    children={pagesSelectRelocate.map((item) => (
                      <MenuItem value={item.page} key={item.page}>
                        <NavLink to={item.url} className={styles.navbarItem}>
                          {item.page}
                        </NavLink>
                      </MenuItem>
                    ))}
                  />
                </li>

                {pages.map((item) => (
                  <MenuItem key={item.page}>
                    <NavLink
                      to={item.url}
                      className={styles.navbarItem}
                      key={item.page}
                      onClick={handleCloseNavMenu}
                    >
                      {item.page}
                    </NavLink>
                  </MenuItem>
                ))}
                <li className={styles.responsiveItem}>
                  <SelectComponent
                    title="About"
                    children={pagesSelectAbout.map((item) => (
                      <MenuItem value={item.page} key={item.page}>
                        <NavLink to={item.url} className={styles.navbarItem}>
                          {item.page}
                        </NavLink>
                      </MenuItem>
                    ))}
                  />
                </li>
              </Menu>
            </Box>

            <Box sx={boxDesktopStyles}>
              <div className={styles.innerNavContainer}>
                <div className={styles.navSelect}>
                  <SelectComponent
                    title="Relocate"
                    children={pagesSelectRelocate.map((item) => (
                      <MenuItem value={item.page} key={item.page}>
                        <NavLink to={item.url} className={styles.navbarItem}>
                          {item.page}
                        </NavLink>
                      </MenuItem>
                    ))}
                  />
                </div>

                {pages.map((item) => (
                  <NavLink
                    to={item.url}
                    className={styles.navbarItem}
                    key={item.page}
                  >
                    {item.page}
                  </NavLink>
                ))}
                <div className={styles.navSelect}>
                  <SelectComponent
                    title="About"
                    children={pagesSelectAbout.map((item) => (
                      <MenuItem value={item.page} key={item.page}>
                        <NavLink to={item.url} className={styles.navbarItem}>
                          {item.page}
                        </NavLink>
                      </MenuItem>
                    ))}
                  />
                </div>
                <Box
                  sx={{
                    flexGrow: 0,
                    marginLeft: "150px",
                    paddingRight: "3px",
                    "@media (max-width: 960px)": {
                      marginLeft: "95px",
                    },
                  }}
                >
                  <ButtonComponent onClick={handleJoin}>Join</ButtonComponent>
                </Box>
              </div>
            </Box>
          </Toolbar>
          <div className={styles.separateSelect}>
            <SelectComponent
              title="Early-Bird"
              children={pagesSelectEarlyBird.map((item) => (
                <MenuItem value={item.page} key={item.page}>
                  <NavLink to={item.url} className={styles.navbarItem}>
                    {item.page}
                  </NavLink>
                </MenuItem>
              ))}
            />
          </div>
        </Container>
      </AppBar>
    </header>
  );
};

export default Header;
