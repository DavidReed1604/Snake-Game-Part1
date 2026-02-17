import Snake from "./Snake";
import WorldModel from "./WorldModel";

describe("WorldModel tests", () => {
  it("updates snake position correctly", () => {
    const snake = new Snake();
    const world = new WorldModel(snake,20,20);

    world.update(5);
    let pos = world.Snake.Position;
    expect(pos.x).toBe(5);
    expect(pos.y).toBe(0);

    snake.turnLeft();
    world.update(3);
    pos = world.Snake.Position;
    expect(pos.x).toBe(5);
    expect(pos.y).toBe(3);
  });
});
