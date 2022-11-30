import React from "react";
import List from "./list";
import { PAGE_HEADER, PAGE_TITLE } from "./constants";

const InformationSection = () => {
  return (
    <div className="first-page-left-block">
      <div>
        <h1>{PAGE_HEADER}</h1>
      </div>
      <div>
        <p>{PAGE_TITLE}</p>
      </div>
      <div>
        <h3>Get started in no-time</h3>
      </div>
      <div>
        <List />
      </div>
    </div>
  );
};

export default InformationSection;
