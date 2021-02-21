import { Sender } from "./Sender";
import { Reciver } from "./Reciver";
import { TimeStamp } from "./TimeStamp";
import { MessageLine } from "./MessageLine";

export class Message {

    private sender: Sender
    private reciver: Reciver
    private timestamp: TimeStamp
    private body: MessageLine[] = []

    constructor({ sender_id, reciver_id, timestamp, body }: { sender_id: string; reciver_id: string; timestamp: TimeStamp, body: MessageLine[] }) {
        this.sender = new Sender({user_id: sender_id})
        this.reciver = new Reciver({user_id: reciver_id})
        this.timestamp = timestamp
        this.body = body
    }

    toObject(){
        return {
            sender: this.sender.toObject(),
            reciver: this.reciver.toObject(),
            timestamp: this.timestamp.toObject(),
            body: this.body.map(line=>{
                return line.toObject()
            })
        }
    }
}