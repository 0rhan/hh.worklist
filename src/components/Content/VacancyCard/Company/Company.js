import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Check from "@material-ui/icons/Check";

const Company = props => {
  const { companyName, verification } = props;

  return (
    <Container>
      {/* Название компании */}
      <StyledTypo>{companyName}</StyledTypo>
      {/* Статус верификации компании */}
      {verification && <StyledCheck fontSize="small" />}
    </Container>
  );
};

export default Company;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledTypo = styled(Typography)`
  && {
    color: ${props => props.theme.palette.primary.light};
  }
`;

const StyledCheck = styled(Check)`
  color: ${props => props.theme.palette.primary.light};
`;
