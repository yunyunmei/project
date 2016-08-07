$(function() {
    //导航
    var sInfo = {
        category: '推荐'
    };
    getData(sInfo);
    $(".nav-list li span").each(function(index) {
        $(this).click(function() {
            $(".nav-list li span.tabin").removeClass("tabin");
            $(this).addClass("tabin");
            var sInfo = {
                category: $(".tabin").text()
            };
            getData(sInfo);
        })
    })
    //ajax
    function getData(sInfo) {
        $.ajax({
            type: 'post',
            url: 'db/news.php',
            dataType: 'json',
            data: sInfo,
            beforeSend: function() {
                $("#loading").html("<img id='loading' src='./img/loading.gif'>");
            },
            success: function(json) {
                $("#loading").html("");
                $("#list ul").empty();
                console.log(json);
                var li = "";
                var list = json.list;
                $.each(list, function(index, array) { //遍历json数据列
                    li += "<li><a href='#'><img src='" + array['img'] + "'><p>" + array['title'] + "</p></a><b>" + array['time'] + "</b></li>";
                });
                $("#list ul").append(li);
            },
            error: function() {
                $("#loading").html("<img id='loading' src='./img/loading.gif'>");
                $("#list ul").html("请求数据失败");
            }
        });
    }
    //回到顶部
    $(window).scroll(function() {
        var sc = $(window).scrollTop();
        var rwidth = $(window).width()
        if (sc > 0) {
            $(".gotop-globalview").css("display", "block");
            $(".gotop-globalview").css("left", (rwidth - 36) + "px")
        } else {
            $(".gotop-globalview").css("display", "none");
        }
    })
    $(".gotop-globalview").click(function() {
        var sc = $(window).scrollTop();
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    })
})
