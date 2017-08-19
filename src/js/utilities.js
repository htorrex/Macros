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


// function queryParams() {
//     return {
//         // type: 'owner',
//         sort: 'food',
//         direction: 'desc',
//         per_page: 100,
//         page: 1
//     };
// }
