import IActor from "./IActor";
import Point from "./Point";

class Food implements IActor {
  private currentPosition: Point;
  private isCurrentlyActive: boolean;

  constructor(x: number, y: number) {
    this.currentPosition = new Point(x, y);
    this.isCurrentlyActive = true;
  }

  public eat(): void {
    this.isCurrentlyActive = false;
  }

  get position(): Point {
    return this.currentPosition;
  }

  get isActive(): boolean {
    return this.isCurrentlyActive;
  }

  get type(): string {
    return "food";
  }

  update(): void {
    // nothing
  }
}

export default Food;