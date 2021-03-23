const { MessageEmbed } = require('discord.js');

exports.run = (client, message, args) => {
const roleBanMember =  message.mentions.members.first();
const roleArgs = args.slice(1).join(' ')
const roleBanRole = message.member.guild.roles.cache.find(role => role.name === "Role Banned");

if (!message.member.permissions.has('BAN_MEMBERS')) {
    return message.reply('I am sorry, but you do not have the permission to execute this action.')
} 
if (!roleBanMember) {
    return message.reply('You need to specify what person to ban from using reaction roles.')
}
if (!roleArgs) {
    return message.reply('You need to specify a reason for the role ban')
}
if (!roleBanRole) {
    return message.reply('You need to have a role in your server called "Role Banned"')
}
if (roleBanMember.id === message.author.id) {
    return message.reply('You cannot role ban yourself')
}
if (roleBanMember.id === client.user.id) {
    return message.reply('You cannot role ban me!')
}



else {
    const roleBanEmbed = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`User Rolebanned`)
    .setThumbnail(roleBanMember.user.displayAvatarURL())
    .addField('User Role Banned', roleBanMember)
    .addField('Banned by', message.author)
    .addField('Reason for role ban', roleArgs)
    .setFooter('Time muted', client.user.displayAvatarURL())
    .setTimestamp()
    message.channel.send(roleBanEmbed)
    message.guild.members.cache.get(roleBanMember.id).roles.add(roleBanRole);
}



}