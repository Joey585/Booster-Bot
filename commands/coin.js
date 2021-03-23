const { MessageEmbed } = require('discord.js');
const { rapidAPIkey } = require('../config.json');
exports.run = (client, message) => {
    var axios = require("axios").default;

    var options = {
      method: 'GET',
      url: 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD',
      headers: {
        'authorization': 'Apikey {e56f304fefb09ecadea2884c2e27cefeb6cdb6d9638c6dc2f69b437a9a585831}',
      }
    };
    
    axios.request(options).then(function (response) {
        // console.log(response.data);
        const coinEmbed = new MessageEmbed()
       // const coinSlice = response.data
        .setColor('RANDOM')
        .setTitle('Price for Etheruem in USD')
        .setDescription(`$${response.data.USD} USD`)
        message.channel.send(coinEmbed)
    }).catch(function (error) {
        message.channel.send('Hmm... something went wrong!')
        console.error(error);
    });

}