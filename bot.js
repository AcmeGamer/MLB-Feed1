const Discord = require ('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
	console.log('I am ready!');
});

client.on('message', msg => {
  if (msg.content === 'Hoi') {
    msg.reply('Hi there! :D')
  }
});
/*
// Set the prefix
const prefix = ">";
client.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;
 
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix + "Hoi")) {
    message.channel.send("Hello :D");
  }
});
*/
client.login(process.env.BOT_TOKEN);
