import Point from "./Point";

type Direction = "up" | "down" | "left" | "right";

// place your code on line 5 above the export statement below
class Snake {
  private currentPosition: Point;
  private currentDirection: Direction;
  constructor() {
    this.currentPosition = new Point(0, 0);
    this.currentDirection = "right";
  }
  move(squares: number) {
    for (let i = 0; i < squares; i++) {
      if (this.currentDirection === "up") {
        this.currentPosition = new Point(
          this.currentPosition.x,
          this.currentPosition.y + 1,
        );
      } else if (this.currentDirection === "down") {
        this.currentPosition = new Point(
          this.currentPosition.x,
          this.currentPosition.y - 1,
        );
      } else if (this.currentDirection === "left") {
        this.currentPosition = new Point(
          this.currentPosition.x - 1,
          this.currentPosition.y,
        );
      } else {
        this.currentPosition = new Point(
          this.currentPosition.x + 1,
          this.currentPosition.y,
        );
      }
    }
  }

  turnLeft(): void {
    if (this.currentDirection === "up") this.currentDirection = "left";
    else if (this.currentDirection === "left") this.currentDirection = "down";
    else if (this.currentDirection === "down") this.currentDirection = "right";
    else this.currentDirection = "up";
  }
  turnRight(): void {
    if (this.currentDirection === "up") this.currentDirection = "right";
    else if (this.currentDirection === "right") this.currentDirection = "down";
    else if (this.currentDirection === "down") this.currentDirection = "left";
    else this.currentDirection = "up";
  }
  getPosition(): Point {
    return this.currentPosition;
  }
}

/*
  turn() {
    if (this.currentDirection === 1) {
      this.currentDirection = -1;
    } else {
      this.currentDirection = 1;
    }
  }
  get position(): number {
    return this.currentPosition;
  }

*/

export default Snake;
