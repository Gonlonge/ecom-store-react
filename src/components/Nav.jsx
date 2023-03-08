import React from "react";
import {
  NavBackground,
  NavContainer,
  NavLogo,
  NavSearch,
  NavLinks,
  NavLink,
  CartIcon,
  HamburgerIcon,
} from "./styled-components/Navbar.styles";
import { MainContainer } from "./styled-components/Body.styles.js";

const Nav = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <NavBackground>
      <MainContainer>
        <NavContainer>
          <div style={{ display: "flex", alignItems: "center" }}>
            <NavLogo to="/">eCom</NavLogo>
            <HamburgerIcon onClick={toggleMobileMenu} />
          </div>
          <NavLinks showMobileMenu={showMobileMenu}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/cartPage">
                <CartIcon />
              </NavLink>
            </li>
          </NavLinks>
          <NavSearch type="text" placeholder="Search..." />
        </NavContainer>
      </MainContainer>
    </NavBackground>
  );
};

export default Nav;
