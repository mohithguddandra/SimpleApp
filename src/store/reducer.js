// reducer.js
import {
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
} from "./actions";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_REQUEST:
      return { ...state, isLoading: true, error: null };
    case FETCH_ITEMS_SUCCESS:
      return { ...state, items: action.payload, isLoading: false };
    case FETCH_ITEMS_FAILURE:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};

export default reducer;
