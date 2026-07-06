require("dotenv").config();

const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
    intents: [GatewayIntentBits.Guilds],
});

client.once("ready", async () => {

    console.log(`✅ Logged in as ${client.user.tag}`);

    const channel = await client.channels.fetch("1523635361832763425");

    await channel.send("🎉 Hello! My Discord Announcement Bot is working.");

});

client.login(process.env.TOKEN);