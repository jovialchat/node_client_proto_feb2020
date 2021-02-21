export class User {
    private user_id: string = ""
    private meta: {name: string|null} = {name: null}

    constructor({ user_id, name = null }: { user_id: string; name?: string|null }) {
        this.user_id = user_id
        this.meta = { name }
    }
    toObject() {
        return {
            user_id: this.user_id,
            name: (this.meta.name? this.meta.name: null)
        }
    }
}