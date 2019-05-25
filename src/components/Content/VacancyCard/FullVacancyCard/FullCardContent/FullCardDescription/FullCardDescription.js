import React from "react";
import ReactHtmlParser from "react-html-parser";

const FullCardDescription = props => {
  const { htmlDescription } = props;
  return <div>{ReactHtmlParser(htmlDescription)}</div>;
};

export default FullCardDescription;
