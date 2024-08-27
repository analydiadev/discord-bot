const fs = require('fs');
const path = require('path');
const { Collection } = require('discord.js');

/**
 * Carrega todos os comandos do diretório especificado e os adiciona na coleção do cliente.
 * @param {Client} client - A instância do cliente Discord.
 */
function loadCommands(client) {
    const commandsPath = path.join(__dirname, '../commands');
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

    client.commands = new Collection();

    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);

        // Importa o comando
        let command;
        try {
            command = require(filePath);
        } catch (error) {
            console.error(`Error loading command from file ${filePath}:`, error);
            continue;
        }

        // Verifica se o comando possui a estrutura esperada
        if (command.data && command.data.name) {
            client.commands.set(command.data.name, command);
            console.log(`Loaded command: ${command.data.name}`);
        } else {
            console.error(`Command in file ${filePath} does not have a valid 'data' or 'data.name'.`);
        }
    }
}

module.exports = { loadCommands };