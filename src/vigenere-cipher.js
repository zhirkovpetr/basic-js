export default class VigenereCipheringMachine {

    encrypt(message, key) {
        if (!(message && key)) {
            throw new Error('Incorrect arguments!');
        }
        message = message.toUpperCase()
        let messageCodes = []
        let keys = key.toUpperCase()
        let j = 0
        const alphbt = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        if (!this.mode) {
            message = message.split("").reverse()
        }
        for (let i = 0; i < message.length; i++) {
            if (alphbt.includes(message[i])) {
                let index = ((alphbt.indexOf(message[i]) + alphbt.indexOf(keys[j])) % 26)
                let tmp = alphbt[index]
                messageCodes.push(tmp)
                j++
                if (j === keys.length) {
                    j = 0
                }
            } else {
                messageCodes.push(message[i])
            }
        }
        return messageCodes.join('')
    }


    decrypt(message, key) {
        if (!(message && key)) {
            throw new Error('Incorrect arguments!');
        }
        message = message.toUpperCase();
        const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        let messageCodes = [],
            keys = key.toUpperCase(),
            j = 0

        if (!this.mode) {
            message = message.split("").reverse()
        }

        for (let i = 0; i < message.length; i++) {
            if (alphabet.includes(message[i])) {
                let index = (((alphabet.indexOf(message[i]) - alphabet.indexOf(keys[j])) + 26) % 26);
                let tmp = alphabet[index]
                messageCodes.push(tmp)
                j++
                if (j === keys.length) {
                    j = 0
                }
            } else {
                messageCodes.push(message[i]);
            }
        }
        return messageCodes.join("")
    }


    constructor(mode = true) {
        this.mode = mode;
        return this.mode;
    }
}
