"use strict";
exports.__esModule = true;
//unit tests
var TimeStamp_1 = require("./src/TimeStamp");
var Message_1 = require("./src/Message");
var MessageLine_1 = require("./src/MessageLine");
var MessageLineImage_1 = require("./src/MessageLine/MessageLineImage");
function main() {
    var message = new Message_1.Message({
        sender_id: "send123",
        reciver_id: "reci321",
        timestamp: new TimeStamp_1.TimeStamp({}),
        body: [
            new MessageLine_1.MessageLineTextPlain("Hellow"),
            new MessageLineImage_1.MessageLineImage({
                file_name: 'hellowkn;kwef/wef/we/fwefewfnjnfewnf',
                file_type: 'image/png'
            })
        ]
    });
    console.log(message.toObject().body);
}
main();
