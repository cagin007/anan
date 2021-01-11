const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }
let images = ['https://cdn.glitch.com/4ea1e74d-1c99-490a-9c13-d46ec11bc464%2F2ivyan7.gif', 'https://cdn.glitch.com/4ea1e74d-1c99-490a-9c13-d46ec11bc464%2Fcloudup-oyular.gif', 'https://cdn.glitch.com/4ea1e74d-1c99-490a-9c13-d46ec11bc464%2Fcloudupp-oyunn.gif']
message.channel.send(new Discord.MessageEmbed().setAuthor(client.user.username+' Eğlence Menüsü', message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setThumbnail(images.random())
.setColor('RED').setDescription(
`<a:elite_dnd:786178421502902293> \`+kaçcm\`  <a:elite_dnd:786178421502902293> \`+espri\`  <a:elite_dnd:786178421502902293> \`+aduket-çek\`

<a:elite_dnd:786178421502902293>  \`+öp\`   <a:elite_dnd:786178421502902293> \`+efkarım\`  <a:elite_dnd:786178421502902293> \`+1v1\`

<a:elite_dnd:786178421502902293>  \`+tokat\` <a:elite_dnd:786178421502902293> \`+fbi\`  <a:elite_dnd:786178421502902293> \`+ejderha-yazı\`

<a:elite_dnd:786178421502902293>  \`+aşk\`  <a:elite_dnd:786178421502902293> \`+kral-ol\`  <a:elite_dnd:786178421502902293> \`+emojiyazı\`

<a:elite_dnd:786178421502902293>   \`+fal\`  <a:elite_dnd:786178421502902293> \`+balık-tut\`  <a:elite_dnd:786178421502902293> \`+slots\`

<a:elite_dnd:786178421502902293> \`+beşlik\`  <a:elite_dnd:786178421502902293> \`+ara155\`  <a:elite_dnd:786178421502902293> \`+stres-çarkı\`

<a:elite_dnd:786178421502902293> \`+atasözü\`  <a:elite_dnd:786178421502902293> \`+adam-asmaca\`  <a:elite_dnd:786178421502902293> \`+yazı-tura\`

<a:elite_dnd:786178421502902293> \`+yaz\`  <a:elite_dnd:786178421502902293> \`+yılbaşı\`  <a:elite_dnd:786178421502902293> \`+şekerye\`

<a:elite_dnd:786178421502902293> \`+taksimdayı\` <a:elite_dnd:786178421502902293> \`+soru-sor\` <a:elite_dnd:786178421502902293> \`+kaçcm\`

`).addField('Yavaş kullanın ❕ ', '**Eğlence komutlarını Spam Yapmayacak Şekilde Kullanın!**').setFooter("Discord : Фуад「࿈」#1966", client.user.avatarURL)
.setImage ("https://cdn.glitch.com/a3710c3e-ce88-4182-9aff-51c66b31fe65%2Fstandard%20(1).gif?v=1607714569129")
.setTimestamp()
);

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'eğlence'
};