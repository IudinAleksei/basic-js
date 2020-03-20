module.exports = class DepthCalculator {

    calculateDepth(arr) {
        if (Array.isArray(arr)) {
            let depth = 1;
            let deIt = 0;
            if (arr.length > 0) {
                arr.forEach(item => {
                    let temp = this.calculateDepth(item)
                    deIt = (temp > deIt) ? temp : deIt;
                })
            }
            depth += deIt;
            return depth
        } else {
            return 0
        }
    }
}