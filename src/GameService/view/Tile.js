import "./Tile.css"

const Tile = params => {
    return <g className="tile">
        <rect width={params.size} height={params.size} className={params.walkable ? "floor" : "wall"}/>
    </g>
}

export default Tile;