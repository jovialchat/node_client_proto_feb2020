//unit tests
import { TimeStamp } from "./src/TimeStamp";
import { Message } from "./src/Message";
import { MessageLineTextPlain } from "./src/MessageLine";
import { MessageLineImage } from "./src/MessageLine/MessageLineImage";
import { serialize, deserialize } from 'bson'

function main() {
    const message = new Message({
        sender_id: "send123",
        reciver_id: "reci321",
        timestamp: new TimeStamp({}),
        body: [
            new MessageLineTextPlain("Hello World"),
            // new MessageLineImage({
            //     file_name: 'hellowkn',
            //     file_key: 'hellowkn;kwef/wef/we/fwefewfnjnfewnf',
            //     file_type: 'image/png'
            // })
        ]
    })
    console.log(
        message.toObject().body
    );
    console.log(
        deserialize(
            serialize(message.toObject())
        ).body
    );   
}

main()