const { ownerID } = require('../config.json');
const { specialID } = require('../config.json');

exports.run = (client, message, args) => {
    const statusAmount = message.content.slice(7).trim().split(/ +/g)
 if (message.author.id === ownerID || message.author.id === specialID) {
    client.user.setPresence({ activity: { name: `${statusAmount.join(' ')}` }, status: 'idle' })
    message.channel.send(`Changing my status to ${statusAmount.join(' ')}!`)
 } else {
    message.channel.send('You are not the owner of this bot, meaning you cannot change the status of it! 😡')
 }


}
