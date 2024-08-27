const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: {
        name: 'user',
        description: 'Mostra informações sobre o usuário.',
    },
    async execute(interaction) {
        const user = interaction.user;

        const embed = new EmbedBuilder()
            .setColor('#0099ff')
            .setTitle('Informações do Usuário')
            .setDescription(`Aqui estão suas informações, ${user.username}:`)
            .addFields(
                { name: 'Nome de Usuário', value: user.username, inline: true },
                { name: 'ID do Usuário', value: user.id, inline: true },
                { name: 'Data de Criação da Conta', value: new Date(user.createdTimestamp).toDateString(), inline: false }
            )
            .setThumbnail(user.displayAvatarURL());

        await interaction.reply({ embeds: [embed] });
    }
};