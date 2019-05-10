import React from "react";
import { CardContent, Divider, Typography } from "@material-ui/core";

const VacancyContent = props => {
  const { responsibility, requirement } = props;
  return (
    <>
      {/* Содержимое карточки */}
      <CardContent>
        {/* Обязанности вакансии */}
        <Typography component="h6" variant="h6">
          Обязанности:
        </Typography>
        <Typography component="p">{responsibility}</Typography>
        <Divider />

        {/* Требования к вакансии */}
        <Typography component="h6" variant="h6">
          Требования:
        </Typography>
        <Typography component="p">{requirement}</Typography>
      </CardContent>
    </>
  );
};

export default VacancyContent;
