import CanvasWorldView from "./CanvasWorldView";
import WorldModel from "./WorldModel";
import Snake from "./Snake";

describe("CanvasWorldView", () => {
  it("implements display without crashing", () => {
    const view = new CanvasWorldView(10);

    const snake = new Snake();
    const world = new WorldModel(snake, 20, 20);

    expect(() => view.display(world)).not.toThrow();
  });
});
