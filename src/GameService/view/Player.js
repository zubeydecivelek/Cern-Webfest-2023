import React from "react";
import TileService from "../TileService";

const Player = params => {
    return <g id="player" transform={`translate(${TileService.tileSize * (params.startPos[0] + 0.5)}, ${TileService.tileSize * (params.startPos[1] + 0.5)})`}>
        <circle background="red" r="20"/>
    </g>
}

export default Player;