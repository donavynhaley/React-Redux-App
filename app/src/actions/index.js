import axios from "axios";

export const FETCH_SPELLS_START = "FETCH_SPELLS_START";
export const FETCH_SPELLS_SUCCESS = "FETCH_SPELLS_SUCCESS";
export const FETCH_SPELLS_FAILURE = "FETCH_SPELLS_FAILURE";

export const getSpells = () => (dispatch) => {
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

export const FETCH_SPELL_START = "FETCH_SPELL_START";
export const FETCH_SPELL_SUCCESS = "FETCH_SPELL_SUCCESS";
export const FETCH_SPELL_FAILURE = "FETCH_SPELL_FAILURE";

export const getSpell = (spellIndex) => (dispatch) => {
  dispatch({ type: FETCH_SPELL_START });
  axios
    .get(`https://www.dnd5eapi.co/api/spells/${spellIndex}`)
    .then((res) => {
      dispatch({ type: FETCH_SPELL_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_SPELL_FAILURE, payload: err.response.status });
    });
};
