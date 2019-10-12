module.exports = async pf => {
	let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	let readyDate  = new Date();

	console.log(`${pf.user.username} is online @ ${readyDate.toLocaleDateString('en-US', options)}`);

	pf.user.setStatus('dnd');

	pf.setInterval(async () => {
		let statuses = ['$help', 'Phantom Forces'];
		let status = statuses[Math.floor(Math.random() * statuses.length)];
		pf.user.setActivity(status, {type: "PLAYING"});
	}, 8000);
};
