const Discord = require ('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log('I am ready!');
});

client.on('message', message => {
	if (messgage.content === 'ping') {
		message.replu('pong');
	}
});

client.login(process.env.BOT_TOKEN);
