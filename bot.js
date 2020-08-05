const Discord = require ('discord.js');
const client = new Discord.Client();
const { token, prefix } = require("./config.json");
var version = "1.0.1"

client.on('ready', () => { 
  console.log('This bot is online!'); 
  client.user.setActivity('memes', { 
    	type: 'WATCHING ' }).catch(console.error); 
});

//Welcome
client.on('guildMemberAdd', member => { 
const channel = member.guild.channels.find (chaneel => channel.name === "welcome"); if (!channel) return; 
channel.send('WeLcome to our sever, ${member} , please read the rules in the rules channel!') 
}); 

//Messages
client.on('message', msg => {
  if (msg.content === 'A') {
    msg.reply('Hi there! :D')
  }
});

client.on('message', message =>{
	let args = message.content.substring(prefix.length).split(" ");

	switch(args[0]){
		 case 'ping':
		message.reply.sendMessage("pong!")
		break;
	}
})
 
// Set the prefix
client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;
 
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix + "foo")) {
    message.channel.send("bar!");
  }
});

var version = "1.0.1"

client.on('message', message =>{

	let args = message.content.slice(prefix.length).split(" ");
	
	switch(args[0]){
		case 'ping':
			message.reply("pong!")
			break;
		
		case 'Author':
			message.reply("Acme Gamers")
			break;		
		
		case 'website':
				message.channel.sendMessage('www.glitchtale.fandom.com')
			break;
		
		case 'info':
			if (args[1] === 'version'){
				message.channel.sendMessage('Version: ' + version);
			}else{
				message.channel.sendMessage('Invalid Args')
			}
			break;
		
		case 'clear':
			if(!args[1]) return message.reply('Error, please define a second arg')
			message.channel.bulkDelete(args[1]);
			break;
		
		case 'embed': 
			const embed = new Discord.MessageEmbed()
			.setTitle('User')
			.addField('The man/woman behind the slaughter is :eyes:: ', message.author.username)
			.addField('Current Server', message.guild.name)
			.addField('Bot Version', version)
			.setColor(0xFF8629)
			message.channel.send(embed);
			break;
	}
})

//Kick Command


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
