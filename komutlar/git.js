const Discord = require('discord.js');
const data = require('quick.db');


exports.run = async (client, message, args) => {
if(!message.member.permissions.has('MOVE_MEMBERS')) return message.channel.send(new Discord.MessageEmbed().setTitle(`**• \`${client.ayarlar.prefix}git\` kullanmak için, \`Üyeleri Taşı\` İznine sahip olmanız gerekiyor.**`));
if(message.member.voice.channel == undefined) return message.channel.send(new Discord.MessageEmbed().setTitle('Bir hata oldu!').setDescription('<a:elite_dnd:786178421502902293> Sesli kanala girerek dener misin?').setFooter(`Ping: ${client.ws.ping}`, client.user.avatarURL({dynamic:true})))
if(!message.mentions.members.first()) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('<a:elite_dnd:786178421502902293> Bir hata oldu!').setDescription('<a:elite_dnd:786178421502902293> Kullanıcı Etiketleyerek dener misin?'));
if(message.author.id === message.mentions.members.first()) return;
if(message.mentions.members.first().voice.channel == undefined) return message.channel.send(new Discord.MessageEmbed().setTitle('<a:elite_dnd:786178421502902293> Bir hata oldu!').setDescription(`Etiketlediğin ${message.mentions.members.first()} Sesli kanalda yok.`).setFooter(`Ping: ${client.ws.ping}`, client.user.avatarURL({dynamic:true})))
message.guild.members.cache.get(message.author.id).voice.setChannel(message.mentions.members.first().voice.channel.id);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'git'
};  