const { MessageEmbed, Collection } = require("discord.js");

exports.run = (client, message, args) => {
    
    message.channel.send('This command is highly in development. Continue?');

    message.react('👍').then(r => {
            message.react('👎')
    })

    message.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '👍' || reaction.emoji.name == '👎'),
    { max: 1, time: 30000 }).then(collected => {
            if (collected.first().emoji.name == '👍') {
                    message.delete()
                    message.reply('Starting help command v2');
                    const helpEmbed = new MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle('Help Command')
                    .setDescription('My prefix is +')
                    .setThumbnail('https://www.pentaboost.com/frontend/images/valorant/lig/1_3.png')
                    .addField('Moderation', '`ban, kick, lock, mute, prune, roleban, tempmute, unmute, warn`')
                    .addField('Fun', '`coin, covid, dog, recipe, say, weaponinfo, weather`')
                    .addField('Usefull', '`ask, help, helpv2, info, invite, status, whois, ping`')
                    .setFooter('Coded By Joey585#0585')
                    
                    message.channel.send(helpEmbed)
                    message.react(':track_previous:').then(r => {
                        message.react(':track_next:')
                })
                    message.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == ':track_previous:' || reaction.emoji.name == ':track_next:'),
                    { max: 1, time: 30000 }).then(collected => {
                        if (collected.first().emoji.name === ':track_next:') {
                            message.delete()
                            message.channel.send('Next help section')
                    } else {
                        return message.channel.send('This is the first help page! Try again')
                    }
                        
                    }).catch(() => {
                    })

                } else
                    return message.reply('Why u press cancel??? <a:crie:822496459353358366>');
                }).catch(() => {
                message.reply('No reaction after 30 seconds, operation canceled');
                }); 
               
               
            
  /* message.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '👍' || reaction.emoji.name == '👎'),
    { max: 1, time: 30000 }).then(collected => {
    }).catch(() => {
            message.reply('')
    })
    */
}