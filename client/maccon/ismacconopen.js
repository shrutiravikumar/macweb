if (Meteor.isClient) {
HOURS = {
    weekend:{close:3, open:9},
    weekday:{close:2, open:9},
}

HARDCODED = false
HARDCODERETURN = 'CLOSED FOR WINTER'

OFFSET = 4 // Eastern time accounting for DST

OPEN = '<span style="color:green">OPEN</span>'
CLOSED = '<span style="color:red">CLOSED</span>'

function MacConStatus(datetime) {
    day = datetime.getDay()
    hour = datetime.getUTCHours() - OFFSET

    // Sunday, Saturday
    if (day == 0 || day == 6) {
        when = HOURS.weekend
    }
    // Monday - Friday
    else {
        when = HOURS.weekday
    }

    return (hour < when.close || hour >= when.open) ? OPEN: CLOSED
}

function isMacConOpen() {
    if (HARDCODED) {
        return HARDCODERETURN
    }
    else {
        datetime = new Date()
        console.log(MacConStatus(datetime))
        return MacConStatus(datetime)
    }
}

setInterval(
    $('#ismacconopen').html('<span style="font-size:10em;">' + isMacConOpen() + '</span>'),
    60000
)
}
