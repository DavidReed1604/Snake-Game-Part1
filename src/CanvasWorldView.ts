import IWorldView from './IWorldView';
import WorldModel from './WorldModel';
import Snake from "./Snake";

class CanvasWorldView implements IWorldView {
    private context: CanvasRenderingContext2D;
    constructor(context: CanvasRenderingContext2D) {
        this.context = context;
    }
    public display(w: WorldModel): void {
        //Clear the screen before redrawing
        this.context.clearRect(0,0,500,500);
        //Loop through every snake
        const iterator = w.getActors();
        let result = iterator.next();
        while (!result.done) {
            const actor = result.value!;
            //Only draw snakes
            if (actor.type === "snake") {
                const snake = actor as Snake;
                snake.getParts().forEach(part => {
                    this.context.fillRect(
                        part.x * 10,
                        part.y * 10,
                        10,
                        10
                    );
                });
            }
            result = iterator.next();
        }
    }
}

export default CanvasWorldView;