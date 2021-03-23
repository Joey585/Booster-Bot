const { MessageEmbed } = require("discord.js");

exports.run = (client, message) => {
    const memberRole = message.member.guild.roles.cache.find(role => role.name === "Member");
    if (!message.member.permissions.has('MANAGE_CHANNELS')) {
        return message.reply('You do not have permision to execute this command') 
    }
    if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) {
        return message.reply('I do not have the permission to complete this action!')
    }  else {
        const lockEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Channel Locked.')
        .addField('Locked by', message.author)
        .setFooter('Time Locked')
        .setTimestamp()
        message.channel.send(lockEmbed)
        message.channel.createOverwrite(
            memberRole,
            { 'SEND_MESSAGES': false },
        )
            
        
       
    }


}