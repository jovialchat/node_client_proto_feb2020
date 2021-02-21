import { MessageLine } from "./MessageLine";

export class MessageLineImage extends MessageLine{
    protected meta_data: {
        file_name: string;
        file_type: 'image/png'|'image/jpg'|'image/jpeg';
        file_key: string|null;
        preview_text: string;
        preview_img_64b: string|null;
        preview_img_buffer: Uint8Array|null;
    }
    protected data: Uint8Array|null;
    constructor(
        {file_name, file_type, file_key, preview_img_64b, preview_img_buffer, file_buffer}
        :
        {file_name:string, file_type:'image/png'|'image/jpg'|'image/jpeg', file_key?:string, preview_img_64b?:string, preview_img_buffer?:Uint8Array, file_buffer?:Uint8Array}
    ) {
        super('image')

        this.meta_data = {
            file_name,
            file_type,
            file_key: file_key?file_key:null,
            preview_text: file_name.substr(0, 16),
            preview_img_64b: preview_img_64b?preview_img_64b:null,
            preview_img_buffer: preview_img_buffer?preview_img_buffer:null
        }

        if(file_buffer) this.data = file_buffer
        else this.data = null
    }
}