const { MessageEmbed } = require("discord.js")

exports.run = (client, message) => {
const askSetup = message.content.slice(client.config.prefix.length).trim().split(/ +/g)
const askArgs = askSetup.slice(1).join(' ')

if (!askArgs) {
   return message.reply('You need to specify what you are asking to play.')
} else {
    const askEmbed = new MessageEmbed() 
    .setColor('RANDOM')
    .setTitle(`The ask command`)
    .setDescription(`${message.author.username} wants to play ${askArgs}`)
    .setThumbnail('https://lh3.googleusercontent.com/proxy/BG3biqm7LlKXMViuCPxSXU7yAFpAXBtjvYiSYWzgE09ctW_MTKzbKTmcFRb_KShFeAYUzVdyb8Kd08TjRV7RlTY5q7FIkWQQj5q7HiZKYki2f79B9cy51XKr1sGZBw')
    message.channel.send('<@&821052319462457365>')
    message.channel.send(askEmbed)
}
 



}