const Discord = require("discord.js");

exports.run = function(client, message, args) {

const matador = message.mentions.users.first();

if (!matador)

return message.reply("**<a:elite_dnd:786178421502902293> NAH Çekeceğin Kişiyi Etiketlemelisin**");

const Embedmatador = new Discord.MessageEmbed()
   .setColor("RED")
    .setDescription(
      `<a:elite_tac_1:777836252325478421> ${matador} ` + `** ${message.author.username}** Size NAH Çekti`
    )
    .setImage(
      "https://cdn.glitch.com/a3710c3e-ce88-4182-9aff-51c66b31fe65%2Fdc.gif?v=1607770070840"
    ) 
    .setFooter(client.user.username + " Sundu", client.user.avatarURL)
    .setTimestamp();

return message.channel.send(Embedmatador);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["nahçek","nahcek"],
  permLevel: 0
};

exports.help = {
  name: "nahcek",
  description: "Code : F",
  usage: "nahçek <etiket>"
};
