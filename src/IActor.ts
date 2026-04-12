interface IActor {
    update(): void;
    get position(): any; //Point
    get isActive(): boolean;
    get type(): string;
}
export default IActor;