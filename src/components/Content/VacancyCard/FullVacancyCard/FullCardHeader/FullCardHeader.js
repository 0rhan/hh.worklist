import React from "react";
import { CardHeader } from "@material-ui/core";
import Company from "../../Company/Company";
import styled from "styled-components";

const FullCardHeader = props => {
  const { name, companyName, verification } = props;
  return (
    <HeaderContainer>
      <Name title={name} />
      <Company companyName={companyName} verification={verification} />
    </HeaderContainer>
  );
};

export default FullCardHeader;

const HeaderContainer = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

const Name = styled(CardHeader)`
  && {
    padding: 0;
  }
`;
