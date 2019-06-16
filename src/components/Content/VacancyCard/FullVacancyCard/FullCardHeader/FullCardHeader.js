import React from "react";
import { CardHeader, Divider } from "@material-ui/core";
import Company from "../../Company/Company";
import styled from "styled-components";
import Location from "./Location/Location";
import Salary from "../../Salary/Salary";
import Experience from "./Experience/Experience";

const FullCardHeader = props => {
  const {
    name,
    companyName,
    verification,
    city,
    street,
    building,
    min,
    max,
    currency,
    gross,
    companyLogo,
    experience
  } = props;
  return (
    <HeaderContainer>
      <Name title={name} />
      <SalaryContainer>
        <Salary
          min={min}
          max={max}
          currency={currency}
          gross={gross}
          fullStr={true}
        />
      </SalaryContainer>
      <StyledDivider />
      <CompanyContainer>
        <div>
          <Company
            companyName={companyName}
            verification={verification}
            component="h3"
            variant="title"
          />
          <Location city={city} street={street} building={building} />
        </div>
        {companyLogo && <img src={companyLogo} alt="логотип компании" />}
      </CompanyContainer>
      <Experience experience={experience} />
    </HeaderContainer>
  );
};

export default FullCardHeader;

const HeaderContainer = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

const SalaryContainer = styled.div`
  margin-top: 10px;
`;

const StyledDivider = styled(Divider)`
  && {
    background-color: ${props => props.theme.palette.secondary.dark};
    margin: 15px 0px;
  }
`;

const CompanyContainer = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Name = styled(CardHeader)`
  && {
    padding: 0;
  }
`;
