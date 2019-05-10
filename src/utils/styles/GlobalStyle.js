import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${props => props.theme.palette.secondary.main};
}
`;

export default GlobalStyle;
