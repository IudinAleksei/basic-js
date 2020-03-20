class VigenereCipheringMachine {
    constructor(type = true) {
        this.directType = type;
    }
    encrypt(message, key) {
        if (message === undefined || key === undefined) {
            throw 'Error'
        }
        let encrypted = '';
        let messageUpperCase = message.toUpperCase();
        let keyUpperCase = key.toUpperCase();
        let keyShift = 0;
        for (let i = 0; i < message.length; i++) {
            if (/[A-Z]/.test(messageUpperCase[i])) {
                encrypted += String.fromCodePoint((messageUpperCase.codePointAt(i) + keyUpperCase.codePointAt((i - keyShift) % key.length)) % 26 + 65);
            } else {
                encrypted += message[i];
                keyShift++;
            }
        }
        if (this.directType == false) {
            encrypted = encrypted.split('').reverse().join('')
        }
        return encrypted

    }

    decrypt(encryptedMessage, key) {
        if (encryptedMessage === undefined || key === undefined) {
            throw 'Error'
        }
        let decrypted = '';
        let keyUpperCase = key.toUpperCase();
        let keyShift = 0;
        for (let i = 0; i < encryptedMessage.length; i++) {
            if (/[A-Z]/.test(encryptedMessage[i])) {
                decrypted += String.fromCodePoint((encryptedMessage.codePointAt(i) + 26 - keyUpperCase.codePointAt((i - keyShift) % key.length)) % 26 + 65);
            } else {
                decrypted += encryptedMessage[i];
                keyShift++;
            }
        }
        if (this.directType == false) {
            decrypted = decrypted.split('').reverse().join('')
        }
        return decrypted
    }
}

module.exports = VigenereCipheringMachine