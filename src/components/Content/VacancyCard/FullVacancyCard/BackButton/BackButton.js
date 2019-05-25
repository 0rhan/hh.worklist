import React from "react";
import Button from "@material-ui/core/Button";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BackButton = () => {
  return (
    <StyledButton component={Link} to="/">
      <ArrowBackIos />
      Вернуться к вакансиям
    </StyledButton>
  );
};

export default BackButton;

const StyledButton = styled(Button)`
  && {
    color: ${props => props.theme.palette.accents.link};
    align-self: flex-start;
  }
`;
