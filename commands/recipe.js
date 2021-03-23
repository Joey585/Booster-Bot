const { MessageEmbed } = require('discord.js');
const { rapidAPIkey } = require('../config.json');
exports.run = (client, message) => {
const axios = require("axios").default;

var randomRecipe = {
  method: 'GET',
  url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random',
  params: {number: '1', tags: 'vegetarian,dessert'},
  headers: {
    'x-rapidapi-key': `${rapidAPIkey}`,
    'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
  }
};

axios.request(randomRecipe).then(function (response) {
 const foodEmbed = new MessageEmbed()
.setColor('RANDOM')
.setTitle(response.data.recipes[0].title)
.setImage(response.data.recipes[0].image)
.setDescription(response.data.recipes[0].instructions)
message.channel.send(foodEmbed) 
}).catch(function (error) {
	console.error(error);
});

}