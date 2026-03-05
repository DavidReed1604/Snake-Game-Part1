import WorldModel from './WorldModel';
import Player from './Player';
/**
 * Controls the overall game loop and players.
 */
class GameController {
    private world: WorldModel;
    private player1: Player | null = null;
    private player2: Player | null = null;
    constructor(world: WorldModel) {
        this.world = world;
    }
    public setPlayer1(player: Player): void {
        this.player1 = player;
    }
    public setPlayer2(player: Player): void {
        this.player2 = player;
    }
    /**
     * Runs the game loop.
     */
    public run(): void {
        let lastTime = 0;
        const updateFrame = (time: number) => {
            if (this.player1) {
                this.player1.makeTurn();
            }
            if (this.player2) {
                this.player2.makeTurn();
            }
            const elapsed = time - lastTime;
            if(elapsed > 250) {
                this.world.update(1);
                lastTime += 250;
            }
            requestAnimationFrame(updateFrame);
        };
        requestAnimationFrame(updateFrame);
    }
}

export default GameController;