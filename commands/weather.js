const { MessageEmbed } = require('discord.js');
const { weatherAPI } = require('../config.json');

exports.run = (client, message) => {
const axios = require('axios');
const weatherCity = message.content.slice(client.config.prefix.length).trim().split(/ +/g)
const weatherArgs = weatherCity.slice(1).join(' ')

axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${weatherArgs}&units=imperial&appid=${weatherAPI}`)
    .then((res) => {
    const weatherEmbed = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`Weather for ${res.data.name}`)
    .addFields(
        { name: 'Temperature', value: res.data.main.temp, inline: true},
        { name: 'Feels Like', value: res.data.main.feels_like, inline: true},
        { name: 'Pressure', value: res.data.main.pressure, inline: true},
        { name: 'Humidity', value: res.data.main.humidity, inline: true},
        { name: 'Max Temperature', value: res.data.main.temp_max, inline: true},
        { name: 'Minimum Temperature', value: res.data.main.temp_min, inline: true}
    )
    .setFooter(res.headers.date)
    .setThumbnail('https://www.bearvalley.com/uploads/2017/03/weathersmall-1920x1080.jpg')

    message.channel.send(weatherEmbed)
    // console.log(res)
    })
    .catch((err) => {
        message.channel.send('Hmm... it seems that isn\'t a valid city. Try again.')
    })


}
