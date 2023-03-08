import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

export const NavBackground = styled.div`
  margin-bottom: 50px;
  background-color: ${({ theme }) => theme.colors.primary};

  box-shadow: 0px 12px 15px ${({ theme }) => theme.colors.quaternary};
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  padding: 10px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 20px;
  }
`;

export const NavLogo = styled(Link)`
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
`;

export const NavSearch = styled.input`
  border: none;
  padding: 8px;
  border-radius: 5px;
  margin-left: 10px;

  @media screen and (max-width: 768px) {
    margin: 10px 0 0;
    width: 100%;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 50;
  padding: 0;
  align-items: center;

  li {
    margin-left: 10px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 10px;
    display: ${({ showMobileMenu }) => (showMobileMenu ? "flex" : "none")};
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const CartIcon = styled(FiShoppingCart)`
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
`;

export const HamburgerIcon = styled(GiHamburgerMenu)`
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
