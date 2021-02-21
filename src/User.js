"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(_a) {
        var user_id = _a.user_id, _b = _a.name, name = _b === void 0 ? null : _b;
        this.user_id = "";
        this.meta = { name: null };
        this.user_id = user_id;
        this.meta = { name: name };
    }
    User.prototype.toObject = function () {
        return {
            user_id: this.user_id,
            name: (this.meta.name ? this.meta.name : null)
        };
    };
    return User;
}());
exports.User = User;
