const bcryptjs = require('bcryptjs')


const hashData = async (data) => {
    const salt = await bcryptjs.genSalt()
    const hash = await bcryptjs.hash(data, salt) 
    return hash
}

const verifyData = async (pass, veri, word, wordveri) => {
    if(pass && veri && word && wordveri){
        const passHash = await bcryptjs.compare(pass, veri)
        const wordHash = await bcryptjs.compare(word, wordveri)
        if(passHash && wordHash){
            return true
        }else{
            return false
        }
    }
}

module.exports = {
    hashData,
    verifyData
}