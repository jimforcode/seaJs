/**
 * Created by zj on 15/11/2.
 */
define(function (require, exports, module) {
    var _msg = 'not set msg!';

    exports.setMsg = function (msg) {
        _msg = msg;
    }

    exports.getMsg = function () {
        return _msg;
    }
});