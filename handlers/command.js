const { readdirSync } = require('fs');

module.exports = ( pf ) => {
	const load = dirs => {
		const commands = readdirSync(`./commands/${dirs}/`).filter(d => d.endsWith('.js'))
		for (let file of commands) {
			const pull = require(`../commands/${dirs}/${file}`);
			pf.commands.set(pull.config.name, pull);
			if(pull.config.aliases) pull.config.aliases.forEach(a => pf.aliases.set(a, pull.config.name))
		};
	};
	['public'].forEach(x => load(x));
};