import Snake from "./Snake";
import WorldModel from "./WorldModel";
import SnakeController from "./SnakeController";
import GameController from "./GameController";
import HumanPlayer from "./HumanPlayer";
import AvoidWallsPlayer from "./AvoidWallsPlayer";
import LRKeyInputHandler from "./LRKeyInputHandler";

const snake = new Snake();
const world = new WorldModel(snake, 20, 20);

const snakeController = new SnakeController(world, snake);

const inputHandler = new LRKeyInputHandler();

const humanPlayer = new HumanPlayer(snakeController, inputHandler);
const aiPlayer = new AvoidWallsPlayer(snakeController);

const gameController = new GameController(world);

gameController.setPlayer1(humanPlayer);
gameController.setPlayer2(aiPlayer);

gameController.run();