import SnakeController from "./SnakeController";
import Snake from "./Snake";
import WorldModel from "./WorldModel";

describe("SnakeController tests", () => {

  let snake: Snake;
  let world: WorldModel;
  let controller: SnakeController;
 
  beforeEach(() => {
    snake = new Snake();
    world = new WorldModel(snake, 20, 20);
    controller = new SnakeController(world, snake);
  });

  it("returns world width", () => {
    expect(controller.worldWidth).toBe(20);
  });

  it("returns world height", () => {
    expect(controller.worldHeight).toBe(20);
  });

  it("returns snake position", () => {
    expect(controller.snakePosition).toBeDefined();
  });

  it("turns snake left", () => {
    controller.turnSnakeLeft();
    expect(controller.snakeDirection).toBe("up");
  });

  it("turns snake right", () => {
    controller.turnSnakeRight();
    expect(controller.snakeDirection).toBe("down");
  });

});