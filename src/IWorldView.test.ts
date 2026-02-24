import CanvasWorldView from "./CanvasWorldView";
import WorldModel from "./WorldModel";
import Snake from "./Snake";

describe("CanvasWorldView", () => {
  it("implements display without crashing", () => {
    const snake = new Snake();
    const world = new WorldModel(snake,20,20);
    const view = new CanvasWorldView(10);

    world.view = view;

    expect(() => world.update(0)).not.toThrow();
  });
});