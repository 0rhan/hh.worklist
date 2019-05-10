import React from "react";
import { CardHeader } from "@material-ui/core/";

const VacancyLabel = props => {
  const { name } = props;

  return (
    <>
      {/* Название вакансии */}
      <CardHeader title={name} />
    </>
  );
};

export default VacancyLabel;
