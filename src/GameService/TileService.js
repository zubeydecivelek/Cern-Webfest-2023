import PlayerService from "./PlayerService";
import Tile from "./view/Tile";

export default class TileService {

    tileSize = 50;

    static getInstance(){
        if(!this.instance) this.instance = new TileService();
        return this.instance;
    }

    applyLevelConfiguration(levelConfiguration){
        this.levelConfiguration = levelConfiguration;
        return this.getTileMap(this.levelConfiguration.map);
    }

    getTileMap(map){
        let tileMap = [];

        for(let i=0; i<map.length; i++){
            let row = [];
            for(let j=0; j<map.length; j++){
                row.push(<Tile size={this.tileSize} walkable={map[i][j]} x={this.tileSize * j} y={this.tileSize * i} />);
            }
        }
        
        return tileMap;
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
