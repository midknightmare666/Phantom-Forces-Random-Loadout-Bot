const { prefix } = require('../../botconfig.json');

module.exports = async (pf, message) => {

	try {
		if(message.author.bot) return;
		const args = message.content.slice(prefix.length).trim().split(/ +/g);
		const cmd = args.shift().toLowerCase();

		if(!message.content.startsWith(prefix)) return;

		const commandfile = pf.commands.get(cmd) || pf.commands.get(pf.aliases.get(cmd));

		commandfile.run(pf, message, args);

	} catch (error) {
		return message.channel.send('Invalid command').then(m => m.delete(8000)).catch(e => console.error(e))
	}
};
