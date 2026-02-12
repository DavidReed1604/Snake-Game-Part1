import display from './display';
import IQuacker from './IQuacker'

class superQuacker implements IQuacker {
    makeNoise():void {
        display("The engine goes QUUUAACCKKK");
    }
}
export default superQuacker