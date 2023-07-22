
export default class TileEventService {

    eventHistory = [];

    static getInstance(){
        if(!this.instance) this.instance = new TileEventService();
        return this.instance;
    }

    getEvent(tileIndex){
        const event = this.eventMatrix[tileIndex.row][tileIndex.col];
        if(this.eventHistory.find(e => e.id === event.id)) return null;
        else {
            this.eventHistory.push(event.id);
            return event;
        }
    }
}