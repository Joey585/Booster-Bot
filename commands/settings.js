const { MessageEmbed } = require("discord.js");
let welcomeStatus = null
exports.run = (client, message, args) => {

if (args[0] === undefined) {
    if (welcomeStatus === false) {
        const setting1Embed = new MessageEmbed()
        .setTitle('Settings')
        .addField('Welcome message', 'Disabled :x:')
        .setFooter('To disable do +settings disable welcome')
        return message.channel.send(setting1Embed)
    } if (welcomeStatus === true) {
            const settingEmbed = new MessageEmbed()
            .setTitle('Settings')
            .addField('Welcome message', 'Enabled :white_check_mark:')
            .setFooter('To disable do +settings disable welcome')
            return message.channel.send(settingEmbed)
    } if (welcomeStatus === null) {
        message.channel.send('<a:sad:822310178455814144> an error has occured')
            
    }
}

if (args[0] === 'disable') {
    if (args[1] === 'welcome') {
        const disableWelcome = new MessageEmbed()
        .setTitle('Disabiling Welcome...')
        message.channel.send(disableWelcome)
        welcomeStatus = false
    }
}

console.log(welcomeStatus)


}