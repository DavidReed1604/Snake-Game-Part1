import Snake from "./Snake";
import ICollisionHandler from "./ICollisionHandler";
import IActor from "./IActor";
import { setUncaughtExceptionCaptureCallback } from "node:process";

class SnakeSnakeCollisionHandler implements ICollisionHandler {
    applyAction(a: IActor, b: IActor): void {
        const snake = a as Snake;
        snake.die();
    }
}
export default SnakeSnakeCollisionHandler;