import React from "react";
import { Typography } from "@material-ui/core";
import salaryVariant from "utils/salaryVariant";

const Salary = props => {
  const { min, max, currency, gross, fullStr } = props;
  /*
    min - минимальная з/п (str)
    max - максимальная з/п  (str)
    currency - валюта (str)
    gross - указание на вычет налогов (bool)
    fullStr - показывать строку з/п с информацией о вычете налогов или нет (bool)
  */

  // minSalary - строка с зарплатой без указания информации о вычете налога
  //  Вызов функции которая меняет строку с з/п в зависимости от параметров
  const minSalary = salaryVariant(min, max, currency);

  /* Если указано что нужна строка с учетом информации о вычете налогов  
   и при этом указана зарплата и информация о вычете налогов */
  if (fullStr && minSalary && gross !== null) {
    const grossStr = gross ? "до вычета НДФЛ" : "на руки";
    const fullSalary = `${minSalary}. ${grossStr}`;
    return (
      <Typography component="h3" variant="title">
        {fullSalary}
      </Typography>
    );
  }
  // В ином случае вернуть строку с зарплатой или информацию о том что з/п не указана
  return (
    <Typography component="h3" variant="title">
      {minSalary || "з/п не указана"}
    </Typography>
  );
};

export default Salary;
