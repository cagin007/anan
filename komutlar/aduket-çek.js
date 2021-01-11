const Discord = require("discord.js");

exports.run = function(client, message, args) {

const matador = message.mentions.users.first();

if (!matador)

return message.reply("**<a:elite_dnd:786178421502902293> Aduket Çekeceğin Kişiyi Etiketlemelisin**");

const Embedmatador = new Discord.MessageEmbed()
   .setColor("RED")
    .setDescription(
      `<a:elite_tac_1:777836252325478421> ${matador} ` + `** ${message.author.username}** Size Aduket Çekti`
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/747769679984066582/748464442249052251/street-fighter-60854-18102018130021.gif"
    ) 
    .setFooter(client.user.username + " Sundu", client.user.avatarURL)
    .setTimestamp();

return message.channel.send(Embedmatador);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["aduket-çek"],
  permLevel: 0
};

exports.help = {
  name: "aduketçek",
  description: "matador",
  usage: "aduket-çek <etiket>"
};
