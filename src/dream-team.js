module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) {
        return false
    }
    let arr = [];
    members.forEach(item => {
        if (typeof item == 'string') {
            let temp = item.replace(/\s/g, '')[0];
            arr.push(temp.toUpperCase());

        }
    });
    arr.sort();
    let out = arr.join('');
    return out
}