const { Routes } = require('discord.js');
const { CLIENT_ID, GUILD_ID } = process.env;

module.exports = {
    applicationGuildCommands: Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
};