import React from "react";
import SearchBar from "./SearchBar/SearchBar";
// import SelectSorting from "./SelectSorting/SelectSorting";
// import SelectFilter from "./SeletFilter/SelectFilter";
import styled from "styled-components";

const ToolsForm = () => {
  return (
    <StyledForm autoComplete="off">
      <SearchBar />
      {/* <SelectSorting /> */}
      {/* <SelectFilter /> */}
    </StyledForm>
  );
};

export default ToolsForm;

const StyledForm = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-grow: 1;
`;
