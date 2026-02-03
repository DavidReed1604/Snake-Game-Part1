import Snake from "./Snake";

describe("Snake movement tests", () => {
  it("starts at (0,0)", () => {
    const snake = new Snake();
    const pos = snake.getPosition();
    expect(pos.x).toBe(0);
    expect(pos.y).toBe(0);
  });

  it("moves right by default", () => {
    const snake = new Snake();
    snake.move(3);
    const pos = snake.getPosition();
    expect(pos.x).toBe(3);
    expect(pos.y).toBe(0);
  });

  it("turns left and moves up", () => {
    const snake = new Snake();
    snake.turnLeft();
    snake.move(2);
    const pos = snake.getPosition();
    expect(pos.x).toBe(0);
    expect(pos.y).toBe(2);
  });
});

export {};
