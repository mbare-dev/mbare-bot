import { Context, Markup } from "telegraf";
import { getAudioAvailable } from "../../../../utils/audioManager";

type SendQuoteContext = Context & {
    callbackQuery: Context['callbackQuery'] & {
        data: string;
    };
}

export const sendQuote = {
    command: /^send-quote:(.+)$/,
    type: 'action',
    description: 'Send a quote audio file',
    handler: async (ctx: SendQuoteContext) => {
        const data = ctx.callbackQuery?.data;
        const audioId = data?.split(':')[1];
        const audioFiles = getAudioAvailable();
        const audioFile = audioFiles.find(file => file.id === audioId);
        if (!audioFile) {
            await ctx.reply('Audio file not found.');
            return;
        }
        await ctx.replyWithVoice({ source: audioFile.file });
    },
};
