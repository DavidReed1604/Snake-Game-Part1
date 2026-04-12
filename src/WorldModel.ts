import Snake from "./Snake";
import IWorldView from "./IWorldView";
import IActor from "./IActor";
import ActorCollisionHandlers from "./ActorCollisionHandlers";
import ArrayIterator from "./ArrayIterator";

/**
 * Represents the game world that contains the snake
 * and manages updates to the world state.
 */

class WorldModel {
  private actors: IActor[];
  private allViews: IWorldView[];
  private aca: ActorCollisionHandlers; 

  constructor(aca: ActorCollisionHandlers) {
    // Initialize empty arrays (no snakes or views at start)
    this.actors = [];
    this.allViews = [];
    this.aca = aca;
  }
  // Add a snake to the world
  public addActor(a: IActor): void {
    this.actors.push();
  }
  
  // Add a view to the world
  public addView(v: IWorldView): void {
    this.allViews.push(v);
  }
  // Getter for all snakes
  public getActors(): ArrayIterator<IActor> {
    return new ArrayIterator(this.actors);
  }
  public update(): void {
    //update actors
    this.actors.forEach(a => a.update());
    //collisions
    for (let i = 0; i < this.actors.length; i++) {
      for (let j = 0; j < this.actors.length; j++) {
        // Skip comparing a snake with itself here
        if (i !== j) {
          const a = this.actors[i];
          const b = this.actors[j];
          //If snake A's head hits any part of snake B
          if ("didCollide" in a && (a as any).didCollide(b)) {
            //Only add once (avoid duplicates)
            if (this.aca.hasCollisionAction(a.type, b.type)) {
              this.aca.applyCollisionAction;
            }
          }
        }
      }
    }
    //Step 3: Remove collided snakes
    //We filter out any snake that appears in collided[]
    this.actors = this.actors.filter(a => a.isActive);
    //Step 4: Update all views
    //Each view redraws the world
    this.allViews.forEach(v => v.display(this));
  }
}
export default WorldModel;
