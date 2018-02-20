const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Command: *help");
    console.log("Connectedç");
});

bot.login("NDE1NjIxMjExNzk2NTM3MzQ0.DW4lEg.7_oo2cQhXENnEAFDvVzwrVSg_tU");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n -*help / !Salut / !Ta gueule");
    }

    if (message.content === "!Salut"){
        message.reply("Salut à toi, Humain");
        console.log("Commande !Salut effectué");
    }

    if (message.content === "!Ta gueule"){
        message.reply("Non, pas bien ! Mais j'avoue...");
        console.log("Commande !Ta gueule effectué");
    }
});
