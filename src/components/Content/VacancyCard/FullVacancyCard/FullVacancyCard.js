import React from "react";
import { Card } from "@material-ui/core";
import FullCardHeader from "./FullCardHeader/FullCardHeader";
import BackButton from "./BackButton/BackButton";
import styled from "styled-components";
import filterVacancy from "../../../../utils/filterVacancy";

const FullVacancyCard = props => {
  const { vacancyCollection, activeVacancyId } = props;
  const vacancy = filterVacancy(vacancyCollection, activeVacancyId);
  const { name, companyName, verification } = vacancy;
  return (
    <StyledCard>
      <BackButton />
      <FullCardHeader
        name={name}
        companyName={companyName}
        verification={verification}
      />
    </StyledCard>
  );
};

export default FullVacancyCard;

const StyledCard = styled(Card)`
  margin-top: 85px;
`;
