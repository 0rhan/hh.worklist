import React from "react";
import { Card, Paper } from "@material-ui/core";
import VacancyContent from "./VacancyContent/VacancyContent";
import styled from "styled-components";
import VacancyHeader from "./VacancyHeader/VacancyHeader";

const VacancyCard = props => {
  // Получение параметров для карточки
  const { requirement, responsibility, companyLogo, ...header } = props;

  return (
    <li>
      <StyledPaper>
        <Card>
          {/* Заголовок вакансии */}
          <VacancyHeader {...header} />
          {/* Содержимое карточки */}
          <VacancyContent
            responsibility={responsibility}
            requirement={requirement}
            companyLogo={companyLogo}
          />
        </Card>
      </StyledPaper>
    </li>
  );
};

export default VacancyCard;

const StyledPaper = styled(Paper)`
  margin-top: 20px;
`;
