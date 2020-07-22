const Discord = require ('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log('I am ready!');
});

client.on('message', msg => {
  if (msg.content === 'Hoi') {
    msg.reply('Hi there! :D');
  }
});

client.login(process.env.BOT_TOKEN);
