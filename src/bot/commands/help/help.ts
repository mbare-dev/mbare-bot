import { Context } from "telegraf";

const escapeMarkdownV2 = (text: string): string => {
    return text.replace(/[_*\[\]()~`>#+=|{}.!-]/g, '\\$&');
};

export const help = {
    command: 'help',
    type: 'command',
    description: 'Mostra la lista dei comandi disponibili',
    handler: async (ctx: Context) => {
        const commands = [
            { command: 'quote', description: 'Scegli una citazione da riprodurre' },
            { command: 'randomquote', description: 'Invia una citazione casuale' },
            { command: 'a_virita', description: 'Invia un "a virita" casuale' },
            { command: 'help', description: 'Mostra questo messaggio di aiuto' },
        ];

        const messages = [
            '🤖 MBARE BOT - Comandi Disponibili',
            commands.map(cmd => `• /${cmd.command} - ${cmd.description}`).join('\n'),
        ];

        const helpMessage = escapeMarkdownV2(messages.join('\n'));

        await ctx.replyWithMarkdownV2(helpMessage);
    },
};