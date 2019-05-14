import React from "react";
import { Typography } from "@material-ui/core";

const Salary = props => {
  const { min, max, currency } = props;

  // Если есть минимальная и максимальная зарплата и они не равны друг-другу
  if (min && max && min !== max) {
    return (
      <Typography
        component="h3"
        variant="title"
      >{`${min}-${max} ${currency}`}</Typography>
    );
  }
  // Если указана одинаковая минимальная и максимальная зарплата
  if (max !== null && min !== null && min === max) {
    return (
      <Typography
        component="h3"
        variant="title"
      >{`${min} ${currency}`}</Typography>
    );
  }
  // Если указана только минимальная зарплата
  if (min) {
    return (
      <Typography
        component="h3"
        variant="title"
      >{`от ${min} ${currency}`}</Typography>
    );
  }
  // Если указана только максимальная зарплата
  if (max) {
    return (
      <Typography
        component="h3"
        variant="title"
      >{`до ${max} ${currency}`}</Typography>
    );
  }

  // Если зарплата не указана
  return null;
};

export default Salary;
