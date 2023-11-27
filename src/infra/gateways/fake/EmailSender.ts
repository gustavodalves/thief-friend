import IEmailSender from '../../../application/gateways/Email'

export default class EmailSenderFake implements IEmailSender {
    async send(mail: string): Promise<void> {
        console.log(`email sended to ${mail}`)
    }

    async sendMany(mails: string[]): Promise<void> {
        for (const mail of mails) {
            await this.send(mail)
        }
    }
}