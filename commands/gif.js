const fetch = require("node-fetch");

module.exports = async function (message, args) {

let keywords = "random";

        if (args.length > 0) {
            keywords = args.join(" ");
        }
        let url =`https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&limit=8`
        let response =  await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random()* json.results.length)
        message.channel.send(json.results[index].url);
};