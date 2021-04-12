const { ownerID } = require('../config.json');
const { hazardID } = require('../config.json');
const { MessageEmbed } = require('discord.js')
exports.run = (client, message, args, version, title, desc) => {


/* if (args[0] === 'update') {
    if (!message.author.id === hazardID || !message.author.id === ownerID) {
        return message.reply('You cannot run this command!')
    } else if (message.author.id === ownerID) {
    let filter = m => m.author.id === message.author.id
    message.channel.send(`${message.author.username} what version is this update in?`).then(() => {
      message.channel.awaitMessages(filter, {
          max: 1,
          time: 30000,
          errors: ['time']
        })
        .then((version) => {
          version = version.first()
          message.channel.send(`${message.author.username} what is this update called?`).then(() => {
            message.channel.awaitMessages(filter, {
                max: 1,
                time: 30000,
                errors: ['time']
              })
              .then((title) => {
                module.exports = {
                title: title.first()
                }
                message.channel.send(`What happened in the update?`).then(() => {
                  message.channel.awaitMessages(filter, {
                      max: 1,
                      time: 30000,
                      errors: ['time']
                    })
                    .then((desc) => {
                    desc = desc.first()
                        message.channel.send('Changelog Updated!')
                      
                }) 
              })
            })
          })
        })
      })     
} */


axios.get('http://localhost:3000')
    .then((res) => {
        console.log(res)
    })
}
