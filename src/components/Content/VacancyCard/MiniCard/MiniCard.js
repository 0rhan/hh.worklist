import React from "react";
import { Card, Paper } from "@material-ui/core";
import MiniCardHeader from "./MiniCardHeader/MiniCardHeader";
import MiniCardContent from "./MiniCardContent/MiniCardContent";
import MiniCardFooter from "./MiniCardFooter/MiniCardFooter";
import styled from "styled-components";

const MiniCard = props => {
  // Получение параметров для карточки
  const { requirement, responsibility, companyLogo, id, ...header } = props;

  return (
    <li>
      <StyledPaper>
        <Card>
          {/* Заголовок вакансии */}
          <MiniCardHeader {...header} />
          {/* Содержимое карточки */}
          <MiniCardContent
            responsibility={responsibility}
            requirement={requirement}
            companyLogo={companyLogo}
          />
          <MiniCardFooter id={id} />
        </Card>
      </StyledPaper>
    </li>
  );
};

export default MiniCard;

const StyledPaper = styled(Paper)`
  margin-top: 20px;
`;
