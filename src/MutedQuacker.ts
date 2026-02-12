import display from './display';
import IQuacker from './IQuacker'
class MutedQuacker implements IQuacker {
    makeNoise():void {
        display("This quacker is quiet")
    }
}

export default MutedQuacker