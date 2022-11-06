import { SET_DATA } from "../actionsTypes";

const initialState = null;

export const infoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return action.payload;
  }

  return state;
};
