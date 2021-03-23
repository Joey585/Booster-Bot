const { MessageEmbed } = require('discord.js');
const { valorantAPI } = require('../config.json');
exports.run = (client, message) => {
    const axios = require('axios');
    const weaponInfo = message.content.slice(client.config.prefix.length).trim().split(/ +/g)
    const weaponArgs = weaponInfo[1]
     var options = {
        method: 'GET',
        url: `https://valorant-weapons.p.rapidapi.com/weapon/${weaponArgs}`,
        headers: {
          'x-rapidapi-key': valorantAPI,
          'x-rapidapi-host': 'valorant-weapons.p.rapidapi.com'
        }
      };

    message.channel.send('⚠️WARNING⚠️ This could take a few seconds. Be patient!')

      axios.request(options).then(function (response) {
        if (response.data < 1)  {
        return message.reply('Hmm... looks like your weapon doesn\'t exist. Try capitalizing the first letter.')
        }
        const weaponEmbed = new MessageEmbed() 
            .setColor('RANDOM')
            .setImage(`https://valorant-api-project.herokuapp.com/images/${weaponArgs.toLowerCase()}`) 
            .setTitle(`Weapon info for ${response.data.name}`)
            .addFields(
                { name: 'Cost', value: response.data.cost, inline: true },
                { name: 'Fire Rate', value: response.data.fire_rate, inline: true},
                { name: 'Fire Type', value: response.data.fire_type, inline: true }
            )
            
        
          message.channel.send(weaponEmbed);  
    }).catch(function (error) {
        console.error(error);
    }); 
    
    
}