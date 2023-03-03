import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
`;

const FooterText = styled.p`
  font-size: 14px;
  color: white;
  text-align: center;
  padding: 50px;
  margin-bottom: 0px;
`;

function Footer() {
  return (
    <FooterWrapper>
      <FooterText>© 2023 My e-commerce. All rights reserved.</FooterText>
    </FooterWrapper>
  );
}

export default Footer;
