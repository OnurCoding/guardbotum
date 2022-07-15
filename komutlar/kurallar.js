const Discord = require("discord.js");


exports.run = (client, message, args) => {
  const kurallar = new Discord.MessageEmbed()
    .setDescription(`**SUNUCU KURALLARI**


-Küfür-argo kelime kullanımı yasaktır. 
-Rahatsız edici sözler ve toxiclik yasaktır. 
-Kişisel mevzularınızı sunucuda bahsetmek yasaktır.
-Yetki istemek yasaktır. 
-Ses odasındaki oyuncuları rahatsız etmek yasaktır. 
-Gereksiz yere sunucudaki yetkili kişileri ve kurucuyu etiketlemek yasaktır. 
-DM'den insanları rahatsız etmek yasaktır. 
-Spam ve Flood Yasaktır.
-Sunucuya giren herkes bu kuralları okumuş sayılmaktadır. 



- ** Discord Topluluk kurallarına uymadığınız sürece sunucumuzdan kalıcı olarak banlanacaksınız.**
• Discord Topluluk kuralları hakkında daha fazla bilgi almak istiyorsanız, https://discord.com/terms & https://discord.com/guidelines sitesini bir gözden geçirin.


• Klasik Discord sunucu kurallarına uymanız yeterli olacaktır.`)
    .setColor("RANDOM")
    .setFooter(`${message.guild.name}`)
  message.channel.send(kurallar);
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name:"rules" // BOT KURALLARI ATTIKTAN SONRA BURAYI BU YAP ÖRNEK : DPĞWEFEWĞFK34*34T4*G04*G BU YAP YOKSA HERKEZ  KULLANIR.
}