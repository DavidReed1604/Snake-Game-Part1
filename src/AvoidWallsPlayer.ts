import Player from './Player';
import SnakeController from './SnakeController';

class AvoidWallsPlayer extends Player {
    private width: number;
    private height: number;

    constructor(sc: SnakeController, width: number, height: number) {
        super(sc);
        this.width = width;
        this.height = height;
    }

    public makeTurn(): void {
        const pos = this.sc.snakePosition;
        const dir = this.sc.snakeDirection;

        const halfHeight = this.height / 2;
        const halfWidth = this.width / 2;

        if (dir === "LEFT" && pos.x === 0) {
            if (pos.y <= halfHeight) {
                this.sc.turnSnakeLeft();
            } else {
                this.sc.turnSnakeRight();
            }
        }
        else if (dir === "RIGHT" && pos.x === this.width - 1) {
            if (pos.y <= halfHeight) {
                this.sc.turnSnakeRight();
            } else {
                this.sc.turnSnakeLeft();
            }
        }
        else if (dir === "UP" && pos.y === 0) {
            if (pos.x <= halfWidth) {
                this.sc.turnSnakeRight();
            } else {
                this.sc.turnSnakeLeft();
            }
        }
        else if (dir === "DOWN" && pos.y === this.height - 1) {
            if (pos.x <= halfWidth) {
                this.sc.turnSnakeLeft();
            } else {
                this.sc.turnSnakeRight();
            }
        }
    }
}

export default AvoidWallsPlayer;