import { Shuffler } from "../../helpers/Shuffler";
import AggregateRoot from "../building-blocks/AggregateRoot";
import UUID from "../building-blocks/UUID";
import Name from "./Name";
import OccurredWhen from "./OccurredWhen";
import Person from "./Person";

export default class ThiefFriend extends AggregateRoot {
    private constructor(
        id: UUID,
        public readonly name: Name,
        public occurredWhen: OccurredWhen,
        private persons: Person[],
        private order: UUID[],
    ) {
        super(id)
    }

    private isLocked() {
        return this.order.length > 1
    }

    drawPersons() {
        if(this.isLocked()) {
            throw new Error("thief friend is locked because already been ordered")
        }
        this.order = new Shuffler<Person>().shuffleArray(this.persons).map(item => item.uuid)
    }

    getOrder() {
        if(this.persons.length > 0 && this.order.length === 0) {
            this.drawPersons()
        }

        return this.order
    }

    registerPerson(name: string, email: string) {
        this.persons.push(
            Person.create(
                name, email
            )
        )
    }

    getPersons() {
        return this.persons
    }

    static create(name: string, occuredWhen: Date) {
        return new ThiefFriend(
            new UUID(), new Name(name), new OccurredWhen(occuredWhen), [], []
        )
    }

    static recover(id: string, name: string, occuredWhen: Date, persons: Person[], order: UUID[]) {
        return new ThiefFriend(
            new UUID(id), new Name(name), new OccurredWhen(occuredWhen), persons, order
        )
    }
}
