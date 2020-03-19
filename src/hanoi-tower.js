module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let out = {};
    out.turns = 2 ** disksNumber - 1;
    out.seconds = out.turns / (turnsSpeed / 3600);
    return out
}