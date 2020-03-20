const chainMaker = {
    chain: [],
    getLength() {
        return this.chain.length
    },
    addLink(value) {
        this.chain.push(value);
        return this
    },
    removeLink(position) {
        if (Number.isInteger(position) && position >= 1 && position <= this.chain.length) {
            this.chain.splice(position - 1, 1);
        } else {
            this.chain = [];
            throw 'Error'
        }
        return this
    },
    reverseChain() {
        this.chain.reverse();
        return this
    },
    finishChain() {
        let out = '';
        if (this.chain.length > 0) {
            let arr = this.chain;
            arr.forEach((item, index) => {
                out += (index > 0) ? `~~( ${item} )` : `( ${item} )`
            });
        }
        this.chain = [];
        return out

    }
};

module.exports = chainMaker;