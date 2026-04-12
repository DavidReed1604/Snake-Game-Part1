import ICollisionHandler from "./ICollisionHandler";
import Snake from "./Snake";
import Food from "./Food";
import IActor from "./IActor";

class SnakeFoodCollisionHandler implements ICollisionHandler {
    applyAction(a: IActor, b: IActor): void {
        const snake = a as Snake;
        const food = b as Food;
        food.eat();
        snake.grow();
    }
}
export default SnakeFoodCollisionHandler;