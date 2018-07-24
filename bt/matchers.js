var BT = require('enb-bt').BT;
var bt = new BT();

bt.match('html', function (ctx) {
    ctx.setTag('html');
    ctx.setContent(ctx.ctx.content);
});

bt.match('head', function (ctx) {
    ctx.setTag('head');
    ctx.setContent(ctx.ctx.content);
});

bt.match('title', function (ctx) {
    ctx.setTag('title');
    ctx.setContent(ctx.ctx.content);
});

bt.match('body', function (ctx) {
    ctx.setTag('body');
    ctx.setContent(ctx.ctx.content);
});

bt.match('p', function (ctx) {
    ctx.setTag('p');
    ctx.setContent(ctx.ctx.content);
});

bt.match('a', function (ctx) {
    ctx.setTag('a');
    ctx.setContent(ctx.ctx.content);
});

module.exports = bt;