import SnakeController from "./SnakeController";
import Snake from "./Snake";
import WorldModel from "./WorldModel";
import Point from './Point';

describe("SnakeController tests", () => {

  let snake: Snake;
  let world: WorldModel;
  let controller: SnakeController;
 
  beforeEach(() => {
    // Create snake with required constructor params
    snake = new Snake(new Point(0, 0), 3, "RIGHT");

    // World now has no constructor parameters
    world = new WorldModel();

    // Add snake to world
    world.addSnake(snake);

    controller = new SnakeController(world, snake);
  });

  it("returns snake position", () => {
    expect(controller.snakePosition).toBeDefined();
  });

  it("turns snake left", () => {
    controller.turnSnakeLeft();

    // Expect updated direction via getter
    expect(controller.snakeDirection).toBe("UP");
  });

  it("turns snake right", () => {
    controller.turnSnakeRight();

    expect(controller.snakeDirection).toBe("DOWN");
  });

});