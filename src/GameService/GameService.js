import PlayerService from "./PlayerService";
import TileService from "./TileService";

export default class GameService {
    constructor(){
        this.playerService = PlayerService.getInstance();
        this.tileService = TileService.getInstance();
        this.playerService.gameService = this;
        this.tileService.gameService = this;
    }

    static getInstance(){
        if(!this.instance) this.instance = new GameService();
        return this.instance;
    }

    start(){
        this.playerService.start();
    }

    stop(){
        this.playerService.stop();
    }
}