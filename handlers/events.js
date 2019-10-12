const { readdirSync } = require('fs');

module.exports = ( pf ) => {
	const load = dirs => {
		const events = readdirSync(`./events/${dirs}/`).filter(d => d.endsWith('.js'))
		for (let file of events) {
			const evt = require(`../events/${dirs}/${file}`);
			let eName = file.split('.')[0];
			pf.on(eName, evt.bind(null, pf));
		};
	};
	['client', 'guild'].forEach(x => load(x));
};