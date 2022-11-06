import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleWare from "redux-saga";
import { rootReducer } from "./reducers/rootReducer";
import { rootWatcher } from "./saga/rootWatcher";

const sagaMiddleware = createSagaMiddleWare();
const composeEnhancers = composeWithDevTools({});
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootWatcher);
