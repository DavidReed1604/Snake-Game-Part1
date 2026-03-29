import display from "./display";

class Point {
  constructor(public x: number, public y: number) {}
  /**
   * Checks if two points have the same coordinates
   * Important because objects are compared by reference in JS/TS
   * two different objects with the same values are not equal with ===
   */
  public equals(p: Point): boolean {
    return this.x === p.x && this.y === p.y;
  }
}
export default Point;
