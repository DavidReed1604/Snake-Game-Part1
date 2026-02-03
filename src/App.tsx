import "./App.css";
import { useEffect, useState } from "react";
import Display from "./ConsoleDisplay";
import display from "./display";
// import Car from "./Car";
// import Duck from "./Duck";
import Snake from "./Snake";

export default function App() {
  const [output, setOutput] = useState("");
  useEffect(() => {
    // Include your display statements to test below
    let text = "OUTPUT:\n";
    display("hey");
    setOutput(text);
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Display output={output} />
    </div>
  );
}
