import TileService from "./TileService";

export default class CameraService {

    static getInstance(){
        if(!this.instance) this.instance = new CameraService();
        return this.instance;
    }

    getSVG(){
        if(!this.svg) this.svg = document.getElementsByClassName("game-panel")[0];
        return this.svg;
    }

    moveLocation(position){
        const sideLength = 3 * TileService.tileSize;
        const viewBox = [
            position.x - sideLength / 2,
            position.y - sideLength / 2,
            sideLength,
            sideLength
        ];
        const svg = this.getSVG();
        if(svg) svg.setAttribute("viewBox", viewBox.join(" "))
    }
}