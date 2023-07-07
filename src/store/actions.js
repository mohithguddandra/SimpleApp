// actions.js
export const FETCH_ITEMS_REQUEST = "FETCH_ITEMS_REQUEST";
export const FETCH_ITEMS_SUCCESS = "FETCH_ITEMS_SUCCESS";
export const FETCH_ITEMS_FAILURE = "FETCH_ITEMS_FAILURE";

export const fetchItems = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_ITEMS_REQUEST });

    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      dispatch({ type: FETCH_ITEMS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_ITEMS_FAILURE, payload: error.message });
    }
  };
};
