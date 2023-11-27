export default class UUID {
    readonly value: string

    constructor(
        value?: string
    ) {
        this.value = value || this.create()
    }

    private create() {
        return crypto.randomUUID()
    }
}
