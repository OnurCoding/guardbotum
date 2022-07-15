//---Events/Ready.js atılacaktır. 
//###CodeMareFi tarafından hazırlanmıştır - - - Ekleyen //###MareFi

const Moment = require('moment')
const Discord = require('discord.js')
let prefix = '+'
module.exports = client => {
  
  const aktiviteListesi = [
    `🚀${prefix}Yardım`,
    '⭐Yenilenen Tasarım',
    'FreeCity',
  ]

  client.user.setStatus('idle')
 
  
  setInterval(() => {
    const Aktivite = Math.floor(Math.random() * (aktiviteListesi.length - 1))
    client.user.setActivity(aktiviteListesi[Aktivite])
  }, 7000)
}


