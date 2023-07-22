import "./Tile.css"

const Tile = (params) => {
    console.log(params)
    return <g className="tile" transform={`translate(${params.x}, ${params.y})`}>
        <rect width={params.size} height={params.size} className={params.walkable ? "floor" : "wall"}/>
    </g>
}

export default Tile;