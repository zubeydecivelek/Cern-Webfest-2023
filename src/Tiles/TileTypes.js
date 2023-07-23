import Wall from "../images/wall.png";
import Floor from "../images/floor.png";
import FullRedPipe from "../images/floor-left-full-red-pipe.png";
import TopEndRedPipe from "../images/floor-left-topend-red-pipe.png";
import BottomEndRedPipe from "../images/floor-left-bottomend-red-pipe.png";
import FullGreenPipe from "../images/floor-top-full-green-pipe.png";
import LeftEndGreenPipe from "../images/floor-top-leftend-green-pipe.png";
import RightEndGreenPipe from "../images/floor-top-rightend-green-pipe.png";
import LeftWires from "../images/floor-left-wire.png";
import HorizontalWires from "../images/floor-horizontal-wire.png";
import WallTopRight from "../images/wall-top-right.png";
import WallRight from "../images/wall-right.png";
import WallBottomRight from "../images/wall-bottom-right.png";
import WallBottom from "../images/wall-bottom.png";
import WallBottomLeft from "../images/wall-bottom-left.png";
import WallLeft from "../images/wall-left.png";
import WallTopLeft from "../images/wall-top-left.png";
import WallTop from "../images/wall-top.png";


const TileTypes = [
    {id: 1, type: "Floor", walkable: true, image: Floor},
    {id: 2, type: "Floor Red Pipe", walkable: true, image: FullRedPipe},
    {id: 3, type: "Floor TopEnd Red Pipe", walkable: true, image: TopEndRedPipe},
    {id: 4, type: "Floor BottomEnd Red Pipe", walkable: true, image: BottomEndRedPipe},
    {id: 5, type: "Floor Green Pipe", walkable: true, image: FullGreenPipe},
    {id: 6, type: "Floor LeftEnd Green Pipe", walkable: true, image: LeftEndGreenPipe},
    {id: 7, type: "Floor RightEnd Green Pipe", walkable: true, image: RightEndGreenPipe},
    {id: 8, type: "Floor Left Wire", walkable: true, image: LeftWires},
    {id: 9, type: "Floor Top Wire", walkable: true, image: HorizontalWires},
    {id: 0, type: "Wall", walkable: false,  image: Wall},
    {id: 10, type: "Wall Top Right", walkable: false, image: WallTopRight},
    {id: 11, type: "Wall Right", walkable: false, image: WallRight},
    {id: 12, type: "Wall Bottom Right", walkable: false, image: WallBottomRight},
    {id: 13, type: "Wall Bottom", walkable: false, image: WallBottom},
    {id: 14, type: "Wall Bottom Left", walkable: false, image: WallBottomLeft},
    {id: 15, type: "Wall Left", walkable: false, image: WallLeft},
    {id: 16, type: "Wall Top Left", walkable: false, image: WallTopLeft},
    {id: 17, type: "Wall Top", walkable: false, image: WallTop},
]

export default TileTypes;
