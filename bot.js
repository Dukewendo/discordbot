require("dotenv").config();


const fetch = require("node-fetch");
const Discord = require('discord.js');
const client = new Discord.Client();


client.login(process.env.BOTTOKEN);


client.on("ready", readyDiscord);

function readyDiscord() {
    console.log("👍 Good to go!");
}


const commandHandler = require("./command.js")
client.on("message", commandHandler);