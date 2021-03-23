exports.run = (client, message, args) => {

    message.reply("Check your DM's for the invite link!")
    client.users.cache.get(`${message.author.id}`).send('https://discord.com/api/oauth2/authorize?client_id=818994508427427890&permissions=8&scope=bot');
   }
   