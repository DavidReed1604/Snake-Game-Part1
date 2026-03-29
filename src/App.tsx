import "./App.css";
import { useEffect, useState } from "react";
import Display from "./ConsoleDisplay";
import display from "./display";
// import Car from "./Car";
import Snake from './Snake';
import Duck from "./Duck";
import Quacker from './Quacker';
import CanvasWorldView from './CanvasWorldView';
import WorldModel from "./WorldModel";
import Point from "./Point";

export default function App() {
  const [output, setOutput] = useState("");
  useEffect(() => {
    // Include your display statements to test below
    let text = "OUTPUT:\n";
    // Create a snake (head at 0,0, length 5, moving RIGHT)
    const snake = new Snake(new Point(0, 0), 5, "RIGHT");

    // Create world and add the snake
    const world = new WorldModel();
    world.addSnake(snake);

    // Create a canvas + context for CanvasWorldView
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    const canvasView = new CanvasWorldView(context);

    // Add view to world
    world.addView(canvasView);

    // Update world (1 tick)
    world.update();
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
