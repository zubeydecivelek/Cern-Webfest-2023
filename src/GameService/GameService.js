import CameraService from "./CameraService";
import PlayerService from "../Player/PlayerService";
import TileService from "../Tiles/TileService";

export default class GameService {
    constructor(){
        this.playerService = PlayerService.getInstance();
        this.tileService = TileService.getInstance();
        this.cameraService = CameraService.getInstance();
        this.playerService.gameService = this;
        this.tileService.gameService = this;
        this.gameStarted = false;
    }

    static getInstance(){
        if(!this.instance) this.instance = new GameService();
        return this.instance;
    }

    start(levelConfiguration){
        this.levelConfiguration = levelConfiguration;
        this.playerService.setStartPosition(levelConfiguration);
        let tileMap = this.tileService.applyLevelConfiguration(levelConfiguration);
        this.gameStarted = true;

        return tileMap;
    }

    freePlayer(){
        this.playerService.start();
    }

    stopPlayer(){
        this.playerService.stop();
        this.gameStarted = false;
    }
}