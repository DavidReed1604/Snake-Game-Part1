import WorldModel from './WorldModel';

interface IWorldView {
    display(world: WorldModel):void;
}
export default IWorldView;