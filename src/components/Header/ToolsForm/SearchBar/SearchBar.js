import React, { Component } from "react";
import { InputBase } from "@material-ui/core";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";

class SearchBar extends Component {
  render() {
    return (
      <SearchContainer>
        <StyledSearchIcon />
        <InputBase placeholder="Поиск" />
      </SearchContainer>
    );
  }
}

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
