import Snake from "./Snake";
import IWorldView from "./IWorldView";

/**
 * Represents the game world that contains the snake
 * and manages updates to the world state.
 */

class WorldModel {
  private worldView: IWorldView | null = null;
  private _snake: Snake;
  private _width: number;
  private _height: number;

/**
 * Creates a new WorldModel.
 * @param snake the snake used in the world
 * @param width width of the world
 * @param height height of the world
 */

  constructor(snake: Snake, width:number, height:number) {
    this._width = width;
    this._height = height;
    this._snake = snake;
  }
/**
 * Updates the world by moving the snake.
 * @param squares number of squares the snake moves
 */

  update(squares: number): void {
    this._snake.move(squares);
    if (this.worldView !== null) {
      this.worldView.display(this);
    }
  }
  /**
   * Gets the snake in the world
   */
  public get snake(): Snake {
    return this._snake;
  }
  /**
   * Gets the width of the world
   */
  public get width():number {
    return this._width;
  }
  /**
   * Gets the height of the world
   */
  public get height():number {
    return this._height;
  }
  /**
   * Sets the view used to display the world
   */
  public set view(view: IWorldView) {
    this.worldView = view;
  }
}

export default WorldModel;
