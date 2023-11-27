import { Shuffler } from "./Shuffler"

describe("Shuffler", () => {
    it('should be able array shuffle array', () => {
        const arr = [3,4,1]
        const arrShuffled = new Shuffler<Number>().shuffleArray(arr)

        expect(arrShuffled).toContain(1)
        expect(arrShuffled).toContain(3)
        expect(arrShuffled).toContain(4)
    })
})