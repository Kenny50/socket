export default function InterectEvent(action, videoSec = 0) {
	this.action = action;
	this.videoSec = videoSec;
}

export const Action = {
	GoToStream: 0,
	BackToPreviousPage: 1,
	Play: 2,
	Pause: 3,
    Refresh:5
}
