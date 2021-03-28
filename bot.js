require("dotenv").config();


const fetch = require("node-fetch");
const Discord = require('discord.js');
const client = new Discord.Client();
// the channel ID is = ("699717551319678989");

client.login(process.env.BOTTOKEN);


client.on("ready", readyDiscord);

function readyDiscord() {
    console.log("👍 Good to go!");
}

client.on("message", gifMsg);

async function gifMsg(msg) {
    if (msg.content === "!gif") {
        msg.channel.send("here!")

        let url =`https://g.tenor.com/v1/search?q=dukebot&key=${process.env.TENORKEY}&limit=8`
        let response = await fetch(url);
        let json = await response.json();
        console.log(json);
        msg.channel.send(json.results[0].url);
    }
};