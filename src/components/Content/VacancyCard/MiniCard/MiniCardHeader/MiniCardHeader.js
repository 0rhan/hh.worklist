import React from "react";
import CardHeader from "@material-ui/core/CardHeader";
import styled from "styled-components";
import Company from "../../Company/Company";
import Location from "./Location/Location";
import Salary from "./Salary/Salary";

const MiniCardHeader = props => {
  const { name, city, min, max, currency, companyName, verification } = props;
  return (
    // Контейнер
    <HeaderContainer>
      <div>
        {/* Название вакансии */}
        <Name title={name} />
        {/* Название компании */}
        <Company companyName={companyName} verification={verification} />
        {/* Город */}
        <Location city={city} />
      </div>
      <div>
        {/* Зарплата */}
        <Salary min={min} max={max} currency={currency} />
      </div>
    </HeaderContainer>
  );
};

export default MiniCardHeader;

const HeaderContainer = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Name = styled(CardHeader)`
  && {
    padding: 0;
  }
`;
