import React, { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import { store } from "./store";

import Page1 from "./containers/page1";
import Nav_bar from "./components/navbar";
import ErrorComponent from "./components/error";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [page, setPage] = useState(1);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="*" element={<ErrorComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
