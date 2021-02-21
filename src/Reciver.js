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
exports.Reciver = void 0;
var User_1 = require("./User");
var Reciver = /** @class */ (function (_super) {
    __extends(Reciver, _super);
    function Reciver(_a) {
        var user_id = _a.user_id, _b = _a.name, name = _b === void 0 ? "" : _b;
        return _super.call(this, { user_id: user_id, name: name }) || this;
    }
    return Reciver;
}(User_1.User));
exports.Reciver = Reciver;
