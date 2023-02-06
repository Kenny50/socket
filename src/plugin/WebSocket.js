import pairImageRoute from "../routes/PairImageRoute.js";
import eventRoute from "../routes/EventRoute.js";
import listRoute from "../routes/ListRoute.js";
import singleDataRoute from "../routes/singleDataRoute.js";

export default function startWebsocketConnection(wss){
    wss.on('connection', (ws, req) => {
        console.log('Client connected')
    
        const path = req.url;
    
        switch (path) {
            case '/path1':
                pairImageRoute(ws)
                break;
            case '/path2':
                singleDataRoute(ws)
                break;
            case '/event':
                eventRoute(ws)
                break;
            case '/list':
                listRoute(ws)
                break;
            default:
                // stream event
                break;
        }
    
        ws.on('close', () => {
            console.log('Close connected')
        })
    })
    
}