import ThiefFriendRepository from "../../../domain/repository/ThiefFriend";
import ThiefFriend from "../../../domain/thief-friend/ThiefFriend";

export default class ThiefFriendInMemoryRepository implements ThiefFriendRepository {
    public readonly values: ThiefFriend[] = []

    async create(thiefFrined: ThiefFriend): Promise<void> {
        this.values.push(thiefFrined)
    }

    async getById(id: string): Promise<ThiefFriend | null> {
        const value = this.values.find(item => item.uuid.value === id)

        return value || null
    }

    async update(thiefFriend: ThiefFriend): Promise<void> {
        const index = this.values.findIndex(item => item.uuid.value === thiefFriend.uuid.value)

        if(index === -1) {
            throw new Error("thief friend not founded")
        }

        this.values[index] = thiefFriend
    }
}
