const { readdirSync } = require('fs');
const { RichEmbed } = require('discord.js');

	let primary = [];
	let pAttachment = {};

	const load = dir => {
		const weaponsFile = readdirSync(`./weapons/${dir}/`).filter(d => d.endsWith('.js'))
		for (let file of weaponsFile) {
			const weapon = require(`../../weapons/${dir}/${file}`);
			switch (true) {
			case dir === 'primary':
				primary.push(weapon)
				break;
			case dir === 'primaryAttach':
				Object.assign(pAttachment, weapon)
				break;
			default:
				console.log('Error loading subfolders')
				break;
			}
		}
	};
['primary', 'primaryAttach'].forEach(uwu => load(uwu));

module.exports = {
	config: {
		name: 'random',
		aliases: ['randm', 'generate', 'loadout'],
		description: 'Random Weapon Loadout',
		usage: ' ',
		category: 'public'
	},
	run: async (pf, message, args) => {
		const randomPrimary = primary[Math.floor(Math.random() * primary.length)].name;

		const primaryAttachment = primary.filter(a => a.name === randomPrimary);

		const primaryOptic = primaryAttachment[0].attachment.optic.concat(pAttachment.optic);

		const randomPrimaryOptic = primaryOptic[Math.floor(Math.random() * primaryOptic.length)].toUpperCase();

		const primaryBarrel = primaryAttachment[0].attachment.barrel.concat(pAttachment.barrel);

		const primaryUnderbarrel = primaryAttachment[0].attachment.underbarrel.concat(pAttachment.underbarrel);

		const randomPrimaryUnderbarrel = primaryUnderbarrel[Math.floor(Math.random() * primaryUnderbarrel.length)].toUpperCase();

		const primaryOther = primaryAttachment[0].attachment.underbarrel.concat(pAttachment.other);

		const randomPrimaryOther = primaryOther[Math.floor(Math.random() * primaryOther.length)].toUpperCase();

		const weaponEmbed = new RichEmbed()
			.setColor('#3F8DCB')
			.setDescription(`*Redo the command if you don't have a certain attachment*`)
			.setAuthor('Random Loadout', `${message.author.displayAvatarURL}`)
			.addField('Primary:', `\`${randomPrimary.toUpperCase()}\``, true)

		if (primaryBarrel.includes('none')) {
			weaponEmbed.addField('Optic:', `\`${randomPrimaryOptic}\``)
			weaponEmbed.addField('Barrel:', '\`none\`')
			weaponEmbed.addField('Underbarrel:', `\`${randomPrimaryUnderbarrel}\``)
			weaponEmbed.addField('Other:', `\`${randomPrimaryOther}\``)
		} else {
			const randomPrimaryBarrel = primaryBarrel[Math.floor(Math.random() * primaryBarrel.length)].toUpperCase();
			weaponEmbed.addField('Optic:', `\`${randomPrimaryOptic}\``)
			weaponEmbed.addField('Barrel:', `\`${randomPrimaryBarrel}\``)
			weaponEmbed.addField('Underbarrel:', `\`${randomPrimaryUnderbarrel}\``)
			weaponEmbed.addField('Other:', `\`${randomPrimaryOther}\``)
		}
		return message.channel.send(weaponEmbed).catch(er => console.error(er));
	}
}
