import ThiefFriend from "../thief-friend/ThiefFriend"

export default interface ThiefFriendRepository {
    update(thiefFrined: ThiefFriend): Promise<void>
    create(thiefFrined: ThiefFriend): Promise<void>
    getById(id: string): Promise<ThiefFriend | null>
}
