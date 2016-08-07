// 控制用户路径找到对应函数

var model = require("../model/model.js");


// 后台部分

// 登录后台
exports.login = function (req, res) {
    var params = new Array(
        req.body.username,
        req.body.password
    );
    model.login(params, res);
};
//注册
exports.register = function (req,res) {
    var  params = new Array(
        req.body.username,
        req.body.password
    );
    console.log(params);
    model.register(params,res);
}

// 添加
exports.adminadd = function (req, res) {
    var params = new Array(
        req.body.newstitle,
        req.body.category,
        req.body.newsimg,
        req.body.newscontent,
        req.body.time
    );
    model.adminadd(params, res);
};


// 删除
exports.admindel = function (req, res) {
    var iddel = req.body.iddel;
    model.admindel(iddel, res);
};


// 修改
exports.adminupdate = function (req, res) {
    var idupdate = req.body.idupdate;
    model.adminupdate(idupdate, res);
};

exports.adminrep = function (req, res) {
    var rep = new Array(
        req.body.newstitle,
        req.body.category,
        req.body.newsimg,
        req.body.newscontent,
        req.body.time,
        req.body.id
    );
    model.adminrep(rep, res);
};

//预览
exports.adminpre = function (req,res) {
    var idpreview = req.body.idpreview;
    console.log(idpreview);
    model.adminpre(idpreview,res);
}

// 左侧导航栏切换
exports.adminquery = function (req, res) {
    model.adminquery(req, res);
};

exports.adminnav = function (req, res) {
    model.adminnav(req, res);
};
exports.adminmenu = function (req, res) {
    var category = req.body.category;
    model.adminmenu(category, res);
};


//前台部分
exports.indexmenu = function (req, res) {
    var category = req.body.category;
    console.log(category);
    model.indexnav(category, res);
};