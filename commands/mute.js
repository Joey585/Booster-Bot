const { MessageEmbed } = require("discord.js");
exports.run = (client, message, Discord, member) => {
const muteArgs = message.content.slice(client.config.prefix.length).trim().split(/ +/g)
const muteMember = message.mentions.members.first();
const length = muteArgs[2]
const role = message.member.guild.roles.cache.find(role => role.name === "Muted");

 



if(!message.member.hasPermission("MUTE_MEMBERS")) {
    return message.channel.send('You do not have the permissions to execute this action!')
}
if (muteMember === undefined) {
    return message.reply('Please specify an actual person to mute!')
}
if (muteMember.id === message.author.id) {
    return message.reply('you cannot mute yourself!')
}
if (client.user.id === muteMember.id) {
    return message.reply('you cannot mute me 😡')
} 

const muteEmbed = new MessageEmbed()
.setColor('#7b0aa8')
.setTitle('Member Muted')
.setThumbnail(muteMember.user.displayAvatarURL())
.addField('User Muted', muteMember)
.addField('Muted by', message.author)
.setFooter('Time muted', client.user.displayAvatarURL())
.setTimestamp()

message.guild.members.cache.get(muteMember.id).roles.add(role);
        message.channel.send(muteEmbed)
}