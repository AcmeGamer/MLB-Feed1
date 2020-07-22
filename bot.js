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
  if (msg.content === 'ping') {
    msg.reply('pong');}
	 
  if (msg.content === 'Hi there'||'hi there') {
    msg.reply('How are you');}
	
  if (msg.content === 'I\'m fine'||'I am fine.') {
    msg.reply('Glad to hear ^^')
  
  });
/*
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.on('message', msg => {
  if (msg.content === 'Hi there'||'hi there') {
    msg.reply('How are you');
  }
});

client.on('message', msg => {
  if (msg.content === 'I\'m fine'||'I am fine.') {
    msg.reply('Glad to hear ^^');
  }
});

/*client.on('message', msg => {
  if (msg.content === 'boop' || 'Boop') {
    msg.reply('Boops back, ^^');
  }
});*/
	
	
client.login(process.env.BOT_TOKEN);
