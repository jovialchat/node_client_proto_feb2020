import { MessageLine } from "./MessageLine";

export class MessageLineTextPlain extends MessageLine {
    protected meta_data: {
        preview_text: string;
    };
    protected data: string;
    constructor(text: string) {
        super('text');
        this.meta_data = {
            preview_text: text.substr(0, 16)
        };
        this.data = text;
    }
}
