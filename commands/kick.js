const { MessageEmbed } = require("discord.js");
exports.run = (client, message, reason, args) => {
  const member = message.mentions.members.first();

  const kickArgs = message.content.slice(client.config.prefix.length).trim().split(/ +/g)

  if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('You can\'t use that!')
  if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send('I don\'t have the right permissions.')

  

  if(!kickArgs[0]) return message.channel.send('Please specify a user');

  if(!member) return message.channel.send('Can\'t seem to find this user.');
  if(!member.bannable) return message.channel.send('This user can\'t be kicked. It is either because they are a mod/admin, or their highest role is higher than mine');

  if(member.id === message.author.id) return message.channel.send('You can\'t ban yourself!');


   member.kick(`${reason}`).catch(err => { 
    message.channel.send('Something went wrong')
      console.log(err)
  }) 

  const banembed = new MessageEmbed()
  .setTitle('Member Banned')
  .setThumbnail(member.user.displayAvatarURL())
  .addField('User Kicked', member)
  .addField('Kicked by', message.author)
  .setFooter('Time kicked', client.user.displayAvatarURL())
  .setTimestamp()

  message.channel.send(banembed);


}
