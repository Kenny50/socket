export default function singleDataRoute(ws) {
    ws.on('message', function incoming(message) {
        console.log('received from single: %s', message);
        ws.send(message + "you sent to single")
    });
}