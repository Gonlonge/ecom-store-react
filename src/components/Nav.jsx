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

const Nav = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <NavBackground>
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
    </NavBackground>
  );
};

export default Nav;
