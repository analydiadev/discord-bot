const { Client,  GatewayIntentBits  } = require('discord.js')
require('dotenv').config()

const { loadCommands } = require('./utils/collection')
const { registerCommands } = require('./utils/rest')
const interectionCreat = require('./events/interactionCreate')
const ready = require('./events/ready')

const GATEWAY_INTENTS = [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
];

const client = new Client({
    intents: GATEWAY_INTENTS
})

loadCommands(client)
client.on('interactionCreate', interectionCreat)
client.once('ready', () => ready(client))

client.login(process.env.BOT_TOKEN)
.catch(error => {
    console.error('Error logging in:', error);
});
registerCommands()