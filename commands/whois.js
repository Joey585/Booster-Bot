const { MessageEmbed } = require('discord.js')

exports.run = (client, message, args) => {
    const whoisMember = message.mentions.members.first();
    const memberPerms = whoisMember.permissions.toArray()

    if (!whoisMember) {
    message.reply('you need to specify who to lookup')
    } else {
        const whoisEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`Who is command`)
        .setImage(whoisMember.user.displayAvatarURL())
        .setDescription(`This command will show info about ${whoisMember} `)
        .addField('Username', whoisMember.user.tag)
        .addField('Permissions', memberPerms.join(', ').toLowerCase().replace(/_/g, ' '))
        .addField('Account created at', whoisMember.user.createdAt)
        .addField('Joined the server at', whoisMember.joinedAt)
        message.channel.send(whoisEmbed)
    }
    

}   