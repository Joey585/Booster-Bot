const { MessageEmbed } = require('discord.js');

exports.run = (client, message) => {
    const axios = require('axios');
    

    axios.get('https://dog.ceo/api/breeds/image/random ')
    .then((res) => {
        const dogEmebed = new MessageEmbed()
        .setImage(res.data.message)
        .setTitle('Random Dog')
        message.channel.send(dogEmebed)
    })
    .catch((err) => {
        console.log('Error:', err)
    })

}