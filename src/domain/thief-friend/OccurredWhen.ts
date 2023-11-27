export default class OccurredWhen {
    private value: Date

    constructor(
        value: Date
    ) {
        if(!this.validate(value)) {
            throw new Error("invalid date")
        }

        this.value = value
    }

    getValue() {
        return this.value
    }

    private validate(date: Date) {
        return date > new Date()
    }
}
