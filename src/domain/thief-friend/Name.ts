export default class Name {
    private value: string

    constructor(
        value: string
    ) {
        if(!this.validate(value)) {
            throw new Error("invalid name")
        }

        this.value = value
    }

    getValue() {
        return this.value
    }

    private validate(name: string) {
        return name.length > 1
    }
}
