import React from "react";
import Header from "components/Header/Header";
import Content from "components/Content/Content";
import GlobalStyle from "utils/styles/GlobalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Content />
    </>
  );
};

export default App;
