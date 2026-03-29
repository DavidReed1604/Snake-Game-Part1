import AvoidWallsPlayer from "./AvoidWallsPlayer";

describe("AvoidWallsPlayer", () => {
  let mockSC: any;
  let player: AvoidWallsPlayer;

  beforeEach(() => {
    mockSC = {
      snakePosition: { x: 0, y: 2 },
      snakeDirection: "LEFT",
      turnSnakeLeft: jest.fn(),
      turnSnakeRight: jest.fn()
    };

    // Pass width and height into constructor
    player = new AvoidWallsPlayer(mockSC, 10, 10);
  });

  it("turns left when hitting left wall in upper half", () => {
    player.makeTurn();
    expect(mockSC.turnSnakeLeft).toHaveBeenCalled();
  });

  it("turns right when hitting left wall in lower half", () => {
    mockSC.snakePosition = { x: 0, y: 8 };
    player.makeTurn();
    expect(mockSC.turnSnakeRight).toHaveBeenCalled();
  });

  it("does nothing when not hitting wall", () => {
    mockSC.snakePosition = { x: 5, y: 5 };
    mockSC.snakeDirection = "RIGHT";

    player.makeTurn();

    expect(mockSC.turnSnakeLeft).not.toHaveBeenCalled();
    expect(mockSC.turnSnakeRight).not.toHaveBeenCalled();
  });
});