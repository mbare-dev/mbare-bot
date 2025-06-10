# Telegram Bot with Node.js and Telegraf

This project is a generic Telegram bot built with Node.js, Telegraf, and Express, using TypeScript. The bot is designed to send audio files from a predefined pool of MP3 files when a specific command is issued.

## Project Structure

```
telegram-bot
├── src
│   ├── app.ts                  # Entry point of the application
│   ├── bot
│   │   ├── commands
│   │   │   ├── index.ts        # Exports all command handlers
│   │   │   └── audioCommand.ts  # Handles the audio command
│   │   ├── middleware
│   │   │   └── index.ts        # Middleware functions for processing updates
│   │   └── index.ts            # Initializes the Telegraf bot
│   ├── server
│   │   ├── routes
│   │   │   └── index.ts        # Sets up routes for the Express server
│   │   └── index.ts            # Starts the Express server
│   ├── utils
│   │   └── audioManager.ts      # Utility functions for managing audio files
│   └── types
│       └── index.ts            # TypeScript interfaces and types
├── audio
│   └── .gitkeep                # Keeps the audio directory in version control
├── package.json                 # npm configuration file
├── tsconfig.json                # TypeScript configuration file
├── .env.example                 # Example of environment variables
└── README.md                    # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd telegram-bot
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Configure environment variables:**
   - Copy `.env.example` to `.env` and fill in the required values, especially the Telegram bot token.

4. **Run the bot:**
   ```
   npm start
   ```

## Usage

- To send an audio file, use the command defined in the bot. The bot will respond with a random audio file from the pool of MP3 files located in the `audio` directory.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.