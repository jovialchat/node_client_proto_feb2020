import {User} from './User';

export class Sender extends User {
    constructor({ user_id, name = "" }: { user_id: string; name?: string }) {
        super({ user_id, name })
    }
}