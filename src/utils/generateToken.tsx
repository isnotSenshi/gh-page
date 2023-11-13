import CryptoJS from "crypto-js"

export const generateToken = (message: any, password: any) => {

     const tokenEncrypted = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(password))

     const messageCrypted = CryptoJS.AES.encrypt(message, tokenEncrypted).toString()

     return messageCrypted
}