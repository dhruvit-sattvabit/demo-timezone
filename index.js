const moment = require('moment-timezone');

function logWithTimezone(message) {
    const timestamp = moment().tz('Asia/Kolkata').format('MM/DD/YYYY, h:mm:ss A');
    console.log(`${timestamp}: ${message}`);
}

// Example usage
logWithTimezone('Nest application successfully started');