import Snake from "./Snake";
import WorldModel from "./WorldModel";
import Point from './Point';

describe("WorldModel tests", () => {

  it("stores snakes added to the world", () => {
    const snake = new Snake(new Point(0, 0), 3, "RIGHT");
    const world = new WorldModel();

    world.addSnake(snake);

    expect(world.getAllSnakes()).toContain(snake);
  });

  it("updates snake position correctly", () => {
    const snake = new Snake(new Point(0, 0), 3, "RIGHT");
    const world = new WorldModel();

    world.addSnake(snake);

    // Move 5 steps
    for (let i = 0; i < 5; i++) {
      world.update();
    }

    let pos = snake.getPosition();
    expect(pos.x).toBe(5);
    expect(pos.y).toBe(0);

    // Change direction
    snake.turnRight();

    // Move 3 steps
    for (let i = 0; i < 3; i++) {
      world.update();
    }

    pos = snake.getPosition();
    expect(pos.x).toBe(5);
    expect(pos.y).toBe(3);
  });

});