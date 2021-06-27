import React from "react";
import { sum } from "./util/math";

export const App: React.FunctionComponent = () => (
  <div>
    <p>{sum(1, 1)}</p>
  </div>
);
