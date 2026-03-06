import IWorldView from './IWorldView';
import WorldModel from './WorldModel';

class CanvasWorldView implements IWorldView {
    private scalingFactor: number;
    private worldCanvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    constructor(scalingFactor: number) {
        this.scalingFactor = scalingFactor;
        this.worldCanvas = document.createElement("canvas");
        this.context = this.worldCanvas.getContext("2d") as CanvasRenderingContext2D;
        document.body.appendChild(this.worldCanvas);
        }
    public display(world: WorldModel): void {
        this.worldCanvas.width = world.width * this.scalingFactor;
        this.worldCanvas.height = world.height * this.scalingFactor;
        this.context.clearRect(
            0,
            0,
            this.worldCanvas.width,
            this.worldCanvas.height
        );
        const snakePos = world.snake.p;
        this.context.fillStyle = "green";
        this.context.fillRect(
            snakePos.x * this.scalingFactor,
            snakePos.y * this.scalingFactor,
            this.scalingFactor,
            this.scalingFactor
        );
    }
}

export default CanvasWorldView;