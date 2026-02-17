import Q from "q";
import display from "./display";
import Quacker from "./Quacker";
// import IQuacker from "./IQuacker";

// place your code on line 5 above the export statement below
class Duck {
    private totalQuacks: number;
    private color: string;
    private qua:Quacker;

    constructor(duckColor:string, Q: Quacker) {
        this.totalQuacks = 0;
        this.color = duckColor;
        this.qua = Q;
    }
    public Quack(Quacks:number): void {
        display("The", this.color, "duck quacks", Quacks, "times");
       this.qua.makeNoise();
       this.totalQuacks = this.totalQuacks + Quacks;
    }
    get Quacks():number {
        return this.totalQuacks;
    }
    set Quacker(q:Quacker) {
       this.qua = q;
    }
}


export default Duck;
