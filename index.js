//Imports
const Discord = require('discord.js');

//Config
const { prefix, token } = require('./config.json');

//Misc
const client = new Discord.Client();

/* Actual Bot Code */


client.once('ready', () => {
	console.log(`Logged in as ${client.user.username}`);
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

    switch(command)
    {

    }

});

client.login(token);