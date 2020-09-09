import {
  FETCH_SPELLS_START,
  FETCH_SPELLS_SUCCESS,
  FETCH_SPELLS_FAILURE,
} from "../actions";

export const initialState = {
  spells: [],
  error: "",
  isFetching: false,
};

export const reducer = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
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
    default:
      return state;
  }
};
