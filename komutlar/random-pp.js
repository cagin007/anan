const Discord = require("discord.js");
exports.run = function(client, message, args) {

  const dcssanıl = client.users.cache.random().avatarURL()
    const dcs = new Discord.MessageEmbed()
      .setImage('' + dcssanıl + '')
      .setColor("RED")
      .setTimestamp();
    message.channel.send(dcs); // Dcs Ekibinden By Anıl --> V12 Edited By Umut
  
}; 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: "random-pp"
};