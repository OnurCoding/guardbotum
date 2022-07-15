const Discord = require('discord.js');

exports.run = async (client, message, args) => {
	if (!message.guild) return message.author.send('Bu Komutu Sadece Sunucularda Kulanabilirsiniz!');
    const ankacode = new Discord.MessageEmbed()
        .setColor(message.guild.me.displayColor)
    .setTitle(message.guild.name)
        .addField("💎 Boost Sayısı", message.guild.premiumSubscriptionCount.toString())
    message.channel.send(ankacode);

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['boostlar'],
    permLevel: 0
};

exports.help = {
    name: 'boost-say',
    description: 'Say',
 }