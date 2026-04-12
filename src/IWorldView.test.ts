import CanvasWorldView from "./CanvasWorldView";
import WorldModel from "./WorldModel";
import Snake from "./Snake";
import Point from "./Point";
import ActorCollisionHandlers from "./ActorCollisionHandlers";

describe("CanvasWorldView", () => {
  it("implements display without crashing", () => {

    // Create a fake canvas + context for testing
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;

    const view = new CanvasWorldView(context);

    const snake = new Snake(new Point(0, 0), 3, "RIGHT");
    const aca = new ActorCollisionHandlers();
    const world = new WorldModel(aca);

    // Add snake to world
    world.addActor(snake);

    // Add view (optional but good practice)
    world.addView(view);

    // Should not crash
    expect(() => view.display(world)).not.toThrow();
  });
});