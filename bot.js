require("dotenv").config();


const fetch = require("node-fetch");
const Discord = require('discord.js');
const client = new Discord.Client();


client.login(process.env.BOTTOKEN);


client.on("ready", readyDiscord);

function readyDiscord() {
    console.log("👍 Good to go!");
}

client.on("message", gifMsg);

async function gifMsg(message) {
    let tokens = message.content.split(" ");
    
    if (tokens[0] === "!gif") {
        let keywords = "random";

        if (tokens.length > 1) {
            keywords = tokens.slice(1, tokens.length).join(" ");
        }
        let url =`https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&limit=8`
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random()* json.results.length)
        message.channel.send(json.results[index].url);
    }

};