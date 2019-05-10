import React from "react";
import { Card, Paper } from "@material-ui/core";
import VacancyLabel from "./VacancyLabel/VacancyLabel";
import VacancyContent from "./VacancyContent/VacancyContent";
import styled from "styled-components";

const VacancyCard = props => {
  // Получение параметров для карточки
  const { name, responsibility, requirement } = props;

  return (
    <StyledPaper>
      <Card>
        {/* Заголовок вакансии */}
        <VacancyLabel name={name} />
        {/* Содержимое карточки */}
        <VacancyContent
          responsibility={responsibility}
          requirement={requirement}
        />
      </Card>
    </StyledPaper>
  );
};

export default VacancyCard;

const StyledPaper = styled(Paper)`
  margin-top: 20px;
`;
