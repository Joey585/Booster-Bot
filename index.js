const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json")
const fs = require("fs")
const Enmap = require("enmap")


client.config = config

client.on("ready", () =>{
  client.user.setPresence({ activity: { name: `Boosting ${client.guilds.cache.size} servers! | +help` }, status: 'dnd' })
  console.log('Welcome home Joey585')
});

client.on("guildMemberAdd", (member) => {
  // console.log(`New User "${member.user.username}" has joined "${member.guild.name}"` );
  if (!member.guild.channels.cache.find(c => c.name === "welcome")) {
    return;
  }
  member.guild.channels.cache.find(c => c.name === "welcome").send(`Welcome ${member.user.tag} to ${member.guild.name}!`);
}); 

client.settings = new Enmap({name: "settings"});


client.on("guildMemberRemove", (member) => {
  member.guild.channels.cache.find(c => c.name === "welcome").send(`😥 ${member.user.tag} left the server...`);
});

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      const event = require(`./events/${file}`);
      let eventName = file.split(".")[0];
      client.on(eventName, event.bind(null, client));
    });
  });

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      let props = require(`./commands/${file}`);
      let commandName = file.split(".")[0];
      console.log(`Loading ${file}...`);
      client.commands.set(commandName, props);
    });
  });

client.login(config.token);