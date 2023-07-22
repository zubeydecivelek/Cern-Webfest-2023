import CameraService from "./CameraService";
import PlayerService from "../Player/PlayerService";
import TileService from "../Tiles/TileService";
import TileEventService from "../Tiles/TileEventService";

export default class GameService {
    constructor(){
        this.playerService = PlayerService.getInstance();
        this.tileService = TileService.getInstance();
        this.cameraService = CameraService.getInstance();
        this.tileEventService = TileEventService.getInstance();
        this.playerService.gameService = this;
        this.tileService.gameService = this;
        this.cameraService.gameService = this;
        this.tileEventService.gameService = this;
        
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

    freePlayer(setShowTestPopUp, setShowDialogPopUp){
        this.playerService.start(setShowTestPopUp, setShowDialogPopUp);
    }

    stopPlayer(){
        this.playerService.stop();
        this.gameStarted = false;
    }
}