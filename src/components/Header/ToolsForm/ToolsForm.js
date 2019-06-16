import React, { Component } from "react";
import SearchBar from "./SearchBar/SearchBar";
import styled from "styled-components";
import { DataConsumer } from "utils/context";

class ToolsForm extends Component {
  state = {
    searchStr: ""
  };

  handleInput = event => {
    const {
      target: { value }
    } = event;
    this.setState({
      searchStr: value
    });
  };

  render() {
    const { searchStr } = this.state;
    return (
      <DataConsumer>
        {({ searchVacancies }) => {
          return (
            <StyledForm
              autoComplete="off"
              onSubmit={event => searchVacancies(searchStr, event)}
            >
              <SearchBar
                handleInput={this.handleInput}
                searchVacancies={searchVacancies}
                searchStr={searchStr}
              />
            </StyledForm>
          );
        }}
      </DataConsumer>
    );
  }
}

export default ToolsForm;

const StyledForm = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-grow: 1;
`;
