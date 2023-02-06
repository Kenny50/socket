export default async function suspendLoop(fun) {
	while (true) {
		await sleep(1000).then((_) => {
			fun()
		});
	}
}

async function sleep(ms = 0) {
	return new Promise(r => setTimeout(r, ms));
}