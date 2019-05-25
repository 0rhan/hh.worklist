import React from "react";
import { CardContent } from "@material-ui/core";
import FullCardDescription from "./FullCardDescription/FullCardDescription";

const FullCardContent = props => {
  return (
    <CardContent>
      <FullCardDescription {...props} />
    </CardContent>
  );
};

export default FullCardContent;
