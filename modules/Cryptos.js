const crypto = require('crypto')

var Cryptos =
{
    algorthim:
    {
        AES128: 'aes128',
        AES192: 'aes192',
        AES256: 'aes256'
    },

    crypt: (text, key, algorthim) =>
    {
        if (algorthim != Cryptos.algorthim.AES128 && algorthim != Cryptos.algorthim.AES192 && algorthim != Cryptos.algorthim.AES256) return null
        else
        {
            let bytes = algorthim == 'aes128'? 16 : algorthim == 'aes192'? 24 : 32,
                iv = 'Nonosmatesjimmyp'

            console.log('> Original es:')
            console.log(text)
            console.log('\n')

            key = Cryptos.setAutoPadding(key, bytes)

            const cipher = crypto.createCipheriv(algorthim, key, iv)

            let encrypted = cipher.update(text, 'utf8', 'hex')
            encrypted += cipher.final('hex')

            console.log('> Encriptado es:')
            console.log(encrypted)
            console.log('\n')

            return encrypted
        }
    },

    decrypt: (encrypted, key, algorthim) =>
    {
        if (algorthim != Cryptos.algorthim.AES128 && algorthim != Cryptos.algorthim.AES192 && algorthim != Cryptos.algorthim.AES256) return null
        else
        {
            console.log('> Encriptado es 1:')
            console.log(encrypted)
            console.log('\n')

            let tempEncrypted = Cryptos.bufferize(encrypted)

            let bytes = algorthim == 'aes128'? 16 : algorthim == 'aes192'? 24 : 32,
                iv = 'Nonosmatesjimmyp',
                textEncrypted = tempEncrypted.slice(16)

            key = Cryptos.setAutoPadding(key, bytes)
            const decipher = crypto.createDecipheriv(algorthim, key, iv)

            let decrypted = decipher.update(textEncrypted, 'hex', 'utf8')
console.log('jala x3')
            decrypted += decipher.final('utf8')
console.log('jala x4')
            console.log('> Desencriptado es:')
            console.log(decrypted)
            console.log('\n')
        }
    },

    /*
        Important: Us setAutoPadding need stay before of crypto.createCipheriv()
    */
    setAutoPadding: (key, multiply) =>
    {
        if (key.length % multiply == 0) return key
        else
            for (var i = key.length; key.length % multiply != 0; i++)
            {
                key += Cryptos.randomChar()
            return key
        }
    },

    randomChar: () =>
    {
        var possible = "abcdefghijklmnopqrstuvwxyz0123456789"
        return possible.charAt(Math.floor(Math.random() * possible.length))
    },

    bufferize: (str) =>
    {
        return new Buffer.from(str)
    }
}

module.exports = Cryptos
