import Snake from "./Snake";
import WorldModel from "./WorldModel";
import Point from './Point';
import ActorCollisionHandlers from "./ActorCollisionHandlers";
import { resourceLimits } from "worker_threads";

describe("WorldModel tests", () => {

  it("stores snakes added to the world", () => {
    const snake = new Snake(new Point(0, 0), 3, "RIGHT");
    const aca = new ActorCollisionHandlers();
    const world = new WorldModel(aca);

    world.addActor(snake);

    const iterator = world.getActors();
    const result = iterator.next();

    expect(result.value).toBe(snake);
  });

  it("updates snake position correctly", () => {
    const snake = new Snake(new Point(0, 0), 3, "RIGHT");
    const aca = new ActorCollisionHandlers();
    const world = new WorldModel(aca);

    world.addActor(snake);

    // Move 5 steps
    for (let i = 0; i < 5; i++) {
      world.update();
    }

    let pos = snake.getPosition();
    expect(pos.x).toBe(5);
    expect(pos.y).toBe(0);

    // Change direction
    snake.turnRight();

    // Move 3 steps
    for (let i = 0; i < 3; i++) {
      world.update();
    }

    pos = snake.getPosition();
    expect(pos.x).toBe(5);
    expect(pos.y).toBe(3);
  });

});