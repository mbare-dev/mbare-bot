import { Telegraf } from 'telegraf';
import { Express } from 'express';
import { setupCommands } from './commands';
import { BOT_TOKEN, WEBHOOK_URL } from '../utils/config';

export const bot = new Telegraf(BOT_TOKEN);

export const setupBot = async (app: Express) => {

    if (WEBHOOK_URL) {
        console.log('Setting up bot with webhook URL:', WEBHOOK_URL);

        // Set up webhook for the bot
        bot.telegram.setWebhook(WEBHOOK_URL);

        // Use the bot's webhook callback as middleware
        app.use(bot.webhookCallback('/webhook'));
    }

    // Set up commands for the bot
    setupCommands(bot);

    // Log when the bot is ready
    bot.launch().then(() => {
        console.log('Telegram bot is running...');
    }).catch(err => {
        console.error('Failed to launch the bot:', err);
    });
}