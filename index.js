"use strict";
exports.__esModule = true;
//unit tests
var TimeStamp_1 = require("./src/TimeStamp");
var Message_1 = require("./src/Message");
var MessageLine_1 = require("./src/MessageLine");
var bson_1 = require("bson");
function main() {
    var message = new Message_1.Message({
        sender_id: "send123",
        reciver_id: "reci321",
        timestamp: new TimeStamp_1.TimeStamp({}),
        body: [
            new MessageLine_1.MessageLineTextPlain("Hello World"),
        ]
    });
    console.log(message.toObject().body);
    console.log(bson_1.deserialize(bson_1.serialize(message.toObject())).body);
}
main();
