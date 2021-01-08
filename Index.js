const Discord = require("discord.js");

const Client = new Discord.Client;

Client.on("ready", () => {
        console.log("Bot opérationnel");
});

Client.on("ready", async () => {
        Client.user.setActivity("Discord.gg/Steel", {type: 'STREAMING', url : 'https://www.twitch.tv/discord'} );
})

Client.login("Nzk2NDU4MjA3NTA0NzYwODQz.X_YNgg.qrdYPglo8XJNIJZ9A-OY13JZp-E");