import React from "react";
import { increment, reset } from "../redux/counterActions";
import Counter from './Counter';
import StepSelector from "./StepSelector";

function App() {
  return (
    <div className="Counter">
      <StepSelector />
      <Counter />
    </div>
  );
}

export default App;
