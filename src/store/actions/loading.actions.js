import { SET_LOADING } from "../actionsTypes";

export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  payload: isLoading,
});
