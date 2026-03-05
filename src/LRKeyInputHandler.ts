import IInputHandler from "./IInputHandler";

/**
 *Keyboard input handler that listens for left and right arrow key presses.
 */
class LRKeyInputHandler implements IInputHandler {
    private wasLeftArrowPushed: boolean;
    private wasRightArrowPushed: boolean;
    constructor() {
        this.wasLeftArrowPushed = false;
        this.wasRightArrowPushed = false;
        window.addEventListener("keydown", (event: KeyboardEvent) => {
            if (event.key === "ArrowLeft") {
                this.wasLeftArrowPushed = true;
            }
            if (event.key === "ArrowRight") {
                this.wasRightArrowPushed = true;
            }
        })
    }
    public madeLeftMove(): boolean {
        return this.wasLeftArrowPushed;
    }
    public madeRightMove(): boolean {
        return this.wasRightArrowPushed;
    }
    public resetLeftMove(): void {
        this.wasLeftArrowPushed = false;
    }
    public resetRightMove(): void {
        this.wasRightArrowPushed = false;
    }
}

export default LRKeyInputHandler;