import React from "react";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

import { store } from "./store";
import Page1 from "./containers/page1";
import Nav_bar from "./components/navbar";

import "./App.css";

function App() {
  return (
    <>
      <div className="pages">
        <Provider store={store}>
          {/* <Nav_bar className="Nav_bar" /> */}

          <Page1 />
        </Provider>
      </div>
    </>
  );
}

export default App;
