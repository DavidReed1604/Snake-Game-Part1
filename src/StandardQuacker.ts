import display from './display';
import Quacker from './Quacker'

class standardQuacker extends Quacker {
    constructor() {
        super();
    }
    public makeNoise(): void {
        display("The quacker goes Quackkk");
    }
}

export default standardQuacker