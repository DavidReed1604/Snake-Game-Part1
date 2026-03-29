import Snake from "./Snake";
import IWorldView from "./IWorldView";

/**
 * Represents the game world that contains the snake
 * and manages updates to the world state.
 */

class WorldModel {
  private allSnakes: Snake[];
  private allViews: IWorldView[];

  constructor() {
    // Initialize empty arrays (no snakes or views at start)
    this.allSnakes = [];
    this.allViews = [];
  }
  // Add a snake to the world
  public addSnake(s: Snake): void {
    this.allSnakes.push(s);
  }
  // Add a view to the world
  public addView(v: IWorldView): void {
    this.allViews.push(v);
  }
  // Getter for all snakes
  public getAllSnakes(): Snake[] {
    return this.allSnakes;
  }
  public update(): void {
    //Step 1: move every snake forward
    // Each snake updates its own position
    this.allSnakes.forEach(s => s.move());
    //Step 2: Detect collisions
    //We do not remove snakes immediately
    //Instead, we collect them first
    const collided: Snake[] = [];
    //Compare every pair of snakes
    for (let i = 0; i < this.allSnakes.length; i++) {
      for (let j = 0; j < this.allSnakes.length; j++) {
        // Skip comparing a snake with itself here
        if (i !== j) {
          const a = this.allSnakes[i];
          const b = this.allSnakes[j];
          //If snake A's head hits any part of snake B
          if (a.didCollide(b)) {
            //Only add once (avoid duplicates)
            if (!collided.includes(a)) {
              collided.push(a);
            }
          }
        }
      }
    }
    //Step 3: Remove collided snakes
    //We filter out any snake that appears in collided[]
    this.allSnakes = this.allSnakes.filter(
      s => !collided.includes(s)
    );
    //Step 4: Update all views
    //Each view redraws the world
    this.allViews.forEach(v => v.display(this));
  }
}
export default WorldModel;
