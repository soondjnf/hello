const Discord = require("discord.js");
const client = new Discord.Client();
const jimp = require('jimp');   
const fs = require("fs");
const dateFormat = require("dateformat");
const googl = require('goo.gl');  
const translate = require('google-translate-api');   
const google = require('google-it'); 

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Scrpit By ┃ SOON`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Bot By KOON' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`SERVER FRONT`)
client.user.setStatus("online")
});

var prefix = "!";

const adminprefix = "!";
const devs = ['391727913415999498','463857132060540958'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'vipsetgame')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else 
  if (message.content.startsWith(adminprefix + 'vipname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'vipavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}
});
client.on('message', msg =>{
    let message=msg;
    if(message.content.startsWith("!bc")){ // ذا الأمر عدله
        var args = message.content.split(' ').slice(1).join(' ');
    msg.guild.members.forEach(m=>{
        m.send(args.replace(/[user]/g,m)).catch();
    if(message.attachments.first()){
m.sendFile(message.attachments.first().url).catch();
    }
    })    ;
    }
});
client.login(process.env.BOT_TOKEN);

    
