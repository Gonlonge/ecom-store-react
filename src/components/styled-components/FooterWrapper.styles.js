import styled from "styled-components";

const FooterWrapper = styled.footer`
  margin-top: 50px;
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

export { FooterWrapper, FooterText };
