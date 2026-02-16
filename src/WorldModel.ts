import Snake from "./Snake";

class WorldModel {
  private snake: Snake;
  private _width: number;
  private _height: number;
  constructor(snake: Snake, width:number, height:number) {
    this._width = width;
    this._height = height;
    this.snake = snake;
  }
  update(squares: number): void {
    this.snake.move(squares);
  }
  public get Snake(): Snake {
    return this.snake;
  }
  public get width():number {
    return this._width;
  }
  public get height():number {
    return this._height;
  }
}

export default WorldModel;
