import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./containers/Login";
import PersonalInformation from "./containers/PersonalInformation";
import ErrorPage from "./containers/ErrorPage";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/PersonInformation" element={<PersonalInformation />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
