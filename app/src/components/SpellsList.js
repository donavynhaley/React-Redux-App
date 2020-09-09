// Renders all spells from api call
import React from "react";
import Spell from "./Spell.js";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import { getSpell } from "../actions";
const Spells = (props) => {
  return (
    <div className="spell-container">
      {props.allSpells.map((spell) => {
        return (
          <div className="spells">
            <Button
              color="secondary"
              onClick={() => props.getSpell(spell.index)}
            >
              {spell.name}
            </Button>
          </div>
        );
      })}
    </div>
  );
};
export default connect(
  () => {
    return {};
  },
  { getSpell }
)(Spells);
