const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }
let images = ['https://cdn.glitch.com/4ea1e74d-1c99-490a-9c13-d46ec11bc464%2F2ivyan7.gif', 'https://cdn.glitch.com/4ea1e74d-1c99-490a-9c13-d46ec11bc464%2Fcloudup-oyular.gif', 'https://cdn.glitch.com/4ea1e74d-1c99-490a-9c13-d46ec11bc464%2Fcloudupp-oyunn.gif']
message.channel.send(new Discord.MessageEmbed().setAuthor(client.user.username+' Yetkili Menüsü', message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setThumbnail(images.random())
.setColor('RED').setDescription(
  
`<a:elite_dnd:786178421502902293> \`+kes\`  <a:elite_dnd:786178421502902293> \`+git\`  <a:elite_dnd:786178421502902293> \`+çek\`

 <a:elite_dnd:786178421502902293> \`+oylama\`  <a:elite_dnd:786178421502902293> \`+sil\`   <a:elite_dnd:786178421502902293> \`+çek\`


`).addField('Yavaş kullanın ❕ ', '**Yetkili komutlarını Spam Yapmayacak Şekilde Kullanın!**').setFooter("Discord : Фуад「࿈」#1966", client.user.avatarURL)
.setImage ("https://cdn.glitch.com/a3710c3e-ce88-4182-9aff-51c66b31fe65%2Fstandard%20(1).gif?v=1607714569129")
.setTimestamp());

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'yetkili'
};