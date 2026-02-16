import WorldModel from "./WorldModel";
import Snake from "./Snake";

describe("WorldModel", () => {

  let mockSnake: jest.Mocked<Snake>;

  beforeEach(() => {
    mockSnake = {
      move: jest.fn()
    } as unknown as jest.Mocked<Snake>;
  });

  it("initializes width and height correctly", () => {
    const world = new WorldModel(mockSnake, 20, 30);

    expect(world.width).toBe(20);
    expect(world.height).toBe(30);
  });

  it("stores the snake instance", () => {
    const world = new WorldModel(mockSnake, 10, 15);

    expect(world.Snake).toBe(mockSnake);
  });

  it("calls snake.move when update is called", () => {
    const world = new WorldModel(mockSnake, 10, 15);

    world.update(5);

    expect(mockSnake.move).toHaveBeenCalledWith(5);
  });
});