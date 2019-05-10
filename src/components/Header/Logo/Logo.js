import React from "react";
import { Typography } from "@material-ui/core";
import styled from "styled-components";

const Logo = () => {
  return (
    <LogoText component="h4" variant="h4">
      hh.worklist
    </LogoText>
  );
};

export default Logo;

// Стилизация логотипа
const LogoText = styled(Typography)`
  && {
    color: inherit;
  }
`;
