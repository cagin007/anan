const Discord = require('discord.js');
//Dcs Ekibi
exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('Yazmam için herhangi bir şey yazmalısın.');
    message.delete({timeout: 1000});
    const embed = new Discord.MessageEmbed()
    .setColor("RED")
.setDescription(`${mesaj}`)
return message.channel.send(embed);
};
 //Code Share Ekibi

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['söyle']
};

exports.help = {
  name: 'yaz'
}; 