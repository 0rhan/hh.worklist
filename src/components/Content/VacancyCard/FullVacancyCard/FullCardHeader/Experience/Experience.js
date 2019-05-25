import React from "react";
import { Typography } from "@material-ui/core";

const Experience = props => {
  const { experience } = props;

  return <Typography> Требуемый опыт работы: {experience} </Typography>;
};

export default Experience;
