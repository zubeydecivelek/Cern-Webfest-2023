import TileService from "../TileService";
import "./Tile.css"
import Walkable from "../../images/walk.png"
import NonWalkable from "../../images/ground.png"


const Tile = (params) => {
    console.log(params)
    return <g className="tile" transform={`translate(${params.x}, ${params.y})`}>
        <image href={params.walkable ? Walkable : NonWalkable} width={params.size} height={params.size} className={params.walkable ? "floor" : "wall"}/>
    </g>
}

export default Tile;