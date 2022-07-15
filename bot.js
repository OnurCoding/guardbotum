const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {
  console.log(
    `Az Önce Bot Ping yedi, Sorun önemli değil merak etme. Hatayı düzelttik.`
  );
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const Discord = require("discord.js");
const db = require('quick.db')
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const fs = require("fs");
const moment = require("moment");
moment.locale("tr")
const chalk = require("chalk");
require("./util/eventLoader")(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.member.hasPermission("MANAGE_MESSAGES")) permlvl = 5;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(process.env.token);

//--------------------------------KOMUTLAR-------------------------------\\

/////////
client.on("message", async msg => {
  
  
  let a = await db.fetch(`kufur_${msg.guild.id}`)
    if (a == 'acik') {
      const küfür = [
        "yarak","mk", "amk", "aq", "orospu", "oruspu", "oç", "sikerim", "yarrak", "piç", "amq", "sik", "amcık",  "sex", "seks", "amına", "orospu çocuğu", "sg", "siktir git","ananın amına yarak","ananı",
           "anneni","amcık","göt","porno","yarrağımın başı", "sikerim", "çük",  "Aq",  "ananı", "ananı sikeyim", "orospu evladı", "amına koyim",]
            if (küfür.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("MANAGE_GUILD")) {
                  msg.delete();
                          
                    return msg.reply(`🚫**Küfür Tespit Edildi**🚫`).then(msg => msg.delete(10000));
            }              
                } catch(err) {
                  console.log(err);
                }
              }
          }
          if (!a) return;
          })

///reklamengel

client.on("message", async message => {
  
  const lus = await db.fetch(`reklamengel_${message.guild.id}`)
  if (lus) {
    const reklamengel = ["discord.app", "discord.gg", ".party", ".com", ".az", ".net", ".io", ".gg", ".me", "https", "http", ".com.tr", ".org", ".tr", ".gl", "glicht.me/", ".rf.gd", ".biz", "www.", "www"];
    if (reklamengel.some(word => message.content.toLowerCase().includes(word))) {
      try {
        if (!message.member.permissions.has('KICK_MEMBERS')) {
          message.delete();
          
          return message.reply('Hey Dur! Bu Sunucuda Reklamı Engelliyorum').then(message => message.delete(3000));
          
        }
      } catch(err) {
        console.log(err);
    }
  }
}
if (!lus) return;
});
client.on("messageUpdate", async message => {
  
  const lus = await db.fetch(`reklamengel_${message.guild.id}`)
  if (lus) {
    const reklamengel = ["discord.app", "discord.gg", ".party", ".com", ".az", ".net", ".io", ".gg", ".me", "https", "http", ".com.tr", ".org", ".tr", ".gl", "glicht.me/", ".rf.gd", ".biz", "www.", "www"];
    if (reklamengel.some(word => message.content.toLowerCase().includes(word))) {
      try {
        if (!message.member.permissions.has('KICK_MEMBERS')) {
          message.delete();
          
          return message.reply('Hey Dur! Bu Sunucuda Reklamı Engelliyorum').then(message => message.delete(3000));
          
        }
      } catch(err) {
        console.log(err);
    }
  }
}
if (!lus) return;
});



/////Rol Koruma
client.on("roleDelete", async role => {
         const entry = await role.guild.fetchAuditLogs({ type: "ROLE_DELETE" }).then(audit => audit.entries.first());
    if (entry.executor.id == client.user.id) return;
  role.guild.roles.create({ data: {
          name: role.name,
          color: role.color,
          hoist: role.hoist,
          permissions: role.permissions,
          mentionable: role.mentionable,
          position: role.position
}, reason: 'Silinen Rol Açıldı.'})
})
client.on("roleCreate", async role => {
       const entry = await role.guild.fetchAuditLogs({ type: "ROLE_CREATE" }).then(audit => audit.entries.first());
    if (entry.executor.id == client.user.id) return;
  role.delete()
}) 
//KanalKoruma

client.on("channelDelete", async function(channel) {
    let rol = await db.fetch(`kanalk_${channel.guild.id}`);
  
  if (rol) {
const guild = channel.guild.cache;
let channelp = channel.parentID;

  channel.clone().then(z => {
    let kanal = z.guild.channels.find(c => c.name === z.name);
    kanal.setParent(
      kanal.guild.channels.find(channel => channel.id === channelp)
      
    );
  });
  }
})


client.on("guildMemberAdd", message => {
client.guilds.get("992471369818308659").setName(`FreeCity { ${message.guild.memberCount} }`);
});

client.on("guildMemberRemove", message => {  
client.guilds.get("992471369818308659").setName(`FreeCity { ${message.guild.memberCount} }`);
});


client.on("message", async msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm Selam,Hoşgeldin :)');
  }
});



client.on('roleDelete', async role => {
const data = await require('quick.db').fetch(`carl-mute-role.${role.guild.id}`);
if(data && data === role.id) require('quick.db').delete(`carl-mute-role.${role.guild.id}`); 
});


client.on('ready', () => {
  client.channels.cache.get('997165414687723610').join();
})



client.on("message", async msg => {
  
   var dcs = db.fetch(`dcsengel_${msg.guild.id}`);
    if (dcs== "acik") {
      const dcskelime = ["here", "@everyone"];
      if (dcskelime.some(dcss => msg.content.includes(dcss))) {
  if(!msg.member.hasPermission("ADMINISTRATOR")){
        msg.reply("Bildirim Atmayı Kes!")
        msg.delete()
      }}}
})