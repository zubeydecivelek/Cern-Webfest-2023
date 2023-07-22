import TileService from "../TileService";
import "./Tile.css"
import Walkable from "../../images/walk.png"
import NonWalkable from "../../images/ground.png"
import TileTypes from "../components/TileTypes"


const Tile = params => {
    const selectedTileType = TileTypes.find(tileType => tileType.id === params.type);

    console.log(params)

    const imageUrl = selectedTileType ? selectedTileType.image : (params.walkable ? Walkable : NonWalkable);

    return <g className="tile" transform={`translate(${params.x}, ${params.y})`}>
        <image 
            href={params.walkable ? Walkable : NonWalkable} 
            width={params.size} 
            height={params.size} 
            className={params.walkable ? "floor" : "wall"}
            style={{transform: "scale(1.01)"}}/>
    </g>
}

export default Tile;