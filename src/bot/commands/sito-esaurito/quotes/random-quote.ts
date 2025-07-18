import { Context } from "telegraf";
import { getRandomAudioFile } from "../../../../utils/audioManager";

export const randomQuote = {
    command: 'randomquote',
    type: 'command',
    description: 'Send a random quote',
    handler: async (ctx: Context) => {
        const audio = getRandomAudioFile();
        await ctx.replyWithVoice({ source: audio.file }, { caption: audio.name });
    },
};
