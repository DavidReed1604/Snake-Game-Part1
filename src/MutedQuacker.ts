import display from './display';
import Quacker from './Quacker'
class MutedQuacker extends Quacker {
    constructor() {
        super();
    }
    public makeNoise():void {
        display("The Quacker makes no noise");
    }
}

export default MutedQuacker