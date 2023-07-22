import PlayerService from "./PlayerService";

export default class TileService {

    tileSize = 50;

    static getInstance(){
        if(!this.instance) this.instance = new TileService();
        return this.instance;
    }

    applyLevelConfiguration(levelConfiguration){
        this.levelConfiguration = levelConfiguration;
    }

    getTileIndex(position){
        return {
            row: Math.floor(position.y / this.tileSize),
            col: Math.floor(position.x / this.tileSize)
        }
    }

    isWalkable(tileIndex){
        if(!this.levelConfiguration) return true;
        return this.levelConfiguration.map[tileIndex.row][tileIndex.col]
    }
}
