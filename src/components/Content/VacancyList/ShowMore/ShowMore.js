import React from "react";
import { Button } from "@material-ui/core";
import styled from "styled-components";

const ShowMore = props => {
  const { showMore, collectionEnd } = props;
  console.log(collectionEnd);
  if (!collectionEnd) {
    return (
      <Container>
        <StyledButton variant="outlined" onClick={showMore}>
          Показать больше
        </StyledButton>
      </Container>
    );
  }
  return null;
};

export default ShowMore;

const Container = styled.div`
  margin: 25px 0px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButton = styled(Button)`
  && {
    color: ${props => props.theme.palette.accents.link};
  }
`;
