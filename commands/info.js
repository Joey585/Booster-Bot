const { MessageEmbed } = require('discord.js');

exports.run = (client, message, args) => {
const infoArgs = args[0]

if (!infoArgs) {
    return message.reply('You need to specify a command to show more info about. Do +help to see the list of commands.')
}
if (infoArgs === 'ask') {
    const askInfoEmbed = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`${infoArgs} command info`)
    .setDescription(`When sent, the ask command will take the game you want to play and stuff it up into one message and ping the @Ask to play role.`)
    .addField('Example', '+ask valorant')
    .addField('Usage', '+ask (Put what you want here)')
    return message.channel.send(askInfoEmbed)
}
if (infoArgs === 'ban') {
    const banInfoEmbed = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`${infoArgs} command info`)
    .setDescription(`This command will ban a user from the server forever unless you do +unban`)
    .addField('Example', '+ban @Joey585')
    .addField('Usage', '+ban @(the person you want to ban)')
    return message.channel.send(banInfoEmbed)
}
if (infoArgs === 'coin') {
    const coinInfoEmbed = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`${infoArgs} command info`)
    .setDescription(`This command will send the price of Ethereum`)
    .addField('Example', '+coin')
    .addField('Usage', '+coin')
    return message.channel.send(coinInfoEmbed)
}
if (infoArgs === 'covid') {
    const covidInfoEmbed = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`${infoArgs} command info`)
    .setDescription(`This command will send the worldwide statistics of the coronavirus`)
    .addField('Example', '+covid')
    .addField('Usage', '+covid')
    return message.channel.send(covidInfoEmbed)
}
if (infoArgs === 'dog') {
    const dogInfoEmbed = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`${infoArgs} command info`)
    .setDescription(`This command will send a random picture of a dog`)
    .addField('Example', '+dog')
    .addField('Usage', '+dog')
    return message.channel.send(dogInfoEmbed)
}
if (infoArgs === 'help') {
    const helpInfoEmbed = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`${infoArgs} command info`)
    .setDescription(`This command will send every single command you can use in the bot`)
    .addField('Example', '+help')
    .addField('Usage', '+help')
    return message.channel.send(helpInfoEmbed)
}
if (infoArgs === 'info') {
    const infoInfoEmbed = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`${infoArgs} command info`)
    .setDescription(`This command will send the information about any command`)
    .addField('Example', '+help tempmute')
    .addField('Usage', '+info (the command you want to know more about)')
    return message.channel.send(infoInfoEmbed)
}
if (infoArgs === 'invite') {
    const inviteInfoEmbed = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`${infoArgs} command info`)
    .setDescription(`This command will send the invite to this bots official server`)
    .addField('Example', '+invite')
    .addField('Usage', '+invite')
    return message.channel.send(inviteInfoEmbed)
}
if (infoArgs === 'kick') {
    const kickInfoEmbed = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`${infoArgs} command info`)
    .setDescription(`This command will kick the specified player from the server`)
    .addField('Example', '+kick @Joey585')
    .addField('Usage', '+kick (@the person you want to kick)')
    return message.channel.send(kickInfoEmbed)
}
if (infoArgs === 'lock') {
    const lockInfoEmbed = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`${infoArgs} command info`)
    .setDescription(`This command will lock a channel by making @everyone not being able to type`)
    .addField('Example', '+lock')
    .addField('Usage', '+lock')
    return message.channel.send(lockInfoEmbed)
}
if (infoArgs === 'mute') {
    const muteInfoEmbed = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`${infoArgs} command info`)
    .setDescription(`This command will mute a player forever (unless you do +unmute)`)
    .addField('Example', '+mute @Joey585')
    .addField('Usage', '+mute @User')
    return message.channel.send(muteInfoEmbed)
}
if (infoArgs === 'ping') {
    const pingInfoEmbed = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`${infoArgs} command info`)
    .setDescription(`This command will tell you your ping`)
    .addField('Example', '+ping')
    .addField('Usage', '+ping')
    return message.channel.send(pingInfoEmbed)
}
if (infoArgs === 'prune') {
    const pruneInfoEmbed = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`${infoArgs} command info`)
    .setDescription(`This command will bulk delete the specified amount of messages`)
    .addField('Example', '+prune 69')
    .addField('Usage', '+prune (the amount of messages)')
    .setFooter('NOTE: To use this command you need to have the permission Manage Messages')
    return message.channel.send(pruneInfoEmbed)
}
if (infoArgs === 'recipe') {
    const recipeInfoEmbed = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`${infoArgs} command info`)
    .setDescription(`This command will send a random recipe to cook`)
    .addField('Example', '+recipe')
    .addField('Usage', '+recipe')
    return message.channel.send(recipeInfoEmbed)
}
if (infoArgs === 'roleban') {
    const rolebanInfoEmbed = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`${infoArgs} command info`)
    .setDescription(`This command will ban a user from using reaction roles`)
    .addField('Example', '+roleban @Joey585 Spamming Roles')
    .addField('Usage', '+roleban (@User) (reason)')
    .setFooter('NOTE: Make sure you have a role called "Role Banned"')
    return message.channel.send(rolebanInfoEmbed)
}
if (infoArgs === 'say') {
    const askInfoEmbed = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`${infoArgs} command info`)
    .setDescription(`This command will repeat anything you say`)
    .addField('Example', '+say Buy Dogecoin!')
    .addField('Usage', '+say (Whatever you want)')
    return message.channel.send(askInfoEmbed)
}
if (infoArgs === 'status') {
    const statusInfoEmbed = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`${infoArgs} command info`)
    .setDescription(`This command will set the status of the bot`)
    .addField('Example', '+status Hello!')
    .addField('Usage', '+status (Whatever you want)')
    .setFooter('NOTE: Can only be used by an owner')
    return message.channel.send(statusInfoEmbed)
}
if (infoArgs === 'tempmute') {
    const tempmuteInfoEmbed = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`${infoArgs} command info`)
    .setDescription(`This command will temporarily mute someone`)
    .addField('Example', '+tempmute @Joey585 30 Spamming memes')
    .addField('Usage', '+tempmute (@User) (Time in minutes) (Reason)')
    return message.channel.send(tempmuteInfoEmbed)
}
if (infoArgs === 'unlock') {
    const tempmuteInfoEmbed = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`${infoArgs} command info`)
    .setDescription(`This command will unlock the channel you are in`)
    .addField('Example', '+unlock')
    .addField('Usage', '+unlock')
    return message.channel.send(tempmuteInfoEmbed)
}
if (infoArgs === 'unmute') {
    const unmuteInfoEmbed = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`${infoArgs} command info`)
    .setDescription(`This command will unmute a user`)
    .addField('Example', '+unmute @Joey585')
    .addField('Usage', '+unmute (@User)')
    return message.channel.send(unmuteInfoEmbed)
}
if (infoArgs === 'warn') {
    const warnInfoEmbed = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`${infoArgs} command info`)
    .setDescription(`This command will warn a user`)
    .addField('Example', '+warn @Joey585 Advertising')
    .addField('Usage', '+warn (@User) (reason)')
    .setFooter('NOTE: Currently, this only works if you have the administrator permission in a server. Could change later')
    return message.channel.send(warnInfoEmbed)
}
if (infoArgs === 'weaponinfo') {
    const weaponinfoInfoEmbed = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`${infoArgs} command info`)
    .setDescription(`This command will show the statistics of the chosen Valorant weapon`)
    .addField('Example', '+weaponinfo Vandal')
    .addField('Usage', '+weaponinfo (Weapon)')
    .setFooter('NOTE: You must capitilize the first letter of the weapon for it to work')
    return message.channel.send(weaponinfoInfoEmbed)
}
if (infoArgs === 'weather') {
    const weatherInfoEmbed = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`${infoArgs} command info`)
    .setDescription(`This command will show the current weather of any city`)
    .addField('Example', '+weather Los Angeles')
    .addField('Usage', '+weather (city)')
    return message.channel.send(weatherInfoEmbed)
}
if (infoArgs === 'whois') {
    const whoisInfoEmbed = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`${infoArgs} command info`)
    .setDescription(`This command will show intresting facts about a certain person`)
    .addField('Example', '+whois @Joey585')
    .addField('Usage', '+whois (@User)')
    return message.channel.send(whoisInfoEmbed)
} else {
    message.reply('Hmm... that seems to not be a valid command. \n Do +help to see all the commands')
}




}