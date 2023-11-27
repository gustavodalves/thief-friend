export default interface EmailSender {
    send(mail: string): Promise<void>
    sendMany(mails: string[]): Promise<void>
}