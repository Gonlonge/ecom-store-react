import React from "react";
import { MainContainer } from "../components/styled-components/Body.styles";
import {
  NavBackground,
  NavContainer,
  NavLogo,
  NavLinks,
  NavLink,
} from "./styled-components/Navbar.styles";
import CartIconWithCounter from "./CartIconWithCounter";

const Nav = () => {
  return (
    <NavBackground>
      <NavContainer>
        <MainContainer>
          <NavLinks>
            <div style={{ display: "flex", alignItems: "center" }}>
              <NavLogo to="/">eCom</NavLogo>
            </div>

            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/cartPage">
                <CartIconWithCounter />
              </NavLink>
            </li>
          </NavLinks>
        </MainContainer>
      </NavContainer>
    </NavBackground>
  );
};

export default Nav;
