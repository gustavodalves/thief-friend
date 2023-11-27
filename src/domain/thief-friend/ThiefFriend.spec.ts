import ThiefFriend from "./ThiefFriend"

describe('Thief Friend', () => {
    it("should be able create new thief friend", () => {
        const thiefFriend = ThiefFriend.create(
            'example', new Date('2023-11-29')
        )

        expect(thiefFriend).toBeInstanceOf(ThiefFriend)
        expect(thiefFriend.name.getValue()).toBe('example')
        expect(thiefFriend.occurredWhen.getValue()).toMatchObject(new Date('2023-11-29'))
    })

    it("should be able register new person", () => {
        const thiefFriend = ThiefFriend.create(
            'example', new Date('2023-11-29')
        )

        thiefFriend.registerPerson("Gustavo", "g@icloud.com")
        thiefFriend.registerPerson("pedro", "Pedro@gamil.com")

        expect(thiefFriend.getPersons()).toHaveLength(2)
        expect(thiefFriend.getPersons()[0].email.getValue()).toBe("g@icloud.com")
        expect(thiefFriend.getPersons()[1].email.getValue()).toBe("Pedro@gamil.com")
    })

    it("should be able sort", () => {
        const thiefFriend = ThiefFriend.create(
            'example', new Date('2023-11-29')
        )

        thiefFriend.registerPerson("Gustavo", "g@icloud.com")
        thiefFriend.registerPerson("pedro", "Pedro@gamil.com")

        thiefFriend.drawPersons()
        const persons = thiefFriend.getPersons()

        const findPerson = (
            email: string
        ) => persons.find(item => item.email.getValue() === email)

        expect(thiefFriend.getPersons()).toHaveLength(2)
        expect(findPerson("g@icloud.com")).toBeTruthy()
        expect(findPerson("Pedro@gamil.com")).toBeTruthy()
    })
})
