const { MessageEmbed } = require("discord.js");

exports.run = (client, message, args) => {
const helpEmbed = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Help Section')
    .setURL('https://discord.gg/nWKDn74baH')
    .setAuthor('Booster', 'https://cdn.discordapp.com/avatars/818994508427427890/9f30ae4b881a36c37abc912bc23c1797.png?size=256', 'https://discord.gg/nWKDn74baH')
    .setDescription('If you want information on how to use a command do +info (the command)')
    .addField('All the commands', '+ask, +ban, +covid, +dog, +help, +info, +invite, +kick, +mute, +prune, +recipe, +roleban, +say, +status, +tempmute, +unmute, +warn, +weaponinfo, +weather, +whois    ')
    .setTimestamp('timestamp')
    .setFooter('Coded By Joey585#0585')
        message.channel.send(helpEmbed)
    }