// Renders all spells from api call
import React from "react";
import Spell from "./Spell.js";
import { Button } from "@material-ui/core";

const Spells = (props) => {
  return (
    <div className="spell-container">
      {props.allSpells.map((spell) => {
        return (
          <div className="spells">
            <Button color="secondary" onClick={(e) => e.preventDefault()}>
              {spell.name}
            </Button>
          </div>
        );
      })}
    </div>
  );
};
export default Spells;
