export default function listRoute(ws){
    ws.on('message', function incoming(message) {
        console.log('received from list: %s', message);
        ws.send(message + "you sent to list")
    });
}