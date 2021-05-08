require('dotenv').config();

console.log('ayy, what up');

const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOTTOKEN);

client.on('ready', readyDiscord);

function readyDiscord(){
    console.log("sup bitches I've come to fuck shit up");
}

client.on('message', async message => {
    if (message.content === '&join') {
      if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
      } else {
        message.reply('You need to join a voice channel first!');
      }
    }
  });

/*
client.on('message', gotMessage);

function gotMessage(msg) {
    console.log(msg.author.username);
    if (msg.channel.id === '839562517072445481' || 
    msg.channel.id === '747660053531590706' || 
    msg.channel.id === '688450856831811591') {
        if(msg.author.username === 'tobyteatime' || 
        msg.author.username === 'Zefronk' || 
        msg.author.username === 'potemkin' || 
        msg.author.username === 'SunSneezer') {
        if (msg.author.username === 'SunSneezer') {
            msg.channel.send('Sherbert, you got Diluc yet?');
        } else {
            msg.channel.send("Fuck You");
            
            }
        }
    }
}
*/