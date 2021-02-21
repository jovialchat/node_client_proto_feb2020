"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.MessageLineTextPlain = void 0;
var MessageLine_1 = require("./MessageLine");
var MessageLineTextPlain = /** @class */ (function (_super) {
    __extends(MessageLineTextPlain, _super);
    function MessageLineTextPlain(text) {
        var _this = _super.call(this, 'text') || this;
        _this.meta_data = {
            preview_text: text.substr(0, 16)
        };
        _this.data = text;
        return _this;
    }
    return MessageLineTextPlain;
}(MessageLine_1.MessageLine));
exports.MessageLineTextPlain = MessageLineTextPlain;
