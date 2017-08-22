/**
 * Enum of the cell of total values.
 * @type {{PROTEIN: number, FAT: number, CARB: number, FIBER: number}}
 */
var MACRO_CELL = {
    PROTEIN: 3,
    FAT: 4,
    CARB: 5,
    FIBER: 6
};


/**
 * Method to increase the number of days.
 * @param plusMoreDays 0 means today.
 * @returns {Date}
 */
function getTodaysDayFormat(plusMoreDays) {
    // created after '08/13/2017' AND created before '08/14/2017'
    var today = new Date();
    var dd = today.getDate() + plusMoreDays;
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }

    today = mm + '/' + dd + '/' + yyyy;
    console.log("today's date: " + today); // expected: 08/13/2017
    return today;
}

function calculateHoursTimeZone(baseFormat) {
    // baseFormat would be :59:59 OR :00:00
    var timeZoneOffset = getCurrentTimeZoneInHours(); // GMT-5 would be 5.
    var hourFormat = timeZoneOffset;

    if (baseFormat.includes("59")) {
        hourFormat -= 1; // we subtract in 1 in order to have the end of the format. 4:59:59
    }

    hourFormat = hourFormat + baseFormat; // adding the format 04:59:59

    if (timeZoneOffset < 10) { // we add a 0 before the current format.
        hourFormat = '0' + hourFormat;
    }

    console.log("hourFormat: %s", hourFormat);

    return hourFormat;
}

function getCurrentTimeZoneInHours() {
    // Get current timezone offset for host device
    var today = new Date();
    console.log("today.getTimezoneOffset(): %s ", today.getTimezoneOffset());
    var currentTimeZoneOffsetInHours = today.getTimezoneOffset() / 60;

    console.log("currentTimeZoneOffsetInHours: %s ", currentTimeZoneOffsetInHours);

    return currentTimeZoneOffsetInHours;
}

function resetGlobalValues() {
    mQuerySize = 100;
    mQueryOffset = 0;
    mTotalMacros = [];

    console.log("<< mQuerySize:%s, mQueryOffset:%s ", +mQuerySize, mQueryOffset);

    var customBuilder = Backendless.DataQueryBuilder.create();
    customBuilder.setPageSize(mQuerySize)
        .setOffset(mQueryOffset)
        .setSortBy(mQuerySorted);

    mQueryBuilder = customBuilder;
}

