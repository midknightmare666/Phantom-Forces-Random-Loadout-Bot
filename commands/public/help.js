const { prefix } = require('../../botconfig.json');
const { RichEmbed } = require('discord.js');

module.exports = {
	config: {
		name: 'help',
		aliases: ['h', 'holp'],
		description: 'Bot Commands',
		usage: '<commandName>',
		category: 'public'
	},
	run: async (pf, message, args) => {

		const embed = new RichEmbed()
			.setColor('#3F8DCB')
			.setAuthor(`Command Help`, message.guild.iconURL)

		if (!args[0]) {

			embed.setDescription(`Bot prefix: \`${prefix}\``)
			const directory = pf.commands.filter(cmd => cmd.config.category === 'public')
			embed.addField(`Commands:`, directory.map(c => `\`${c.config.name}\``).join(' '))

		} else {

			let command = pf.commands.get(pf.aliases.get(args[0].toLowerCase()) || args[0].toLowerCase())
			if(!command) return message.channel.send(embed.setTitle('Invalid Command.').setDescription(`\`${prefix}help\` for the list of the commands.`))
			command = command.config

			embed.setTitle(`Bot prefix: \`${prefix}\``)
			embed.setDescription(`${command.description || 'No description provided'}`)
			embed.addField('Command', `${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)}`)
			embed.addField('Usage', `${command.usage ? `\`${prefix}${command.name} ${command.usage}\`` : 'N/A'}`)
			embed.addField('Aliases', `${command.aliases.length > 0 ? command.aliases.join(' • ') : 'N/A'}`)
			embed.setFooter(`<required> (optional)`, message.author.displayAvatarURL)
		};
		return message.channel.send(embed).catch(er => console.error(er));
	}
}
