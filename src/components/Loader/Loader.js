import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";

const Loader = () => {
  return <LoaderCircle size={50} />;
};

const LoaderCircle = styled(CircularProgress)`
  && {
    position: fixed;
    top: 50%;
    left: 50%;
  }
`;

export default Loader;
