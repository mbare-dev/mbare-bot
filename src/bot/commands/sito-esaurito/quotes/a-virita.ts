import { Context } from "telegraf";
import { getRandomAudioFile } from "../../../../utils/audioManager";

export const randomAVirita = {
  command: "a-virita",
  type: "command",
  description: "A virita",
  handler: async (ctx: Context) => {
    const audio = getRandomAudioFile('a_virita');
    await ctx.replyWithVoice({ source: audio.file });
  },
};
