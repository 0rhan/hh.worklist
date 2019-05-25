import React from "react";
import { Button, Typography } from "@material-ui/core";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <Container>
      <StyledTypo component="h1" variant="h1">
        404
      </StyledTypo>
      <StyledTypo component="h5" variant="h5">
        Страница не найдена
      </StyledTypo>
      <Button size="large" component={Link} to="/">
        <ArrowBackIos />
        На главную
      </Button>
    </Container>
  );
};

export default NoMatch;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTypo = styled(Typography)`
  && {
    color: ${props => props.theme.palette.accents.link};
  }
`;
