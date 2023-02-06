import express from "express"
import WebSocket, { WebSocketServer } from 'ws';
import startWebsocketConnection from "./src/plugin/WebSocket.js";
import VideoStream from "node-rtsp-stream/videoStream.js";

const PORT = 3000

const server = express().listen(PORT, () => {
	console.log(`Listening on ${PORT}`)
})

const wss = new WebSocketServer({ server })
startWebsocketConnection(wss)

const stream = new VideoStream({
    name: 'name',
    streamUrl: 'rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mp4',//'rtsp://127.0.0.1:5554/stream1',
    wsPort: 9999,
    ffmpegOptions: { // options ffmpeg flags
        '-stats': '', // an option with no neccessary value uses a blank string
        '-r': 30, // options with required values specify the value after the key
        '-codec:a': 'mp2',
        '-ar': 44100,
        '-ac': 1,
        '-b:a':'128k'
    }
})
