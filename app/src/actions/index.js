import axios from "axios";

export const FETCH_SPELLS_START = "FETCH_SPELLS_START";
export const FETCH_SPELLS_SUCCESS = "FETCH_SPELLS_SUCCESS";
export const FETCH_SPELLS_FAILURE = "FETCH_SPELLS_FAILURE";

export const getSpells = () => (dispatch) => {
  console.log("making requst");
  dispatch({ type: FETCH_SPELLS_START });
  axios
    .get("https://www.dnd5eapi.co/api/spells")
    .then((res) => {
      dispatch({ type: FETCH_SPELLS_SUCCESS, payload: res.data.results });
    })
    .catch((err) => {
      dispatch({ type: FETCH_SPELLS_FAILURE, payload: err.response.status });
    });
};
