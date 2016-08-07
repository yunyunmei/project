$(document).ready(function () {
    $('#loginBtn').click(function () {
       event.preventDefault();
        $.ajax({
            type:"post",
            url:"/login",
            data:{
                'username': $('#username').val(),
                'password': $('#password').val()
            },
            success: function (json) {
                var login = json;
                // console.log(login);
                if (login == "login ok") {
                    alert("登录成功，欢迎回来！");
                    window.location.href="../admin.html";
                }else {
                    alert("输入有误,请重新输入!");
                }
            }
        });
    });
    $('#subbtn').click(function () {
        $.ajax({
            type:"post",
            url:"/register",
            data:{
                'username': $('#rUsername').val(),
                'password': $('#rPassword').val()
            },
            success:function (json) {
                var login = json;
                if (login == "register success") {
                    alert("注册成功！");
                    window.location.href="../index.html";
                }else {
                    alert("注册失败,请重新注册!");
                }
            }
        })
    })
});