const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (client, message, args) => {
  const seksizaman = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const istatistikler = new Discord.MessageEmbed()
    .setColor("RED")
    .setTimestamp()
    .setFooter("© 2020 Code : F", client.user.avatarURL())
    .addField("<a:elite_dnd:786178421502902293> **Botun Sahibi**", "<@440055691122704394>")
    .addField("⏱️ **Gecikme süreleri**","\`Mesaj Gecikmesi: {ping1} ms \nBot Gecikmesi: {ping2} ms\`"
        .replace("{ping1}", new Date().getTime() - message.createdTimestamp)
        .replace("{ping2}", client.ws.ping),true)
    .addField("💾 **Bellek Kullanımı**",(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " `MB`" ,true)
    .addField("🛠️ **Çalışma Süresi**", "`" + seksizaman + "`" , true)
    .addField("👥 **Kullanıcılar**","`"  + client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + "`" , true)
    .addField("📁 **Sunucular**", "`" + client.guilds.cache.size.toLocaleString() + "`", true)
    .addField("📄 **Kanallar**", "`"  + client.channels.cache.size.toLocaleString() + "`" , true)
    .addField("🗄️ **CPU**",`\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``,true)
    .addField("🛰️ **Bit**", `\`${os.arch()}\``, true)
    .addField("🖥️ **İşletim Sistemi**", `\`\`${os.platform()}\`\``, true)
    .addField("📨 `Bot Davet\` "," [Davet Et](https://discordapp.com/oauth2/authorize?client_id=" + client.user.id + "&scope=bot&permissions=8)")
    .setImage("https://cdn.glitch.com/a3710c3e-ce88-4182-9aff-51c66b31fe65%2Fstandard%20(1).gif?v=1607714569129");
  return message.channel.send(istatistikler);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i","stat"],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Botun istatistiklerini gösterir",
  usage: "istatistik"
};
