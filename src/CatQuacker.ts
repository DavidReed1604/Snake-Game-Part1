import display from './display';
import Quacker from './Quacker'

class catQuacker extends Quacker {
    constructor() {
        super();
    }
    public makeNoise(): void {
        display("The quacker goes PURRR");
    }
}

export default catQuacker