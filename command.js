
const gif = require("./commands/gif.js");

const commands = { gif };

module.exports = async function (message) {
    let tokens = message.content.split(" ");
    let command = tokens.shift();
    if (command.charAt(0) === "!") {
        command = command.substring(1);
        commands[command](message, tokens);
    }
};