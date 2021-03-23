const { prefix } = require('../config.json');

exports.run = (client, message, Discord, args, statusAmount) => {
const sayArgs = message.content.slice(4).trim().split(/ +/g)
message.channel.send(sayArgs.join(' '))
.then (
    // console.log(message.content),
    message.delete()
)
} 

