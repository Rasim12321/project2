import { SET_LOADING } from "../actionsTypes";

const initialState = true;

export const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return action.payload;
  }
  return state;
};
