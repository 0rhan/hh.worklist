import React, { Component } from "react";
import {
  FormControl,
  Select,
  MenuItem,
  FormHelperText
} from "@material-ui/core";

class SelectSorting extends Component {
  render() {
    return (
      <FormControl>
        <Select name="Сортировка" displayEmpty>
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

export default SelectSorting;
