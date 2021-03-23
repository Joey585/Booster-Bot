const { prefix } = require('../config.json');
const { MessageEmbed } = require("discord.js");
exports.run = (client, message) => {

const warnMember = message.mentions.members.first();
const warnArgs = message.content.slice(client.config.prefix.length).trim().split(/ +/g)
const warnReason = warnArgs.slice(2).join(" ");
    



if(!message.member.hasPermission("MANAGE_MESSAGES")) {
   return message.reply('you do not have permission to execute this action')
} 
if (warnMember === undefined) {
    return message.reply('please specify someone to be warned!')
}
if (warnMember.id === message.author.id) {
    return message.reply('you cannot warn yourself!')
}
if (warnMember.id === client.user.id) {
    return message.reply('you cannot warn me!')
}
if (warnReason === undefined) {
    return message.reply('please specify a reason for the warn!')
} else {
    const warnEmbed = new MessageEmbed()
    .setTitle('Member Warned')
    .setThumbnail(warnMember.user.displayAvatarURL())
    .addField('User Warned', warnMember)
    .addField('Warned by', message.author)
    .addField('Reason', warnReason)
    .setFooter('Time warned', client.user.displayAvatarURL())
    .setTimestamp()
    message.channel.send(warnEmbed)
client.users.cache.get(`${warnMember.id}`).send(warnEmbed);
}
}

