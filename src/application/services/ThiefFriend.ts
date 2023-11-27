import ThiefFriendRepository from "../../domain/repository/ThiefFriend";
import ThiefFriend from "../../domain/thief-friend/ThiefFriend";
import EmailSender from "../gateways/Email";

export default class ThiefFriendService {
    constructor(
        private readonly thiefFriendRepository: ThiefFriendRepository,
        private readonly emailSender: EmailSender
    ) {}

    async createThiefFriend(
        name: string, occuredOn: Date
    ) {
        const thiefFriend = ThiefFriend.create(
            name, occuredOn
        )
        await this.thiefFriendRepository.create(thiefFriend)
    }

    async registerPerson(
        thiefFriendId: string, name: string, email: string
    ) {
       const thiefFriend = await this.thiefFriendRepository.getById(thiefFriendId)
        if(!thiefFriend) throw new Error("thief fried not founded")
       thiefFriend.registerPerson(name, email)
       await this.thiefFriendRepository.update(thiefFriend)
    }

    async order(
        thiefFriendId: string
    ) {
        const thiefFriend = await this.thiefFriendRepository.getById(thiefFriendId)
        if(!thiefFriend) throw new Error("thief fried not founded")
        thiefFriend.drawPersons()
        
        const mailPromises = thiefFriend.getPersons().map(item => (
            this.emailSender.send(item.email.getValue())
        ))
        
        await Promise.all(mailPromises)
    }
}
