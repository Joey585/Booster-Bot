const { MessageEmbed } = require("discord.js");

exports.run = (client, message) => {
    const unmuteMember = message.mentions.members.first();
    const unmuteRole = message.member.guild.roles.cache.find(role => role.name === "Muted");

    
    if(!message.member.hasPermission("ADMINISTRATOR")) {
        return message.reply('you do not have permission to execute this action!')
    }
    
    if (unmuteMember === undefined) {
    return message.reply('you need to specify a user to unmute!')
    }
    
    const unmuteEmbed = new MessageEmbed()
    .setColor('#7b0aa8')
    .setTitle('Member Unmuted')
    .setThumbnail(unmuteMember.user.displayAvatarURL())
    .addField('User Unmuted', unmuteMember)
    .addField('Unmuted by', message.author)
    .setFooter('Time unmuted', client.user.displayAvatarURL())
    .setTimestamp()
    
    
    message.guild.members.cache.get(unmuteMember.id).roles.remove(unmuteRole);
    message.channel.send(unmuteEmbed)
   

}

   
 

