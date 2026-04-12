import IActor from "./IActor";

interface ICollisionHandler {
    applyAction(a: IActor, b: IActor): void;
}
export default ICollisionHandler;