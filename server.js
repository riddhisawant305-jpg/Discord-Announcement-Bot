require("dotenv").config();

const express = require("express");
const path = require("path");
const { Client, GatewayIntentBits } = require("discord.js");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// ✅ Discord Bot Setup
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// ✅ Bot Ready Event
client.once("ready", () => {
    console.log(`✅ Bot logged in as ${client.user.tag}`);
});

// ✅ Login Bot
client.login(process.env.TOKEN);

// ===============================
// 🌐 FRONTEND ROUTE
// ===============================
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ===============================
// 📢 ANNOUNCEMENT API
// ===============================
app.post("/announce", async (req, res) => {

    console.log("POST /announce called");

    const { title, message } = req.body;

    // ✅ Validation check
    if (!title || !message) {
        return res.status(400).json({
            success: false,
            error: "Title and message are required"
        });
    }

    try {

        // ⚠️ Replace with your actual channel ID
        const channelId = "1523635361832763425";

        const channel = await client.channels.fetch(channelId);

        // ✅ Check channel exists
        if (!channel) {
            return res.status(404).json({
                success: false,
                error: "Channel not found"
            });
        }

        // 📢 Send announcement
        await channel.send({
            content: `📢 **${title}**\n\n${message}`
        });

        return res.json({
            success: true,
            message: "Announcement sent successfully"
        });

    } catch (err) {

        console.error("Discord Error:", err);

        return res.status(500).json({
            success: false,
            error: err.message
        });
    }
});

// ===============================
// 🚀 START SERVER
// ===============================
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});