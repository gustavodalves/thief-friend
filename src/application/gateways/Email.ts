export default interface EmailSender {
    send(mail: string): Promise<void>
}