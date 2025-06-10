import express from 'express';
import { setupRoutes } from './routes';
import { bot, setupBot } from './bot';
import { PORT } from './utils/config';

const app = express();

const init = () => {
    // Middleware to parse incoming requests
    app.use(express.json());

    // Setup express routes
    setupRoutes(app);

    // Setup the Telegram bot
    setupBot(app);

    // Start the Express server
    const server = app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });

    // Handle graceful shutdown
    process.on('SIGINT', () => {
        bot.stop('SIGINT');
        server.close(() => {
            console.log('Server closed gracefully');
        });
    });
}

init();
