import TileService from "./TileService";
import PlayerController from "./controller/PlayerController";

export default class PlayerService {
    
    constructor(){
        this.playerController = new PlayerController(this);
    }

    static getInstance(){
        if(!this.instance) this.instance = new PlayerService();
        return this.instance;
    }

    isValidPosition(position){
        const tileService = this.gameService.tileService;
        const tileIndex = tileService.getTileIndex(position);
        return tileService.isWalkable(tileIndex);
    }

    start(){
        this.playerController.start();
    }

    stop(){
        this.playerController.stop();
    }
}