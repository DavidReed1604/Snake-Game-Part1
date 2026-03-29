import Snake from "./Snake";
import WorldModel from "./WorldModel";
import SnakeController from "./SnakeController";
import GameController from "./GameController";
import HumanPlayer from "./HumanPlayer";
import AvoidWallsPlayer from "./AvoidWallsPlayer";
import LRKeyInputHandler from "./LRKeyInputHandler";
import Point from "./Point";

// Create snake with new constructor
const snake = new Snake(new Point(0, 0), 5, "RIGHT");

// World no longer takes parameters
const world = new WorldModel();

// Add snake to world
world.addSnake(snake);

// Controller still connects snake + world
const snakeController = new SnakeController(world, snake);

// Input + players
const inputHandler = new LRKeyInputHandler();
const humanPlayer = new HumanPlayer(snakeController, inputHandler);
const aiPlayer = new AvoidWallsPlayer(snakeController, 20, 20);

// Game controller
const gameController = new GameController(world);

// Assign players
gameController.setPlayer1(humanPlayer);
gameController.setPlayer2(aiPlayer);

// Start game loop
gameController.run();