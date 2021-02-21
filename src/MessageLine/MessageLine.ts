export class MessageLine {

    protected type: 'text'|'image'
    protected meta_data: {
        preview_text?: string,
        preview_img_64b?: string|null,
        preview_img_buffer?: Uint8Array|null,
        file_name?: string,
        file_type?: 'image/png'|'image/jpg'|'image/jpeg'
        file_key?: string|null;
    } = {}
    protected data: string | Uint8Array | boolean | null = null

    constructor(type: 'text'|'image') {
        this.type = type
    }

    toObject(){
        return {
            type: this.type,
            meta_data: this.meta_data,
            data: this.data
        }
    }
}

