const Discord = require('discord.js');


exports.run = function(client, message, args) {

	let mesaj = args.slice().join(' ')
if (!mesaj) return message.reply('Lütfen Önerinizi Yazın')
message.delete()
client.users.cache.get("440055691122704394").send(new Discord.MessageEmbed()
.setColor('RED')
.addField('Eylem', 'Öneri')
.addField('Kullanıcı', message.author.tag)
.addField('Sunucu', message.guild.name)
.addField('Öneri', mesaj)
).then(a => message.channel.send('<a:elite_dnd:786178421502902293>  Öneriniz Alındı!'))
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["öner"],
  permLevel: 0
};

exports.help = {
  name: 'öneri',
  description: "<a:elite_dnd:786178421502902293>  Bot ve Sunucu Hakkındaki Önerilerinizi Sahiplerine Ulaştırır",
  usage: 'öneri <mesaj>'
};