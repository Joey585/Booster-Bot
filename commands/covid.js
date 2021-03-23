const { MessageEmbed } = require('discord.js');
const { rapidAPIkey } = require('../config.json');
exports.run = (client, message) => {
var axios = require("axios").default;

var covidOptions = {
  method: 'GET',
  url: 'https://covid-19-data.p.rapidapi.com/totals',
  headers: {
    'x-rapidapi-key': `${rapidAPIkey}`,
    'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
  }
};

axios.request(covidOptions).then(function (response) {
   const covidEmbed = new MessageEmbed()
  .setColor('RANDOM')
  .setTitle('Coronavirus Stats')
  .setDescription('Daily Coronavirus stats in the entire world')
  .setThumbnail('https://images.squarespace-cdn.com/content/v1/5c4085e585ede1f50f94a4b9/1581018457505-JM3FO6WMFN9BGP3IOE8D/ke17ZwdGBToddI8pDm48kL5hQm_JZO5i_9Equza1B-57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1URbcWFoTofQNHE0Fe4ADwtkYw2N2aveJw6FaFCcRrQmU3WUfc_ZsVm9Mi1E6FasEnQ/2019-nCoV-CDC-23312_without_background.png')
  .addFields(
    { name: 'Confirmed Cases', value: response.data[0].confirmed, inline: true},
    { name: 'Cases Recovered', value: response.data[0].recovered, inline: true},
    { name: 'Critical Cases', value: response.data[0].critical, inline: true},
    { name: 'Deaths', value: response.data[0].deaths, inline: true}
  )
  message.channel.send(covidEmbed) 
	// console.log(response.data); 
}).catch(function (error) {
	console.error(error);
});

}

// test 