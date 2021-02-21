"use strict";
exports.__esModule = true;
exports.MessageLine = void 0;
var MessageLine = /** @class */ (function () {
    function MessageLine(type) {
        this.meta_data = {};
        this.data = null;
        this.type = type;
    }
    MessageLine.prototype.toObject = function () {
        return {
            type: this.type,
            meta_data: this.meta_data,
            data: this.data
        };
    };
    return MessageLine;
}());
exports.MessageLine = MessageLine;
