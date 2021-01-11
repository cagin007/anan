 const { MessageEmbed } = require("discord.js");
const moment = require("moment");
//Made By. DCS
//Created By. Zukii#9999
//The Licence Of MIT
module.exports.run = async (client, message, args) => {
  const filterLevels = {
    DISABLED: "Off",
    MEMBERS_WITHOUT_ROLES: "No Role",
    ALL_MEMBERS: "Everyone"
  };

  const verificationLevels = {
    NONE: "None",
    LOW: "Low",
    MEDIUM: "Medium",
    HIGH: "(╯°□°）╯︵ ┻━┻",
    VERY_HIGH: "┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻"
  };

  const regions = {
    brazil: ":flag_br: Brazil",
    europe: ":flag_eu: Europe",
    hongkong: ":flag_hk: Hong Kong",
    india: ":flag_in: India",
    japan: ":flag_jp: Japan",
    russia: "<:rusian:732466484533657680> Russia",
    singapore: ":flag_sg: Singapore",
    southafrica: ":flag_za: South Africa",
    sydeny: ":flag_au: Sydeny",
    "us-central": ":flag_us: US Central",
    "us-east": ":flag_us: US East",
    "us-west": ":flag_us: US West",
    "us-south": ":flag_us: US South"
  };

  const roles = message.guild.roles.cache
    .sort((a, b) => b.position - a.position)
    .map(role => role.toString());
  const members = message.guild.members.cache;
  const channels = message.guild.channels.cache;
  const emojis = message.guild.emojis.cache;

  const embed = new MessageEmbed()
    .setAuthor(`Server Information for ${message.guild.name}`)
    .setColor("RED")
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .addField("General", [
      `**❯ Name:** \`${message.guild.name}\``,
      `**❯ ID:** \`${message.guild.id}\``,
      `**❯ Owner:** \`${message.guild.owner.user.tag}\``,
      `**❯ Region:** ${regions[message.guild.region]}`,
      `**❯ Boost Level:** \`${
        message.guild.premiumTier
          ? `Level ${message.guild.premiumTier}`
          : "None"
      }\``,
      `**❯ Explicit Filter:** \`${
        filterLevels[message.guild.explicitContentFilter]
      }\``,
      `**❯ Verification Level:** \`${
        verificationLevels[message.guild.verificationLevel]
      }\``,
      `**❯ Time Created:** \`${moment(message.guild.createdTimestamp).format(
        "LT"
      )} ${moment(message.guild.createdTimestamp).format("LL")} ${moment(
        message.guild.createdTimestamp
      ).fromNow()}\``,
      `**❯** [Server Icon](${message.guild.iconURL({ dynamic: true })})`,
      `**❯ Features:**`,
      `\`${message.guild.features.join(", ") || "None"}\``,

      "\u200b"
    ])
    .addField("Statistics", [
      `**❯ Role Count:** \`${roles.length}\``,
      `**❯ Emoji Count:** \`${emojis.size}\``,
      `**❯ Regular Emoji Count:** \`${
        emojis.filter(emoji => !emoji.animated).size
      }\``,
      `**❯ Animated Emoji Count:** \`${
        emojis.filter(emoji => emoji.animated).size
      }\``,
      `**❯ Text Channels:** \`${
        channels.filter(channel => channel.type === "text").size
      }\``,
      `**❯ Voice Channels:** \`${
        channels.filter(channel => channel.type === "voice").size
      }\``,
      `**❯ Boost Count:** \`${message.guild.premiumSubscriptionCount || "0"}\``,
      "\u200b"
    ])
    .addField("Presence", [
      `**❯ Total Member:** \`${message.guild.memberCount}\``,
      "\u200b"
    ])
    .setFooter(client.user.username, client.user.avatarURL())
    .setTimestamp();
  if (message.guild.description)
    embed.setDescription("**Server Description:** ", message.guild.description);
  message.channel.send(embed);
};

module.exports.help = {
  name: "serverinfo"
};
module.exports.conf = {
  aliases: ["si"]
};
 
