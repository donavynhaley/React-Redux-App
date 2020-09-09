import React from "react";
import { Link } from "@material-ui/core";

const Spell = (props) => {
  return (
    <>
      <Link href="#" onClick={(e) => e.preventDefault()}>
        {props.spell.name}
      </Link>
    </>
  );
};
export default Spell;
