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

    // Updated: use getter method instead of .p
    public get snakePosition(): Point {
        return this.slitherer.getPosition();
    }

    public get snakeDirection(): string {
        return this.slitherer.getDirection();
    }
}

export default SnakeController;