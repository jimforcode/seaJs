/**
 * Created by zj on 15/11/2.
 */

define(function (require11, exports, module11) {
    //require 引入需要的模块如jquery等
    var j = require11('./jquery-1.11.3.min');

    //exports可以把方法或属性暴露给外部
    exports.name = 'hi';

    exports.hi = function () {
        alert('hello');
    }
    exports.saySomething=function(){

        $("#asd").innerHTML="dddd";

        console.log("hey, man , well done!");
    }

    //module提供了模块信息
});