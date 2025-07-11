import { Telegraf } from 'telegraf';
import { quoteChoice, randomQuote, sendQuote, randomAVirita } from './sito-esaurito/quotes';
import { help } from './help';

export const commands = [quoteChoice, sendQuote, randomQuote, help, randomAVirita];

export const setupCommands = (bot: Telegraf) => {
    // For debugging purposes, you can uncomment the following lines to log incoming messages and callback queries.
    // bot.on('callback_query', (ctx, next) => {
    //     console.log('Received callback_query:', ctx.callbackQuery);
    //     return next();
    // });

    const commandList = commands
        .filter(cmd => cmd.type === 'command')
        .map(cmd => ({ command: cmd.command.toString(), description: cmd.description }));
    bot.telegram.setMyCommands(commandList);

    for (const command of commands) {
        switch (command.type) {
            case 'command':
                // @ts-ignore
                bot.command(command.command, command.handler);
                console.log(`Command /${command.command} has been set up.`);
                break;
            case 'action':
                // @ts-ignore
                bot.action(command.command, command.handler);
                console.log(`Action ${command.command} has been set up.`);
                break;
            default:
                console.error(`Unknown command type: ${command.type}`);
                continue;
        }
    }
}