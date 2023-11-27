import UUID from "../../domain/building-blocks/UUID"
import Person from "../../domain/thief-friend/Person"
import ThiefFriend from "../../domain/thief-friend/ThiefFriend"
import EmailSenderFake from "../../infra/gateways/fake/EmailSender"
import ThiefFriendInMemoryRepository from "../../infra/repositories/thief-friend/InMemory"
import ThiefFriendService from "./ThiefFriend"

describe("Thief Friend Application Service", () => {
    it("should be able register new thief friend", async () => {
        const repository = new ThiefFriendInMemoryRepository()
        const mailSender = new EmailSenderFake()

        const service = new ThiefFriendService(
            repository, mailSender
        )

        await service.createThiefFriend(
            "example", new Date('2023-12-03')
        )

        expect(repository.values).toHaveLength(1)
        expect(repository.values[0].name.getValue()).toBe("example")
        expect(repository.values[0].occurredWhen.getValue()).toMatchObject(new Date('2023-12-03'))
    })

    it("should be able register new person in thief friend", async () => {
        const repository = new ThiefFriendInMemoryRepository()
        const mailSender = new EmailSenderFake()

        const service = new ThiefFriendService(
            repository, mailSender
        )

        await service.createThiefFriend(
            "example", new Date('2023-12-03')
        )

        const [thiefFriend] = repository.values

        await service.registerPerson(thiefFriend.uuid.value, "Gustavo", "g@gmail.com")

        expect(thiefFriend.getPersons()[0].name.getValue()).toBe("Gustavo")
        expect(thiefFriend.getPersons()[0].email.getValue()).toBe("g@gmail.com")
        expect(thiefFriend.getPersons()[0]).toBeInstanceOf(Person)
    })

    it("should be able register new person in thief friend", async () => {
        const repository = new ThiefFriendInMemoryRepository()
        const mailSender = new EmailSenderFake()

        const service = new ThiefFriendService(
            repository, mailSender
        )

        await service.createThiefFriend(
            "example", new Date('2023-12-03')
        )

        const [thiefFriend] = repository.values

        await service.registerPerson(thiefFriend.uuid.value, "Gustavo", "g@gmail.com")
        await service.registerPerson(thiefFriend.uuid.value, "Gustavo2", "g2@gmail.com")

        await service.order(thiefFriend.uuid.value)

        const personsIds = repository.values[0].getPersons().map(item => item.uuid)

        const order = thiefFriend.getOrder()

        expect(order).toBeInstanceOf(Array<UUID>)

        for (const iterator of personsIds) {
            expect(order).toContain(iterator)
        }
    })
})