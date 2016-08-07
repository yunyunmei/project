// app.js开始
// 定义模块
var restify = require('restify');
var server = restify.createServer();
var controller = require("./controller/controller.js");

// // 组件管理
server.use(restify.acceptParser(server.acceptable));
server.use(restify.jsonp());
server.use(restify.bodyParser({ mapParams: false }));


// 设置静态资源路径
server.get(/\/?.*/, restify.serveStatic({
    directory: './view',
    default:'phone.html'
}));


//创建服务器
server.listen(3000, function() {
    console.log("前台地址：http://127.0.0.1:3000/，后台地址：http://127.0.0.1:3000/index.html");
});

// 新闻系统开始
// 后台部分

// 登录
server.post('/login', controller.login);
//注册
server.post('/register',controller.register)
// 增
server.post('/adminadd', controller.adminadd);

// 删
server.post('/admindel',controller.admindel);

// 改
server.post('/adminupdate',controller.adminupdate);
server.post('/adminrep', controller.adminrep);

// 查
server.post('/adminquery',controller.adminquery);
server.post('/adminnav',controller.adminnav);
server.post('/adminmenu',controller.adminmenu);
server.post('/adminpre',controller.adminpre);

//前台部分开始

// 查
server.post('/indexmenu',controller.adminmenu);