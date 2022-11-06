import { combineReducers } from "redux";
import { CountriesReducer } from "./countriesReducer";
import { infoReducer } from "./infoReducer";
import { loadingReducer } from "./loadingReducer";

export const rootReducer = combineReducers({
  countries: CountriesReducer,
  info: infoReducer,
  loading: loadingReducer,
});
