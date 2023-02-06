import suspendLoop from "../utils/SuspendLoop.js";
import PairImageObject from "../models/PairImageObject.js";
import defaultExport, {imgs} from "../models/PairImageObject.js"

export default function pairImageRoute(ws){
    ws.on('message', function incoming(message) {
        console.log('received from path1: %s', message);
        var counter = 0
        var counterSecond = 1
        suspendLoop(() => {
            counter++;
            counterSecond += 2;
            let str = JSON.stringify(new PairImageObject(imgs[counter % imgs.length], imgs[counterSecond % imgs.length]))
            ws.send(str);
        });
    });
}