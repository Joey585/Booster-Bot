const { MessageEmbed } = require("discord.js");
exports.run = (client, message, Discord, member) => {
const muteMember = message.mentions.members.first();
let role = message.member.guild.roles.cache.find(role => role.name === "Muted");
const guild = client.guilds.cache.get(message.guild.id);



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
if (!role) {
    /* role = guild.roles.create({
        data: {
            name: 'Muted',
            color: '#838383',
            hoisted: 'false',
        }
    }) 
    guild.channels.cache.forEach(async (channel, id) => {
        await channel.createOverwrite(role, {
            SEND_MESSAGES: false
        })
    })

    message.channel.send('`It seems like that you have no Muted role.\nCreating one for you..`\n Try running the command again!')
    return; */
   return message.channel.send('There is no muted role! To make one:\n Create a role named "Muted"\n And change the text channel permissions to make the muted role to not be abled to talk.')
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