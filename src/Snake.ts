import Point from "./Point";

type Direction = "up" | "down" | "left" | "right";

/**
 * Represents snake in the world
 * Tracks its position and direction and allows movement and turning.
 */
class Snake {
  private currentPosition: Point;
  private currentDirection: Direction;

/**
 * Creates a new snake starting at (0,0) facing right.
 */

  constructor() {
    this.currentPosition = new Point(0, 0);
    this.currentDirection = "right";
  }

/**
 * Moves the snake forward a numbers of spaces.
 * @param squares number of squares to move
 */

  move(squares: number): void {
      if (this.currentDirection === "up") {
        this.currentPosition = new Point(
          this.currentPosition.x,
          this.currentPosition.y - squares,
        );
      } else if (this.currentDirection === "down") {
        this.currentPosition = new Point(
          this.currentPosition.x,
          this.currentPosition.y + squares,
        );
      } else if (this.currentDirection === "left") {
        this.currentPosition = new Point(
          this.currentPosition.x - squares,
          this.currentPosition.y,
        );
      } else {
        this.currentPosition = new Point(
          this.currentPosition.x + squares,
          this.currentPosition.y,
        );
      }
    }
    /**
     * Turns the snake left.
     */

  turnLeft(): void {
    if (this.currentDirection === "up") this.currentDirection = "left";
    else if (this.currentDirection === "left") this.currentDirection = "down";
    else if (this.currentDirection === "down") this.currentDirection = "right";
    else this.currentDirection = "up";
  }

  /**
   * Turns the snake right.
   */
  turnRight(): void {
    if (this.currentDirection === "up") this.currentDirection = "right";
    else if (this.currentDirection === "right") this.currentDirection = "down";
    else if (this.currentDirection === "down") this.currentDirection = "left";
    else this.currentDirection = "up";
  }

  /**
   * Gets the snakes current position
   */
  get p(): Point {
    return this.currentPosition;
  }

  /**
   * Gets the snakes current direction
   */
  get direction(): Direction {
    return this.currentDirection;
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
