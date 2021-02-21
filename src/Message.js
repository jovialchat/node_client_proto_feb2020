"use strict";
exports.__esModule = true;
exports.Message = void 0;
var Sender_1 = require("./Sender");
var Reciver_1 = require("./Reciver");
var Message = /** @class */ (function () {
    function Message(_a) {
        var sender_id = _a.sender_id, reciver_id = _a.reciver_id, timestamp = _a.timestamp, body = _a.body;
        this.body = [];
        this.sender = new Sender_1.Sender({ user_id: sender_id });
        this.reciver = new Reciver_1.Reciver({ user_id: reciver_id });
        this.timestamp = timestamp;
        this.body = body;
    }
    Message.prototype.toObject = function () {
        return {
            sender: this.sender.toObject(),
            reciver: this.reciver.toObject(),
            timestamp: this.timestamp.toObject(),
            body: this.body.map(function (line) {
                return line.toObject();
            })
        };
    };
    return Message;
}());
exports.Message = Message;
