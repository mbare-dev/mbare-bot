import { Context, Markup } from "telegraf";
import { getAudioAvailable } from "../../../../utils/audioManager";

export const quoteChoice = {
    command: 'quote',
    type: 'command',
    description: 'Choice a quote of sito esaurito to play',
    handler: async (ctx: Context) => {
        const audioFiles = getAudioAvailable();
        
        if (audioFiles.length === 0) {
            await ctx.reply('No audio files available.');
            return;
        }
        
        const keyboard = Markup.inlineKeyboard(
            audioFiles.map(audio => 
                Markup.button.callback(audio.name, `send-quote:${audio.id}`)
            ),
            { columns: 2 }
        );
        
        await ctx.reply('Scegli una citazione da riprodurre:', keyboard);
    },
};
