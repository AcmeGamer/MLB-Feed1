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
	
var TwitterPackage = require('twitter');
var request = require('request');

console.log("Hello World! I am a twitter bot!");

var Twitter = new TwitterPackage(secret);

//Twitter stream
var hashtag = '#brexit'; //put any hashtag to listen e.g. #brexit
console.log('Listening to:' + hashtag);

Twitter.stream('statuses/filter', {track: hashtag}, function(stream) {
stream.on('data', function(tweet) {
console.log('Tweet:@' + tweet.user.screen_name + 
'\t' + tweet.text);
console.log('------') 
});

stream.on('error', function(error) {
console.log(error);
});
});

client.login(process.env.BOT_TOKEN);
