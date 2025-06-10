export interface AudioFile {
    fileName: string;
    filePath: string;
}

export interface Command {
    name: string;
    description: string;
    execute: (ctx: any) => Promise<void>;
}

export interface BotContext {
    // Define any additional properties you want to include in the context
    userId: number;
    chatId: number;
}