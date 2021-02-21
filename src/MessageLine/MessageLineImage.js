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
exports.MessageLineImage = void 0;
var MessageLine_1 = require("./MessageLine");
var MessageLineImage = /** @class */ (function (_super) {
    __extends(MessageLineImage, _super);
    function MessageLineImage(_a) {
        var file_name = _a.file_name, file_type = _a.file_type, file_key = _a.file_key, preview_img_64b = _a.preview_img_64b, preview_img_buffer = _a.preview_img_buffer, file_buffer = _a.file_buffer;
        var _this = _super.call(this, 'image') || this;
        _this.meta_data = {
            file_name: file_name,
            file_type: file_type,
            file_key: file_key ? file_key : null,
            preview_text: file_name.substr(0, 16),
            preview_img_64b: preview_img_64b ? preview_img_64b : null,
            preview_img_buffer: preview_img_buffer ? preview_img_buffer : null
        };
        if (file_buffer)
            _this.data = file_buffer;
        else
            _this.data = null;
        return _this;
    }
    return MessageLineImage;
}(MessageLine_1.MessageLine));
exports.MessageLineImage = MessageLineImage;
