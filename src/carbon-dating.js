const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    if (typeof sampleActivity != 'string') {
        return false
    }
    let numericValue = parseFloat(sampleActivity);
    if (numericValue < 0 || numericValue > MODERN_ACTIVITY || !numericValue) {
        return false
    }
    let result = Math.ceil((Math.log(MODERN_ACTIVITY / numericValue) * HALF_LIFE_PERIOD / 0.693));
    return result
}