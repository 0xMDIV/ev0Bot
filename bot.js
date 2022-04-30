// /quote [%SEARCH%] [<author>] - Gets a quote
// /addquote <quote> ~~ <author> - Adds a quote to the database (no quotation marks)
// /quotecount - Gives you the count of quotes in the database.
// /snippet - Sends a random pCode snippet
// /addsnippet <snippet> - Adds a snippet to the database
// /snippetcount - Gives you the count of snippets in the database.
// /image - Sends a random image
// /imagecount - Gives you the count of images in the database.
// /clever - Lets you talk to the Cleverbot
// /report - Sends the steamid64 to a reportbot
// /refund <product> - Refunds the specified product
// /deport <thing> ~~ <destination> - Refunds the specified thing
// /<3 - Gives you some love
// /source - Gives back the URL of the current bot script
// /about - Shows information about the bot
// /help - Shows all available commands

const telegram = require('telegraf');
const BOT_TOKEN = process.env.BOT_TOKEN;

if (BOT_TOKEN === undefined || "") {
    throw new Error('Bot Token must be provided');
}

/**
 * Telegram Bot Setup
 * @type telegram
 */
const bot = new telegram.Telegraf(config.bot.token);