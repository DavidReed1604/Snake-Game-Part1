import Snake from './Snake';
import Point from './Point';

describe("Snake movement tests", () => {

  it("starts at (0,0)", () => {
    const snake = new Snake(new Point(0, 0), 3, "RIGHT");
    const pos = snake.getPosition();

    expect(pos.x).toBe(0);
    expect(pos.y).toBe(0);
  });

  it("moves right by default", () => {
    const snake = new Snake(new Point(0, 0), 3, "RIGHT");

    // move 3 steps
    for (let i = 0; i < 3; i++) {
      snake.move();
    }

    const pos = snake.getPosition();

    expect(pos.x).toBe(3);
    expect(pos.y).toBe(0);
  });

  it("turns left from right and moves up", () => {
    const snake = new Snake(new Point(0, 0), 3, "RIGHT");

    snake.turnLeft();

    for (let i = 0; i < 2; i++) {
      snake.move();
    }

    const pos = snake.getPosition();

    expect(pos.x).toBe(0);
    expect(pos.y).toBe(-2);
  });

  it("turns right from right and moves down", () => {
    const snake = new Snake(new Point(0, 0), 3, "RIGHT");

    snake.turnRight();

    for (let i = 0; i < 2; i++) {
      snake.move();
    }

    const pos = snake.getPosition();

    expect(pos.x).toBe(0);
    expect(pos.y).toBe(2);
  });

  it("turns multiple times", () => {
    const snake = new Snake(new Point(0, 0), 3, "RIGHT");

    snake.turnRight(); // DOWN
    snake.turnRight(); // LEFT

    for (let i = 0; i < 4; i++) {
      snake.move();
    }

    const pos = snake.getPosition();

    expect(pos.x).toBe(-4);
    expect(pos.y).toBe(0);
  });

});

export {};