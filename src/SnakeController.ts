import display from './display';
import Snake from './Snake';
import WorldModel from './WorldModel'
import Point from './Point'


class SnakeController {
    private snakeWorld: WorldModel;
    private slitherer: Snake;
    
    constructor(snakeWorld: WorldModel, slitherer: Snake) {
        this.snakeWorld = snakeWorld;
        this.slitherer = slitherer;
    }
    public turnSnakeLeft(): void {
        this.slitherer.turnLeft();
    }
    public turnSnakeRight(): void {
        this.slitherer.turnRight();
    }
    public get snakePosition(): Point {
        return this.slitherer.p;
    }
    public get snakeDirection(): string {
        return this.slitherer.direction;
    }
    public get worldWidth(): number {
        return this.snakeWorld.width;
    }
    public get worldHeight(): number {
        return this.snakeWorld.height;
    }
}

export default SnakeController;