import Point from "./Point";


class Snake {
  private currentParts: Point[];
  private direction: string;

  constructor(startPosition: Point, size: number, direction: string) {
    this.direction = direction;
    //Step 1: Initialize snake with head
    this.currentParts = [startPosition];
    /**
     * Step 2: Build the tail
     * We add (size - 1) more points behind the head
     * This example builds horizontally to the left
     */
    for (let i = 1; i < size; i++) {
      this.currentParts.push(
        new Point(startPosition.x - i, startPosition.y)
      );
    }
  }
  //Return the direction of the snake
  public getDirection(): string {
    return this.direction;
  }
  //Returns the head of the snake
  public getPosition(): Point {
    return this.currentParts[0];
  }
  //Returns all parts
  public getParts(): Point[] {
    return this.currentParts;
  }
  public move(): void {
    /** 
     * Step 1: move tail forward
     * We go backwards so we do not overwrite values
     */
    for (let i = this.currentParts.length - 1; i > 0; i--) {
      this.currentParts[i] = this.currentParts[i - 1];
    }
    //Step 2: compute new head position
    const head = this.currentParts[0];
    let newHead: Point;
    switch (this.direction) {
      case "UP":
        newHead = new Point(head.x, head.y - 1);
        break;
      case "DOWN":
        newHead = new Point(head.x, head.y + 1);
        break;
      case "LEFT":
        newHead = new Point(head.x - 1, head.y);
        break;
      case "RIGHT":
        newHead = new Point(head.x + 1, head.y);
        break;
      default:
        newHead = head; //no movement
    }
    // Step 3: Place new head at index 0
    this.currentParts[0] = newHead;
  }
  public didCollide(s: Snake): boolean {
    const head = this.getPosition();
    // If checking against itself ignore the head (index 0), only check tail
    const partsToCheck = this === s ? s.getParts().slice(1) : s.getParts();
    // Check if head matches any part
    return partsToCheck.some(p => head.equals(p));
  }
  //Turn the snake left
   turnLeft(): void {
    if (this.direction === "up") this.direction = "left";
    else if (this.direction === "left") this.direction = "down";
    else if (this.direction === "down") this.direction = "right";
    else this.direction = "up";
  }
  //Turns the snake right.
  turnRight(): void {
    if (this.direction === "up") this.direction = "right";
    else if (this.direction === "right") this.direction = "down";
    else if (this.direction === "down") this.direction = "left";
    else this.direction = "up";
  }
}
export default Snake;
