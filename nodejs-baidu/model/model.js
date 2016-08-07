// 数据库处理

var mysql = require('mysql');


//打开数据库连接
function openCon() {
    var con = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'myapp'
    });
    return con;
};

// 后台部分开始

// 登录后台
exports.login = function(params, res) {
    var sql = "SELECT * FROM `user` WHERE `users`= ? AND `password`=? ";
    openCon().query(sql, params, function(error, results) {

        if (error) {
            console.log(error);
            res.end();
        } else {
            console.log(results);
            if (results == ''||undefined||null){
                res.json('login is wrong');
            }else {
                res.json('login ok');
            }
            res.end();
        }
    });
};
//注册
exports.register = function (params,res) {
    var sql = "INSERT INTO `myapp`.`user` (`users`, `password`) VALUES (?, ?)";
    openCon().query(sql,params,function (error,result) {
        if (error) {
            console.log(error);
            res.json(error);
        } else {
            console.log(params);
            res.json('register success');
            res.end();
        }
    })
};

// 添加
exports.adminadd = function(params, res) {
    var sql = 'INSERT INTO `myapp`.`news` (`newstitle`, `category`, `newsimg`, `newscontent`, `time`) VALUES ( ?, ?, ?, ?, ?)';
    openCon().query(sql, params, function(error, result) {
        if (error) {
            console.log(error);
            res.json(error);
        } else {
            console.log(params);
            res.json(result);
            res.end();
        }
    })
};


// 删除
exports.admindel = function(iddel, res) {
    var sql = 'DELETE FROM `news` WHERE `id` IN (' + iddel + ')';
    openCon().query(sql, function(error, result) {
        if (error) {
            console.log(error);
            res.end();
        } else {
            console.log('id' + iddel + '已删除');
            res.end();
        }
    })
};


// 修改
exports.adminupdate = function(idupdate, res) {
    var sql = 'SELECT * FROM NEWS WHERE `ID` = ' + idupdate + '';
    openCon().query(sql, function(error, result) {
        if (error) {
            console.log(error);
            res.json(error);
        } else {
            // console.log(result);
            res.json(result);
            res.end();
        }
    })
};


exports.adminrep = function(rep, res) {
     var sql = "UPDATE `news` SET `newstitle`=?,`category`=?,`newsimg`=?,`newscontent`=?,`time`=? WHERE id = ?";
    openCon().query(sql,rep,function(error, result) {
        if (error) {
            console.log(error);
            res.json(error);
        } else {
            res.json(result);
            res.end();
        }
    })
};

//预览
exports.adminpre = function (idpreview,res) {
    var sql = 'SELECT * FROM NEWS WHERE `ID` = ' + idpreview + '';
    openCon().query(sql, function(error, result) {
        console.log(sql);
        if (error) {
            console.log(error);
            res.json(error);
        } else {
            console.log(result);
            res.json(result);
            res.end();
        }
    })
};

// 左侧导航栏切换
exports.adminquery = function(req, res) {
    var sql = 'SELECT * FROM news ORDER BY id DESC';
    openCon().query(sql, function(error, result) {
        if (error) {
            console.log(error);
            res.end();
        } else {
            openCon().end();
            // console.log(result);
            res.json(result);
            res.end();
        }
    });
};

exports.adminnav = function(req, res) {
    var sql = 'select category from news group by category';
    openCon().query(sql, function(error, result) {
        if (error) {
            console.log(error);
            res.end();
        } else {
            // console.log(result);
            openCon().end();
            res.json(result);
            res.end();

        }
    });
};

exports.adminmenu = function(category, res) {
    var sql = "SELECT * FROM NEWS WHERE `category` = ? ";
    openCon().query(sql,category, function(error, result) {
        console.log(category);
        if (error) {
            console.log(error);
            res.end();
        } else {
            console.log(result);
            openCon().end();
            res.json(result);
            res.end();

        }
    });
};


// 前台


exports.indexmenu = function(category, res) {
    var sql = 'SELECT * FROM NEWS WHERE `category` = ? ';
    openCon().query(sql, category, function(error, result) {
        if (error) {
            res.end();
        } else {
            openCon().end();
            console.log(category);
            res.json(result);
            res.end();

        }
    });
};