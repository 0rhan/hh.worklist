import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { DataConsumer } from "utils/context";
import UnfoldMore from "@material-ui/icons/UnfoldMore";
import styled from "styled-components";

const ShowFullVacancy = props => {
  const { id } = props;
  const link = `/vacancy_id${id}`;

  return (
    <DataConsumer>
      {({ handleActiveVacancy }) => {
        return (
          <StyledButton
            variant="outlined"
            component={Link}
            to={link}
            onClick={handleActiveVacancy(id)}
          >
            Показать полностью
            <UnfoldMore />
          </StyledButton>
        );
      }}
    </DataConsumer>
  );
};

export default ShowFullVacancy;

const StyledButton = styled(Button)`
  && {
    color: ${props => props.theme.palette.accents.link};
  }
`;
