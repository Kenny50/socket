import suspendLoop from "../utils/SuspendLoop.js";
import InterectEvent, { Action } from "../models/InterectEvent.js";

export default function eventRoute(ws){
    ws.on('message', function incoming(message) {
        let event = JSON.parse(message)
        switch(event.action) {
            case Action.GoToStream:
                ws.send(JSON.stringify(event));
            break;
            case Action.BackToPreviousPage:
                ws.send(JSON.stringify(event));
            break;
            case Action.Play:
            break;
            case Action.Pause:
            break;
            case Action.Refresh:
                ws.send(JSON.stringify(event));
            break;
        }
        console.log('received from event: %s', event);
    });
}
