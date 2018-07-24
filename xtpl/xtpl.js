var xtpl = require('xtpl');
var compiled;

module.exports.prepare = function (done) {
    xtpl.render(__dirname + '/tpl_escaped.html', {},{cache:true,catchError:false}, function(error,content){
        compiled = function(data, cb){
            xtpl.render(__dirname + '/tpl_escaped.html',data, {cache:true,catchError:false},function(error,content){
                cb(null, content);
            });
        };
        done();
    });
};

module.exports.prepareUnescaped = function (done) {
    xtpl.render(__dirname + '/tpl_escaped.html', {},{cache:true,catchError:false}, function(error,content){
        compiled = function(data, cb){
            xtpl.render(__dirname + '/tpl_unescaped.html',data,{cache:true,catchError:false}, function(error,content){
                cb(null, content);
            });
        };
        done();
    });
};

module.exports.step = function (data, done) {
    compiled(data, done);
};