const Discord = require('discord.js');
 
exports.run = (client, message, args) => {// can#0002
if(!message.member.hasPermission('MANAGE_CHANNELS')) return;

let channel = message.mentions.channels.first() || message.channel;
message.channel.send(`Channel ${channel} has been unlocked.`).then(m => m.delete({timeout: 7000}));

let everyone = message.guild.roles.cache.find(a => a.name === '@everyone');
channel.updateOverwrite(everyone, { 'SEND_MESSAGES': null }, 'Unlocked by '+message.author.tag);
channel.send(new Discord.MessageEmbed()
.setColor('GREEN')
.setTitle(channel.name+' has been unlocked.')
.setDescription(`Sohbet Açıldı!.`));

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};
 
exports.help = {
  name: 'unlock'
};