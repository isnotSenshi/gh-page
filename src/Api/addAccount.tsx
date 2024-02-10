import emailjs from '@emailjs/browser';

export const emailJS = async (fromName: any, message: any, replyTo: any) => {
     const templateParams = {
          from_name: fromName,
          message: message,
          reply_to: replyTo
     }
     emailjs.send('service_mn6ft8b', 'template_0k6yf1a', templateParams, { publicKey: 'TsM4U6wSe5ptMSjDk' })
}