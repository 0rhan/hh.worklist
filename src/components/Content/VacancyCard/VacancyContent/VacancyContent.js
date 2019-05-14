import React from "react";
import { CardContent, Divider, Typography } from "@material-ui/core";
import styled from "styled-components";

const VacancyContent = props => {
  const { responsibility, requirement, companyLogo } = props;
  const def = "Не указано";
  return (
    <>
      {/* Содержимое карточки */}
      <StyledContent>
        <div>
          {/* Обязанности вакансии */}
          <Typography component="h6" variant="h6">
            Обязанности:
          </Typography>
          <Typography component="p">{responsibility || def}</Typography>
          <StyledDivider />

          {/* Требования к вакансии */}
          <Typography component="h6" variant="h6">
            Требования:
          </Typography>
          <Typography component="p">{requirement || def}</Typography>
        </div>
        {/* Логотип компании */}
        <ImgContainer>
          {companyLogo && <img src={companyLogo} alt="Логотип компании" />}
        </ImgContainer>
      </StyledContent>
    </>
  );
};

export default VacancyContent;

const StyledContent = styled(CardContent)`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const StyledDivider = styled(Divider)`
  && {
    background-color: ${props => props.theme.palette.secondary.dark};
    margin: 15px 0px;
  }
`;

const ImgContainer = styled.div`
  margin: 0px 20px;
`;
