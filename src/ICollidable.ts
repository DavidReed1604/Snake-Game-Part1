import IActor from "./IActor";

interface ICollidable extends IActor {
    didCollide(actor: IActor): boolean;
}
export default ICollidable;