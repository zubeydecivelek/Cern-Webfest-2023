import React from "react";
import TileService from "../Tiles/TileService";
import LeftRun from "../images/character-left.png";

const Player = params => {
    return <g id="player" transform={`translate(${params.startPos.x}, ${params.startPos.y})`}>
        <image 
            href={params.character} 
            width={TileService.tileSize/2} 
            height={TileService.tileSize/2} 
            style={{transform: `translate(${-TileService.tileSize/4}px, ${-TileService.tileSize/4}px)`}}/>
    </g>
}

export default Player;