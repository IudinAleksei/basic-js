module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw 'Error';
    }
    //console.log(JSON.stringify(arr));
    let out = [];
    arr.forEach((item, index, array) => {
        if (!((typeof item == 'string') && item.substring(0, 2) == '--')) {
            out.push(item);

            if (array[index - 1] == "--double-next") {
                out.push(item);
            } else if (array[index - 1] == "--discard-next") {
                out.pop();
            }

            if (array[index + 1] == "--discard-prev") {
                out.pop();
            } else if (array[index + 1] == "--double-prev") {
                out.push(item);
            }

        }
    })
    return out
}