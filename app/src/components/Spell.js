import React from "react";
import { Button } from "@material-ui/core";

const Spell = (props) => {
  return (
    <div className="spells">
      <Button color="secondary" onClick={(e) => e.preventDefault()}>
        {props.spell.name}
      </Button>
    </div>
  );
};
export default Spell;
