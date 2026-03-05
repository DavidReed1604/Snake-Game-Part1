import Snake from "./Snake";

describe("Snake movement tests", () => {

  it("starts at (0,0)", () => {
    const snake = new Snake();
    const pos = snake.p;

    expect(pos.x).toBe(0);
    expect(pos.y).toBe(0);
  });

  it("moves right by default", () => {
    const snake = new Snake();
    snake.move(3);

    const pos = snake.p;

    expect(pos.x).toBe(3);
    expect(pos.y).toBe(0);
  });

  it("turns left from right and moves up", () => {
    const snake = new Snake();

    snake.turnLeft();
    snake.move(2);

    const pos = snake.p;

    expect(pos.x).toBe(0);
    expect(pos.y).toBe(-2);
  });

  it("turns right from right and moves down", () => {
    const snake = new Snake();

    snake.turnRight();
    snake.move(2);

    const pos = snake.p;

    expect(pos.x).toBe(0);
    expect(pos.y).toBe(2);
  });

  it("turns multiple times", () => {
    const snake = new Snake();

    snake.turnRight(); // down
    snake.turnRight(); // left
    snake.move(4);

    const pos = snake.p;

    expect(pos.x).toBe(-4);
    expect(pos.y).toBe(0);
  });

});
export {};
