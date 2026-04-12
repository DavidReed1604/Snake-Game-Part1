import Point from "./Point";
import ICollidable from "./ICollidable";
import IActor from "./IActor";

class Snake implements ICollidable {
  private currentParts: Point[];
  private direction: string;
  private isCurrentlyActive: boolean;

  constructor(startPosition: Point, size: number, direction: string) {
    this.direction = direction;
    this.isCurrentlyActive = true;
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
  //Update method
  public update(): void {
    this.move();
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
  get position(): Point {
    return this.getPosition();
  }
  get isActive(): boolean {
    return this.isCurrentlyActive;
  }
  get type(): string {
    return "snake";
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
  public didCollide(actor: IActor): boolean {
    const head = this.getPosition();
    // collision with non-snake
    if(actor.type !== "snake") {
      return head.equals(actor.position);
    } 
    else if (this !== actor) {
      const s = actor as Snake;
      return s.getParts().some(p => head.equals(p));
    } else {
      return this.getParts().slice(1).some(p => head.equals(p));
    }
  }
  public die(): void {
    this.isCurrentlyActive = false;
  }
  public grow(): void {
    const tail = this.currentParts[this.currentParts.length - 1];
    let newPart: Point;
    switch (this.direction) {
      case "RIGHT":
        newPart = new Point(tail.x - 1, tail.y);
        break;
      case "LEFT":
        newPart = new Point(tail.x + 1, tail.y);
        break;
      case "DOWN":
        newPart = new Point(tail.x, tail.y - 1);
        break;
      case "UP":
        newPart = new Point(tail.x, tail.y + 1);
        break;
      default:
        newPart = tail;
    }
    this.currentParts.push(newPart);
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
