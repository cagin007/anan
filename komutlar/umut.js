const Discord = require("discord.js");

exports.run = function(client, message, args) {

const matador = message.mentions.users.first();

if (!matador)

return message.reply("**<a:elite_dnd:786178421502902293> Umutun Emojiyi Atacağın Kişiyi Etiketle**");

const Embedmatador = new Discord.MessageEmbed()
   .setColor("RED")
    .setDescription(
      `<a:elite_dnd:786178421502902293>  ${matador} ` + `** ${message.author.username}** Size Emoji Attı`
    )
    .setImage(
      "https://cdn.glitch.com/a3710c3e-ce88-4182-9aff-51c66b31fe65%2Fumut.png?v=1607770935474"
    ) 
    .setFooter(client.user.username + " Sundu", client.user.avatarURL)
    .setTimestamp();

return message.channel.send(Embedmatador);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["umut"],
  permLevel: 0
};

exports.help = {
  name: "umut",
  description: "matador",
  usage: "umut <etiket>"
};
