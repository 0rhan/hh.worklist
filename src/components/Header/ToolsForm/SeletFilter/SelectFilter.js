import React, { Component } from "react";
import {
  FormControl,
  Select,
  MenuItem,
  FormHelperText
} from "@material-ui/core";

class SelectFilter extends Component {
  render() {
    return (
      <FormControl>
        <Select name="Фильтры" displayEmpty>
          <MenuItem value="" disabled>
            Placeholder
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Placeholder</FormHelperText>
      </FormControl>
    );
  }
}

export default SelectFilter;
