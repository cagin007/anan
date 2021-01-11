const Discord = require('discord.js'); 
exports.run = async (client, message, args) => {
let kişi = message.mentions.members.first() || message.author;
message.channel.send(`**<a:elite_dnd:786178421502902293> ${kişi}** adlı kişinin ID numarası: **${kişi.id}** idir.`);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["Id", "ıd", "ID"],
  permLevel: 0
};

exports.help = {
  name: "id",
  description: "Belirtilen Kişinin ID'sini Verir.",
  usage: "id"
};