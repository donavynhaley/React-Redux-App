import {
  FETCH_SPELLS_START,
  FETCH_SPELLS_SUCCESS,
  FETCH_SPELLS_FAILURE,
  FETCH_SPELL_START,
  FETCH_SPELL_SUCCESS,
  FETCH_SPELL_FAILURE,
} from "../actions";

export const initialState = {
  loadedSpell: {},
  spells: [],
  error: "",
  isFetching: false,
};

export const reducer = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case FETCH_SPELL_START:
    case FETCH_SPELLS_START:
      return {
        ...state,
        error: "",
        isFetching: true,
      };
    case FETCH_SPELLS_SUCCESS:
      return {
        ...state,
        spells: action.payload,
        error: "",
        isFetching: false,
      };
    case FETCH_SPELL_SUCCESS:
      return {
        ...state,
        loadedSpell: action.payload,
        error: "",
        isFetching: false,
      };
    case FETCH_SPELL_FAILURE:
    case FETCH_SPELLS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};
