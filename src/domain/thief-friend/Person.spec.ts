import UUID from "../building-blocks/UUID"
import Person from "./Person"

describe("Person", () => {
    it("should be able create new person", () => {
        const person = Person.create(
            "Gustavo", "g@icloud.com"
        )

        expect(person).toBeInstanceOf(Person)
        expect(person.email.getValue()).toBe("g@icloud.com")
        expect(person.name.getValue()).toBe("Gustavo")
    })

    it("should be able recover person", () => {
        const person = Person.recover(
            'dasdwqrrew-21312dsa-3213123-dsa', "Gustavo", "g@icloud.com"
        )

        expect(person).toBeInstanceOf(Person)
        expect(person.uuid).toBeInstanceOf(UUID)
        expect(person.email.getValue()).toBe("g@icloud.com")
        expect(person.name.getValue()).toBe("Gustavo")
    })
})