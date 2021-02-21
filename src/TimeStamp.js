"use strict";
exports.__esModule = true;
exports.TimeStamp = void 0;
var TimeStamp = /** @class */ (function () {
    function TimeStamp(_a) {
        var sender_sent_time = _a.sender_sent_time, server_sent_time = _a.server_sent_time, reciver_recive_time = _a.reciver_recive_time, server_recive_time = _a.server_recive_time;
        this.sender_sent_time = null;
        this.server_sent_time = null;
        this.reciver_recive_time = null;
        this.server_recive_time = null;
        if (sender_sent_time)
            this.add_sender_sent_time(sender_sent_time);
        if (server_sent_time)
            this.add_server_sent_time(server_sent_time);
        if (reciver_recive_time)
            this.add_reciver_recive_time(reciver_recive_time);
        if (server_recive_time)
            this.add_server_recive_time(server_recive_time);
    }
    TimeStamp.prototype.add_sender_sent_time = function (time) {
        if (this.sender_sent_time !== null)
            throw Error("A Timestamp can not be resigned");
        this.sender_sent_time = Number(time);
    };
    TimeStamp.prototype.add_server_sent_time = function (time) {
        if (this.server_sent_time !== null)
            throw Error("A Timestamp can not be resigned");
        this.server_sent_time = Number(time);
    };
    TimeStamp.prototype.add_reciver_recive_time = function (time) {
        if (this.reciver_recive_time !== null)
            throw Error("A Timestamp can not be resigned");
        this.reciver_recive_time = Number(time);
    };
    TimeStamp.prototype.add_server_recive_time = function (time) {
        if (this.server_recive_time !== null)
            throw Error("A Timestamp can not be resigned");
        this.server_recive_time = Number(time);
    };
    TimeStamp.prototype.toObject = function () {
        return {
            sender_sent_time: this.sender_sent_time,
            server_sent_time: this.server_sent_time,
            reciver_recive_time: this.reciver_recive_time,
            server_recive_time: this.server_recive_time
        };
    };
    return TimeStamp;
}());
exports.TimeStamp = TimeStamp;
