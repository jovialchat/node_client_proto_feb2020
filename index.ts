//unit tests
import { TimeStamp } from "./src/TimeStamp";
import { Message } from "./src/Message";
import { MessageLineTextPlain } from "./src/MessageLine";
import { MessageLineImage } from "./src/MessageLine/MessageLineImage";

function main() {
    const message = new Message({
        sender_id: "send123",
        reciver_id: "reci321",
        timestamp: new TimeStamp({}),
        body: [
            new MessageLineTextPlain("Hellow"),
            new MessageLineImage({
                file_name: 'hellowkn;kwef/wef/we/fwefewfnjnfewnf',
                file_type: 'image/png'
            })
        ]
    })
    console.log(
        message.toObject().body
    );
}

main()