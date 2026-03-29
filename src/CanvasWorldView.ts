import IWorldView from './IWorldView';
import WorldModel from './WorldModel';

class CanvasWorldView implements IWorldView {
    private context: CanvasRenderingContext2D;
    constructor(context: CanvasRenderingContext2D) {
        this.context = context;
    }
    public display(w: WorldModel): void {
        //Clear the screen before redrawing
        this.context.clearRect(0,0,500,500);
        //Loop through every snake
        w.getAllSnakes().forEach(snake => {
            snake.getParts().forEach(part => {
                this.context.fillRect(
                    part.x * 10,
                    part.y * 10,
                    10,
                    10
                );
            });
        });
    }
}

export default CanvasWorldView;