module.exports = function repeater(str, options) {
    let inputString = str + '';
    let inputAddition = options.addition;
    let out = inputString;
    out += ('addition' in options) ? options.addition : '';
    let additCount = ('additionRepeatTimes' in options) ? options.additionRepeatTimes - 1 : 0;
    let template = ('additionSeparator' in options) ? options.additionSeparator : '|';
    template += ('addition' in options) ? options.addition : '';
    for (let i = 0; i < additCount; i++) {
        out += template;
    }
    let template2 = ('separator' in options) ? options.separator : '+';
    template2 += out;
    let repeat = ('repeatTimes' in options) ? options.repeatTimes - 1 : 0;
    for (let j = 0; j < repeat; j++) {
        out += template2;
    }
    return out
}