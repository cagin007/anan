const Discord = require("discord.js");
const math = require("math-expression-evaluator");
const stripIndents = require("common-tags").stripIndents;

exports.run = function(client, message, args) {
  var soru = args.join(" ");

  if (!soru)
    return message.reply(
      "**<a:elite_dnd:786178421502902293> Bir işlem belirtin.** `Örnek`: **!hesapla <işlem>**"
    );
  else {
    let cevap;
    try {
      cevap = math.eval(soru);
    } catch (err) {
     return message.channel.send("**<a:elite_dnd:786178421502902293> Hatalı işlem: **" + err);
    }

    const Embedmatador = new Discord.MessageEmbed()

      .addField("Soru", soru)
      .addField("Cevap", cevap);

    return message.channel.send(Embedmatador);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "hesapla",
  description: "Belirtilen işlemi yapar.",
  usage: "hesapla <işlem>"
};
