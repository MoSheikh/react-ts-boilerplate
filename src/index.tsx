import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));

export const sum = (a: number, b: number): number => a + b;
