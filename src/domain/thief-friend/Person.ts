import Entity from "../building-blocks/Entity";
import UUID from "../building-blocks/UUID";
import Email from "./Email";
import Name from "./Name";

export default class Person extends Entity {
    private constructor(
        id: UUID,
        public readonly name: Name,
        public readonly email: Email,
    ) {
        super(id)
    }

    static create(name: string, email: string) {
        return new Person(new UUID(), new Name(name), new Email(email))
    }

    static recover(
        id: string, name: string, email: string
    ) {
        return new Person(
            new UUID(id), new Name(name), new Email(email)
        )
    }
}
