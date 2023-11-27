import OccurredWhen from "./OccurredWhen"

describe("Occurred When", () => {
    it("should be able create validate date", () => {
        const occurredWhen = new OccurredWhen(new Date('2023-12-05'))

        expect(occurredWhen).toBeInstanceOf(OccurredWhen)
    })

    it("should not be able create invalid date", () => {
        expect(() => new OccurredWhen(new Date('2022-11-27'))).toThrow()
    })
})