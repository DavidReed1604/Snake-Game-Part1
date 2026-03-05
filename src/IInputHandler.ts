/**
 * Interface fro handling player input.
 * Different implementations may use keyboard, mouse, touch gestures, etc
 */
interface IInputHandler {
    /**
     * Returns true if a left move was made since the last reset.
     */
    madeLeftMove(): boolean;
    /**
     * Returns true if a right move was made since the last reset.
     */
    madeRightMove(): boolean;
    /**
     * Resets the left move state.
     */
    resetLeftMove(): void;
    /**
     * Resets the right move state.
     */
    resetRightMove(): void;
}

export default IInputHandler;