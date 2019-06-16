import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import Logo from "./Logo/Logo";
import ToolsForm from "./ToolsForm/ToolsForm";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledBar>
      <Toolbar>
        <Logo />
        <ToolsForm />
      </Toolbar>
    </StyledBar>
  );
};

export default Header;

const StyledBar = styled(AppBar)`
  && {
    background-color: ${props => props.theme.palette.primary.main};
  }
`;
