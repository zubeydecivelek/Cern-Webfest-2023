import PlayerService from "./PlayerService";
import Tile from "./view/Tile";

export default class TileService {

    static tileSize = 50;

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
                row.push(<Tile size={TileService.tileSize} walkable={map[i][j]} x={TileService.tileSize * j} y={TileService.tileSize * i} />);
            }
            
            tileMap.push(row);
        }
        
        return tileMap;
    }

    getTileIndex(position){
        return {
            row: Math.floor(position.y / TileService.tileSize),
            col: Math.floor(position.x / TileService.tileSize)
        }
    }

    isWalkable(tileIndex){
        if(!this.levelConfiguration) return true;
        console.log("iswalkabe: " + this.levelConfiguration.map[tileIndex.row][tileIndex.col])
        return this.levelConfiguration.map[tileIndex.row][tileIndex.col]
    }
}
