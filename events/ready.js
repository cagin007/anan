
const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
//matador
var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Aktif, Komutlar yüklendi!`
  );
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: ${//
      client.user.username
    } ismi ile giriş yapıldı!`
  );
  client.user.setStatus("idle");
  var oyun = [
    "✨ Yardım İçin +help , +help2 , +help3 ✨",
    "⚠ Görüş ve Önerilerinizi Bekliyorum. ⚠",
    "☂ Botumuzu Sunucunuza Ekleyebilirsiniz. ☂",
    "⚔ made by Code : F ⚔",
    
  ];
  
//matador
  setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity(oyun[random], "");
  }, 2 * 9000);
};//matador
