import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";

const BackButton = () => {
  return (
    <Button component={Link} to="/">
      <ArrowBackIos />
      Вернуться к вакансиям
    </Button>
  );
};

export default BackButton;
