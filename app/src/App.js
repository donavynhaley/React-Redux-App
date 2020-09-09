import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import Header from "./components/Header.js";
import Spells from "./components/Spells.js";
import { getSpells } from "./actions";
function App(props) {
  return (
    <div className="App">
      <Header />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          props.getSpells();
        }}
      >
        Open SpellBook
      </Button>
      <Spells allSpells={props.spells} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    spells: state.spells,
  };
}

export default connect(mapStateToProps, { getSpells })(App);
