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
    const snake1 = new Snake();
    snake1.move(5);
    snake1.turn();
    snake1.move(2);
    display("Snake 1 position: " + snake1.position);
    const snake2 = new Snake();
    snake2.turn();
    snake2.move(10);
    display("Snake 2 position: " + snake2.position);

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
