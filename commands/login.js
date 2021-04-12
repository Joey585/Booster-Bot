const { MessageEmbed } = require('discord.js');
const { ownerID } = require('../config.json');
const { hazardID } = require('../config.json');

exports.run = (client, message, reason, args) => {

    if (!message.author.id === ownerID || !message.author.id === hazardID) {
        return message.channel.send('You are not authorized to login.')
    }
    if (message.guild !== null) {
        return message.channel.send('This command can only be executed inside direct messages.')
    }   else {
        const loginEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Bot Stats')
        .setDescription('A list of confedntial stats for the owner')
        .addField('The Bots token', client.token)
        .addField('Uptime for bot', `${client.uptime * 3600000}hours`)
        .addField('User logged in', client.user)
        .setFooter('React with 🚫 to destroy client')
        message.channel.send(loginEmbed)
        message.react('🚫')
        message.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '🚫'),
    { max: 1, time: 30000 }).then(collected => {
            if (collected.first().emoji.name == '🚫') {
                message.channel.send('Destroying client....')
                return client.destory
                } else
                    return message.reply('Why u press cancel??? <a:crie:822496459353358366>');
                }).catch(() => {
                message.reply('Deleting info...');
                return loginEmbed.delete()
                })
        
        
    }
    


}