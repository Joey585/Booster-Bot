const { prefix } = require('../config.json');
const Discord = require('discord.js');
exports.run = (client, message, Discord, member, args) => {
    const pruneAmount = message.content.slice(client.config.prefix.length).trim().split(/ +/g)
    const amount = parseInt(pruneAmount[1])+ 1;
    
    if (isNaN(amount)) {
        return message.reply('that doesn\'t seem to be a valid number.');
    } else if (amount <= 1 || amount > 100) {
        return message.reply('you need to input a number between 1 and 99.');
    } else if (message.member.permissions.has("MANAGE_MESSAGES")) {
        message.channel.bulkDelete(amount, true).catch(err => {
            console.error(err);
            message.channel.send('there was an error trying to prune messages in this channel!');
        });
    } else {
        message.reply('You do not have permission to execute this action!')
    }
}	