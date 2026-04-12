import ICollisionHandler from "./ICollisionHandler";
import IActor from "./IActor";
import { StringifyOptions } from "querystring";

class ActorCollisionHandlers {
    private pairs: Map<string, ICollisionHandler>;
    constructor() {
        this.pairs = new Map<string, ICollisionHandler>;
    }
    private toKey(colliderType: string, collidedType: string): string {
        return colliderType + "," + collidedType;
    }
    public addCollisionAction(
        colliderType: string,
        collidedType: string,
        actionApplicator: ICollisionHandler
    ): void {
        this.pairs.set(this.toKey(colliderType, collidedType), actionApplicator);
    }
    public hasCollisionAction(
        colliderType: string,
        collidedType: string
    ): boolean {
        return this.pairs.has(this.toKey(colliderType, collidedType));
    }
    public applyCollisionAction(collider: IActor, collided: IActor): void {
        const key = this.toKey(collider.type, collided.type);
        if (this.pairs.has(key)) {
            const handler = this.pairs.get(key);
            handler!.applyAction(collider, collided);
        }
    }
}
export default ActorCollisionHandlers;