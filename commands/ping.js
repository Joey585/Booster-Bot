exports.run = (client, message, args) => {
    let start = Date.now();

    return message.channel.send('Ping')
        .then(msg => {
            let diff = (Date.now() - start);
            return msg.edit(`Pong! \`${diff}ms\``);
        });
}
// skidded from dyno B)
