const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`FreeCity Moderasyon Sayfası`)
.setDescription(`


:white_small_square: **=**  \`+kanal-koruma\` : **Kanal Koruma Aç/Kapat**
:white_small_square: **=**  \`+küfür-engel\`:  **Küfür Engel Aç/Kapat**
:white_small_square: **=**  \`+reklam-engel\` :  **Reklam Engel Aç/Kapat**
:white_small_square: **=**  \`+sohbet aç-kapat\` :  **Sohbeti Açıp Kapatırsınız**
:white_small_square: **=**  \`+ban\`: **Belirttiğiniz Kişiyi Sunucudan Banlarsınız**
:white_small_square: **=**  \`+unban\`:  **Belirttiğiniz Kişinin Banını Kaldırırsınız**
:white_small_square: **=**  \`+sil\`:  **Belirttiğiniz Sayıda Mesajı Siler**
:white_small_square: **=**  \`+lock\`:  **Sohbeti Kilitler**
:white_small_square: **=**  \`+unlock\`:  **Sohbetin Kilidini Açar**
:white_small_square: **=**  \`+nuke\`:  **Kanalı Siler ve Kopyasını Oluşturur**
:white_small_square: **=**  \`+mute\`:  **Seçilen Kişiyi Susturur**
:white_small_square: **=**  \`+unmute\`:  **Seçilen Kişinin Susturulmasını Kaldırır**
:white_small_square: **=**  \`+oylama\`:  **Mesaj üzerinde oylama yaparsınız**
:white_small_square: **=**  \`+sunucu-kur\`: **Sadece Sunucu Tac'ına sahip olan kullanır.**
:white_small_square: **=**  \`+banlist\`:  **Sunucudaki yasaklıları gösterir**

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
  name: "yardım-moderasyon",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım-moderasyon'
};