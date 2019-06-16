import React from "react";
import { Card } from "@material-ui/core";
import FullCardHeader from "./FullCardHeader/FullCardHeader";
import BackButton from "./BackButton/BackButton";
import styled from "styled-components";
import FullCardContent from "./FullCardContent/FullCardContent";

const FullVacancyCard = props => {
  const { vacancyData } = props;
  const {
    name,
    description,
    // key_skills,
    // schedule,
    // accept_handicapped,
    // accept_kids,
    experience,
    city,
    street,
    building,
    // employment,
    min,
    max,
    currency,
    gross,
    companyName,
    companyLogo,
    verification
    // contactName,
    // contactEmail,
    // contactPhones
  } = vacancyData;
  return (
    <Container>
      <BackButton />
      <StyledCard>
        <FullCardHeader
          name={name}
          companyName={companyName}
          verification={verification}
          city={city}
          street={street}
          building={building}
          min={min}
          max={max}
          currency={currency}
          gross={gross}
          companyLogo={companyLogo}
          experience={experience}
        />
        <FullCardContent htmlDescription={description} />
      </StyledCard>
    </Container>
  );
};

export default FullVacancyCard;

const Container = styled.div`
  margin-top: 85px;
  display: flex;
  flex-direction: column;
`;

const StyledCard = styled(Card)`
  margin-top: 10px;
`;
