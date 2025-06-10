import { Telegraf } from 'telegraf';
import { audioCommand } from './audioCommand';

export const commands = {
    audio: audioCommand,
};

export const setupCommands = (bot: Telegraf) => {
    for (const [commandName, commandHandler] of Object.entries(commands)) {
        bot.command(commandName, commandHandler);
        console.log(`Command /${commandName} has been set up.`);
    }
}