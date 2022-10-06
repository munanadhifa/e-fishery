import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import Table from "./Components/Table";
// import Test from "./Components/Test";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Table />
    {/* <Test /> */}
  </React.StrictMode>
);
