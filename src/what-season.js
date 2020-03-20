module.exports = function getSeason(date) {
    if (date == undefined) {
        return 'Unable to determine the time of year!'
    }

    if ({}.toString.call(date) != '[object Date]') {
        throw 'Error';
    }
    let month = date.getMonth();
    let season = 'undeterninate';
    if (month < 2) {
        return 'winter'
    } else if (month < 5) {
        return 'spring'
    } else if (month < 8) {
        return 'summer'
    } else if (month < 11) {
        return 'fall'
    } else {
        return 'winter'
    }
    //console.log(date);
}