import { put, takeLatest } from "redux-saga/effects";
import { setCountries } from "../actions/countries.actions";
import { setLoading } from "../actions/loading.actions";
import { FETCH_COUNTRIES } from "../actionsTypes";

function* countriesWorker() {
  try {
    yield put(setLoading(true));
    const data = yield fetch("https://restcountries.com/v3.1/all").then(
      (data) => data.json()
    );
    const countries = [];
    yield data.map((item) => countries.push(item.name.common));
    yield put(setCountries(countries));
  } catch (error) {
    yield put(setCountries(null));
  } finally {
    yield put(setLoading(false));
  }
}

export function* counriesWatcher() {
  yield takeLatest(FETCH_COUNTRIES, countriesWorker);
}
