import UUID from "./UUID";

export default abstract class Entity {
    constructor(
        readonly uuid: UUID
    ) {}
}
