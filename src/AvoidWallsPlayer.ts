import Player from './Player';
import SnakeController from './SnakeController';

class AvoidWallsPlayer extends Player {
    constructor(sc: SnakeController) {
        super(sc);
    }
    public makeTurn(): void {
        const pos = this.sc.snakePosition;
        const dir = this.sc.snakeDirection;
        const width = this.sc.worldWidth;
        const height = this.sc.worldHeight;
        const halfHeight = height / 2;
        const halfWidth = width / 2;
        if (dir === "left" && pos.x === 0) {
            if (pos.y <= halfHeight) {
                this.sc.turnSnakeLeft();
            } else {
                this.sc.turnSnakeRight();
            }
        }
        else if (dir === "right" && pos.x === -1) {
            if (pos.y <= halfHeight) {
                this.sc.turnSnakeRight();
            } else {
                this.sc.turnSnakeLeft();
            }
        }
        else if (dir === "up" && pos.y === 0) {
            if (pos.x <= halfWidth) {
                this.sc.turnSnakeRight();
            } else {
                this.sc.turnSnakeLeft();
            }
        }
        else if (dir === "down" && pos.y === height - 1) {
            if (pos.x <= halfWidth) {
                this.sc.turnSnakeLeft();
            } else {
                this.sc.turnSnakeRight();
            }
        }
    }
}

export default AvoidWallsPlayer;