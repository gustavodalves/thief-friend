import Name from "./Name"

describe(("Name"), () => {
    it('should be able create valide name', () => {
        const name = new Name("GUSTAVO")

        expect(name)
    })

    it("should not be able create invalid name", () => {
        expect(() => new Name("")).toThrow()
    })
})