// renders header with search
import React from "react";
import { TextField } from "@material-ui/core";

const header = (props) => {
  return (
    <div className="header">
      <h1>D&D 5E Grimoire</h1>
      <TextField id="standard-basic" label="Search for Spells" />
    </div>
  );
};

export default header;
