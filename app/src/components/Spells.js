// Renders all spells from api call
import React from "react";
import Spell from "./Spell.js";
import { CircularProgress } from "@material-ui/core";

const Spells = (props) => {
  if (props.allSpells == undefined) {
    return <CircularProgress />;
  }
  return (
    <div className="spell-container">
      {props.allSpells.map((spell) => {
        return <Spell key={spell.index} spell={spell} />;
      })}
    </div>
  );
};
export default Spells;
