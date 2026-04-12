import SnakeController from "./SnakeController";
import Snake from "./Snake";
import WorldModel from "./WorldModel";
import Point from './Point';
import ActorCollisionHandlers from "./ActorCollisionHandlers";

describe("SnakeController tests", () => {

  let snake: Snake;
  let world: WorldModel;
  let controller: SnakeController;
 
  beforeEach(() => {
    // Create snake with required constructor params
    snake = new Snake(new Point(0, 0), 3, "RIGHT");

    // World now has no constructor parameters
    const aca = new ActorCollisionHandlers();
    world = new WorldModel(aca);

    // Add snake to world
    world.addActor(snake);

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