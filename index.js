const { WebhookClient } = require("discord.js");
const tmi = require("tmi.js");

const client = new tmi.Client({
  channels: ["jlengstorf"],
});

const webhookUrl = process.env.WEBHOOK_URL;
const webhookClient = new WebhookClient({
  url: webhookUrl,
});
client.connect().then(() => console.log("clinent online and listening"));

client.on("message", (channel, tags, message, self) => {
  if (tags["display-name"] === "jlengstorf" && message.startsWith("https")) {
    webhookClient.send(message);
  }
});
