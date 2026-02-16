import SnakeController from './SnakeController';

abstract class Player {
    protected sc: SnakeController;

    constructor(sc: SnakeController) {
        this.sc = sc;
    }
    public abstract makeTurn(): void;
}

export default Player;