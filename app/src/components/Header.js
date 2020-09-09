// renders header with search
import React from "react";
const header = (props) => {
  return (
    <div className="header">
      <h1>{props.title}</h1>
    </div>
  );
};

export default header;
