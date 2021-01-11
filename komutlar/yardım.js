const Discord = require ("discord.js");

exports.run = (client, message) => {

const Embedmatador = new Discord.MessageEmbed()

.setColor("RED")
.setTitle('**▬▬▬▬▬▬[**🇹🇷**Code : F Bot** 🇹🇷**]▬▬▬▬▬▬**  \n \n **Şuanda kullanılan prefix** ’+’')
.setThumbnail("https://dynamic.brandcrowd.com/asset/logo/055241ff-dc4f-4743-90be-1c9caa0c900b/logo?v=4&text=Code+:+F")
.setDescription(`

▬▬▬▬▬▬[ 🔴 **Yardım Komutları** 🔴 ]▬▬▬▬▬▬

**<a:elite_dnd:786178421502902293>  \`+kullanıcı :\`** Kullanıcı Komutlarını Görüntülersiniz.


**<a:elite_dnd:786178421502902293>   \`+yetkili : \`** Yetkili Komutlarını Görüntülersiniz.


**<a:elite_dnd:786178421502902293>  \`+eğlence : \`** Eğlence Komutlarını Görüntülersiniz.


**▬▬▬▬▬▬▬[<a:elite_dnd:786178421502902293>**Bilgilendirme**<a:elite_dnd:786178421502902293>]▬▬▬▬▬▬▬**
 
  :round_pushpin: Fikirleriniz değerlidir, Belirtmekten asla çekinmeyin!

<a:elite_dnd:786178421502902293> Bağlantılar
• [\`Botun Davet Linki\`](https://discord.com/oauth2/authorize?client_id=784082442574102528&permissions=8&scope=bot)
`)
 
.setFooter("Discord : Фуад「࿈」#1966", client.user.avatarURL)
.setImage ("https://cdn.glitch.com/a3710c3e-ce88-4182-9aff-51c66b31fe65%2Fstandard%20(1).gif?v=1607714569129")
.setTimestamp();

return message.channel.send(Embedmatador)
.then; //MATADOR

};
exports.conf = {
enabled: true, 
    guildOnly: false, 
    aliases: ["yardım","help"], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'yardım', 
    description: 'The Help Command',
    usage: 'help'
};