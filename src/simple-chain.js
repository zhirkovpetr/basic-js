export default {
    chain: [],

    getLength() {
        return this.chain.length
    },
    addLink(value = '') {
        this.chain.push(`( ${value} )`)
        return this
    },
    removeLink(position) {
        if (!(typeof position === 'number') || !Number.isInteger(position) || !this.chain[position - 1]) {
            this.chain = []
            throw new Error("You can't remove incorrect link!")
        }
        this.chain.splice(position - 1, 1)
        return this
    },
    reverseChain() {
        this.chain.reverse()
        return this;
    },
    finishChain() {
        const str = this.chain.join('~~')
        this.chain.length = 0
        return str
    }
};
