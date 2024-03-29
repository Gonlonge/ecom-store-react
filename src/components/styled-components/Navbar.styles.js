import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBackground = styled.div`
  margin-bottom: 50px;
  box-shadow: 0px 12px 15px ${({ theme }) => theme.colors.quaternary};
`;

export const NavContainer = styled.nav`
  padding: 11px;
  background: ${(theme) => theme.theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
`;

export const NavLogo = styled(Link)`
  font-size: 1.3rem;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
`;

export const NavLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 50;
  padding: 0;
`;

export const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
`;
