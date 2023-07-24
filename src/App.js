import { useEffect, useLayoutEffect, useState } from "react";
import { SomeComponent } from "../Test";
import { Main } from "./memo";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* <SomeComponent /> */}
      <Main />
    </div>
  );
}
