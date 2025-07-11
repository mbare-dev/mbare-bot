import { Context } from "telegraf";

export const help = {
    command: 'help',
    type: 'command',
    description: 'Mostra la lista dei comandi disponibili',
    handler: async (ctx: Context) => {
        const commands = [
            { command: 'quote', description: 'Scegli una citazione da riprodurre' },
            { command: 'randomQuote', description: 'Invia una citazione casuale' },
            { command: 'help', description: 'Mostra questo messaggio di aiuto' },
            { command: 'a-virita', description: 'Invia un "a virita" casuale' },
            // Aggiungi qui altri comandi disponibili
        ];

        const helpMessage = `🤖 *MBARE BOT \\- Comandi Disponibili*\n\n${
            commands.map(cmd => `• /${cmd.command} \\- ${cmd.description}`).join('\n')
        }\n\nPer ulteriori informazioni visita il nostro sito: https://mbare\\.dev (sucuni)`;

        await ctx.replyWithMarkdownV2(helpMessage);
    },
};