// /quote [%SEARCH%] [<author>] - Gets a quote
// /addquote <quote> ~~ <author> - Adds a quote to the database (no quotation marks)
// /quotecount - Gives you the count of quotes in the database.

class Quotes {
    static quote(ctx) {
        const command_length = 7;
        let args = ctx.message.text.substring(command_length).split(' ').filter(elem => {
            return elem != '';
        })
        console.log(args, args.length)

        if (args.length === 0) {
            // select random quote
        } else if (args.length > 0) {
           console.log('args bigger as 0')
        } else {
            return ctx.reply(`Wrong Command Layout, try: /quote %SEARCH% <author>`);
        }

    }
}

module.exports = {Quotes}