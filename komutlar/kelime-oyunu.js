const Discord = require('discord.js');
const { stripIndents } = require('common-tags');
const { randomRange, verify } = require('../util/Util.js');
let codemarefi = new Set();

exports.run = async (client, message, args) => {
  
	let codemarefi = message.mentions.users.first()
	if (!codemarefi) return message.reply("Oynamak istediğin kişiyi etiketlemelisin!")
  
  if (codemarefi.bot) return message.reply('Botlar ile kelime oyunu oynayamazsın!');
  if (codemarefi.id === message.author.id) return message.reply('Kendin ile kelime oyunu oynayamazsın!');
		if ((message.channel.id)) return message.reply('Kanal başına sadece bir kelime oyunu meydana gelebilir.');
		try {
			if (!codemarefi.bot) {
        await message.channel.send(`${codemarefi}, kelime oyunu isteği geldi. İsteği kabul ediyor musun? (\`evet\` veya \`hayır\` olarak cevap veriniz.)`);
				const verification = await verify(message.channel, codemarefi);
				if (!verification) {
					this.fighting.delete(message.channel.id);
					return message.channel.send(`Düello kabul edilmedi...`);
				}
			}
      
   message.channel.send('Kelime, yükleniyor!').then(message => {
     codemarefi.add(message.channel.id)
      var kelimeler = ['codemarefi', 'kooperatif', 'spekülasyon'];
      var kelime = kelimeler[Math.floor(Math.random() * kelimeler.length)];
      message.edit(`Hey hemen \`${kelime}\` yazman lazım!`);
     
     const filter = res => {
			const value = res.content.toLowerCase();
			return res.author.id === message.author.id | codemarefi.id && (kelime.includes(value));
		};
     
     
     message.channel.awaitMessages(filter, {
          max: 1,
          time: 100000
        })
       .then((collected) => {
            const embed = new Discord.RichEmbed()
            .setDescription(`:tada: Tebrikler, Kazanannn: ${collected.first().author}`)
            .setColor("green")
            message.channel.send(embed)
            codemarefi.delete(message.channel.id)
          })
          .catch(function(){
            message.channel.send('Size verilen süre doldu');
            codemarefi.delete(message.channel.id)
          });
   })
		} catch (err) {
			codemarefi.delete(message.channel.id);
			console.log(err)
		}
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kelimeoyunu'],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: 'kelime-oyunu',
  description: 'İstediğiniz bir kişi ile kelime düellosu atarsınız!',
  usage: 'kelime-oyunu <@kullanıcı>'
};