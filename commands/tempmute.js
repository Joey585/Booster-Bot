const { MessageEmbed } = require("discord.js");

exports.run = (client, message, role) => {
const tempArgs = message.content.slice(client.config.prefix.length).trim().split(/ +/g)
const tempUser = message.mentions.members.first();
let tempReason = tempArgs.slice(3).join(' ')
let tempDuration = parseInt(tempArgs[2])
const tempRole = message.member.guild.roles.cache.find(role => role.name === "Muted");
const tempMinutes = (tempDuration * 60000)


if(!message.member.hasPermission("MUTE_MEMBERS")) {
    return message.channel.send('You do not have the permissions to execute this action!')
}
if (tempUser === undefined) {
    return message.reply('Please specify an actual person to mute!')
}
 if (tempUser.id === message.author.id) {
    return message.reply('you cannot mute yourself!') 
} 
if (client.user.id === tempUser.id) {
    return message.reply('you cannot mute me 😡')
}
if (tempDuration === undefined) {
    tempDuration = 5
    return message.reply('Please specify an actual duration for the mute. It is in minutes.')  
}
if (tempReason === undefined) {
    tempReason = 'Not defined'
}

const tempEmbed = new MessageEmbed()
.setColor('#7b0aa8')
.setTitle('Member Muted')
.setThumbnail(tempUser.user.displayAvatarURL())
.addField('User Muted', tempUser)
.addField('Muted by', message.author)
.addField('Reason of mute', tempReason)
.addField('Duration of mute', `${tempDuration} minutes`)
.setFooter('Time muted', client.user.displayAvatarURL())
.setTimestamp()

message.channel.send(tempEmbed)

message.guild.members.cache.get(tempUser.id).roles.add(tempRole);

setTimeout(function(){
    message.guild.members.cache.get(tempUser.id).roles.remove(tempRole);}, tempMinutes);

}