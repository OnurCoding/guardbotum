const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`FreeCity Eğlence Sayfası`)
.setDescription(`


:white_small_square: **=**  \`+istatistik\`:  **Botun İstatistiklerini Atar**
:white_small_square: **=**  \`+ping\`:  **Pinginizi Ölçüp Atar**
:white_small_square: **=**  \`+avatar\`:  **Avatarınızı Atar**
:white_small_square: **=**  \`+sor\`:  **Bota Soru Sorarsınız**
:white_small_square: **=**  \`+kaçcm\`:  **Malafatınızın Boyunu Söyler**
:white_small_square: **=**  \`+düello\`:  **Seçtiğiniz Kişiyle Düello Yaparsınız**
:white_small_square: **=**  \`+emojiler\`:  **Sunucudaki emojileri gösterir**
:white_small_square: **=**  \`+boostsay\`:  **Sunucudaki Toplam Boost Sayısını Gösterir**
:white_small_square: **=**  \`+sunucu-sayısı\`:**Botun kaç tane sunucuda olduğunu gösterir**

`)
.setImage("https://cdn.discordapp.com/attachments/740871896614043669/748878433840398367/Baslksz-1.png")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['help'], 
  permLevel: 0
};

exports.help = {
  name: "yardım-eğlence",
  description: 'yardım eğlence sayfası.',
  usage: 'yardım-eğlence'
};