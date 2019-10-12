const config = require('./botconfig');

const { Client, Collection } = require('discord.js');
const pf = new Client;

['commands', 'aliases'].forEach(commands => pf[commands] = new Collection);
['command', 'events'].forEach(handle => require(`./handlers/${handle}`)(pf));

pf.login(config.token);
