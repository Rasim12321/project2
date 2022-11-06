import { all } from "redux-saga/effects";
import { counriesWatcher } from "./countries.saga";

export function* rootWatcher() {
  yield all([counriesWatcher()]);
}
