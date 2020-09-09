import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { CircularProgress, Button } from "@material-ui/core";
import { connect } from "react-redux";
import Header from "./components/Header.js";
import Spells from "./components/SpellsList.js";
import { getSpells } from "./actions";
function App(props) {
  if (props.isFetching) {
    return <CircularProgress />;
  }
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
    error: state.error,
    isFetching: state.isFetching,
  };
}

export default connect(mapStateToProps, { getSpells })(App);
