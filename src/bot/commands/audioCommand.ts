import { Context } from 'telegraf';
import { getRandomAudioFile } from '../../utils/audioManager';

export const audioCommand = async (ctx: Context) => {
    const audioFile = getRandomAudioFile();
    if (audioFile) {
        await ctx.replyWithVoice({ source: audioFile.file });
    } else {
        await ctx.reply('No audio files available.');
    }
};
