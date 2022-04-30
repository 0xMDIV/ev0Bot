const request = require("request");

class Helper {
    static ONE_DAY = 60 * 60 * 24;

    static getLocalTimestamp() {
        return new Date().toLocaleString("de-DE", { timeZone: "Europe/Berlin" });
    }

    static getDate() {
        const date = new Date();
        return (
            date.getUTCDate() +
            "." +
            (date.getUTCMonth() + 1) +
            "." +
            date.getUTCFullYear()
        );
    }

    static getTimeNow() {
        return Math.floor(Date.now() / 1000);
    }

    // ProcessUptime
    static getProcessUptime = () => {
        const uptime = process.uptime();
        const date = new Date(0);
        date.setSeconds(uptime);

        const uptimeDays = Math.floor(uptime / Helper.ONE_DAY);

        return (
            (uptime > Helper.ONE_DAY ? uptimeDays + " Tage " : "") +
            date.toISOString().substr(11, 8)
        );
    };

    // Check if The Website is up
    static checkWebsiteStatus() {
        request(
            {
                uri: "https://ev0lve.xyz",
                method: "GET",
                time: true,
            },
            (err, resp) => {
                if (resp) {
                    return resp.elapsedTime;
                } else if (err) {
                    return false;
                }
            }
        );
    }

    static capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}

/**
 * Prevent XSS and so one
 */
class Security {
    // Private Method
    static checkString(input) {
        const isString = typeof input === 'string' || input instanceof String;

        if (!isString) {
            let invalidType = typeof input;
            if (input === null) invalidType = 'null';
            else if (invalidType === 'object') invalidType = input.constructor.name;

            throw new TypeError(`Expected a string but received a ${invalidType}`);
        }
    }
    static preventXSS(str) {
        this.checkString(str);
        return (str.replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#x27;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/\//g, '&#x2F;')
            .replace(/\\/g, '&#x5C;')
            .replace(/`/g, '&#96;'));
    }
}

module.exports = {Helper, Security}