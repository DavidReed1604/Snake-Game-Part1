import Snake from "./Snake";
import WorldModel from "./WorldModel";

describe("WorldModel tests", () => {

  it("stores the snake provided to constructor", () => {
    const snake = new Snake();
    const world = new WorldModel(snake, 20, 20);

    expect(world.snake).toBe(snake);
  });

  it("updates snake position correctly", () => {
    const snake = new Snake();
    const world = new WorldModel(snake, 20, 20);

    world.update(5);

    let pos = world.snake.p;
    expect(pos.x).toBe(5);
    expect(pos.y).toBe(0);

    snake.turnRight(); 
    world.update(3);

    pos = world.snake.p;
    expect(pos.x).toBe(5);
    expect(pos.y).toBe(3);
  });

});