import display from './display';
import Quacker from './Quacker'

class superQuacker extends Quacker {
    constructor() {
        super();
    }
    public makeNoise(): void {
        display("The quacker goes COOOL SOUUUNDS");
    }
}
export default superQuacker