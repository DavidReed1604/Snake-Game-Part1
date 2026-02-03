import Snake from "./Snake";

class WorldModel {
  private snake: Snake;
  constructor(snake: Snake) {
    this.snake = snake;
  }
  update(squares: number): void {
    this.snake.move(squares);
  }
  getSnake(): Snake {
    return this.snake;
  }
}

export default WorldModel;
