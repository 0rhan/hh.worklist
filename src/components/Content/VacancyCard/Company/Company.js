import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Check from "@material-ui/icons/Check";

const Company = props => {
  const { companyName, verification, component, variant } = props;

  return (
    <>
      {/* Название компании */}
      <StyledTypo component={component} variant={variant}>
        {companyName}
        {/* Статус верификации компании */}
        {verification && <StyledCheck fontSize="small" />}
      </StyledTypo>
    </>
  );
};

export default Company;

const StyledTypo = styled(Typography)`
  && {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${props => props.theme.palette.primary.light};
  }
`;

const StyledCheck = styled(Check)`
  color: ${props => props.theme.palette.primary.light};
`;
