import styled from "styled-components";

const FooterWrapper = styled.footer`
  margin-top: 320px;
  background: ${(props) => props.theme.colors.primary};
  border-top: 1px solid ${({ theme }) => theme.colors.tertiary};
  box-shadow: 0px -10px 11px -1px ${({ theme }) => theme.colors.quaternary};
  width: 100%;
`;

const FooterText = styled.p`
  font-size: 14px;
  color: white;
  text-align: center;
  padding: 50px;
  margin-bottom: 0px;
`;

// const footerPushDown = styled.p`
//   min-height: calc(100vh - 160px);
// `;

export { FooterWrapper, FooterText };
