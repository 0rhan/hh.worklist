import React from "react";
import { InputBase, Button } from "@material-ui/core";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = props => {
  const { handleInput, searchVacancies, searchStr } = props;

  return (
    <SearchContainer>
      <StyledSearchIcon />
      <InputBase name="search" placeholder="Поиск" onChange={handleInput} />
      <Button size="small" onClick={event => searchVacancies(searchStr, event)}>
        Найти
      </Button>
    </SearchContainer>
  );
};

export default SearchBar;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid white;
  border-radius: 4px;
  background-color: ${props => props.theme.palette.secondary.light};
`;

const StyledSearchIcon = styled(SearchIcon)`
  color: ${props => props.theme.palette.primary.main};
  padding: 0px 14px;
`;
