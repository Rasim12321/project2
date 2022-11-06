import { FETCH_COUNTRIES, SET_COUNTRIES } from "../actionsTypes";

export const fetchCountries = (payload) => ({ type: FETCH_COUNTRIES, payload });
export const setCountries = (payload) => ({ type: SET_COUNTRIES, payload });
