import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { CircularProgress } from "@material-ui/core";
import { connect } from "react-redux";
import Header from "./components/Header.js";
function App(props) {
  return (
    <div className="App">
      <Header title={props.title} />
      <CircularProgress />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    title: state.title,
  };
}

export default connect(mapStateToProps, {})(App);
