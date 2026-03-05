import Player from './Player';
import SnakeController from './SnakeController';
import IInputHandler from './IInputHandler';
/*
 * Player controlled by human input.
 */
class HumanPlayer extends Player {
    private inputHandler: IInputHandler;
    constructor(sc: SnakeController, inputHandler: IInputHandler) {
        super(sc);
        this.inputHandler = inputHandler;
    }
    /** 
     * Makes a turn based on the player input.
     */
    public makeTurn(): void {
        if (this.inputHandler.madeLeftMove()) {
            this.sc.turnSnakeLeft();
            this.inputHandler.resetLeftMove();
        }
        else if (this.inputHandler.madeRightMove()) {
            this.sc.turnSnakeRight();
            this.inputHandler.resetRightMove();
        }
    }
}

export default HumanPlayer;