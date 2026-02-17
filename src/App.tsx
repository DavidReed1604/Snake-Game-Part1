import "./App.css";
import { useEffect, useState } from "react";
import Display from "./ConsoleDisplay";
import display from "./display";
// import Car from "./Car";
import Duck from "./Duck";
import Quacker from './Quacker';

export default function App() {
  const [output, setOutput] = useState("");
  useEffect(() => {
    // Include your display statements to test below
    let text = "OUTPUT:\n";
    display("hey");
    let redDuckQuacker = new Quacker();
    let blueDuckQuacker = new Quacker();
    let coolDuck = new Quacker();
    let redDuck = new Duck("red", redDuckQuacker);
    let blueDuck = new Duck("blue", blueDuckQuacker);
    redDuck.Quack(4);
    blueDuck.Quack(10);
    display("Changing Quackers.. ");
    redDuck.Quacker = coolDuck;
    blueDuck.Quacker = redDuckQuacker;
    redDuck.Quack(4);
    blueDuck.Quack(10);
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
