/**
 * Created by zj on 15/11/2.
 */

define(function (require, exports, module) {
    var man = require('./man');
    //var css = require('../css/main.css');

    var $ = function (id) {
        return document.getElementById(id);
    }

    exports.init = function () {
        var s1 = $('s1');
        var s2 = $('s2');
        var s3 = $('s3');

        var name = man.getName();
        var age = man.getAge();
        var msg = man.say();


        var apply_list = '<h1>{{wellDone}}</h1>';


        var data = {wellDone:" Jim, well done!"}
        var render = template.compile(apply_list);
        var html = render(data);

        s1.innerHTML = name;
        s2.innerHTML = age;
        //s3.innerHTML = msg;
        s3.innerHTML =html;
    }
});