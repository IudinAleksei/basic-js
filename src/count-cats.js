module.exports = function countCats(matrix) {
    let out = 0;
    matrix.forEach(item => {
        item.forEach(innerItem => {
            out += (innerItem == '^^') ? 1 : 0;
        });
    });
    return out
};