$(document).ready(function() {

    //先给不需要显示的元素添加隐藏
    $("nav tr").eq(1).nextAll().css({ display: "none" });
    $(".nav-line").last().css({ display: "none" });
    $("footer").css({ display: "none" });

    //给第一元素添加样式
    $("nav td").eq(0).find("span").addClass("cur");


    // 点击nav更多效果
    $("nav .more").click(function() {
        $(this).hide();
        $("nav tr").eq(1).nextAll().show();
        $(".nav-line").last().show();
        $("footer").show();
        event.stopPropagation();
    });
    $("nav .less").click(function() {
        $("nav .more").show();
        $("nav tr").eq(1).nextAll().css({ display: "none" });
        $(".nav-line").last().css({ display: "none" });
        $("footer").css({ display: "none" });

    });

    // 显示nav
    $.ajax({
        type: "post",
        url: "/indexnav",
        dataType: "json",
        success: function(json) {
            var query = json;
            addquery = "";
            $.each(query, function(index, array) {
                addquery += '<td><div><b></b><span>' + array["type"] + '</span></div></td>'

            });
            $(".content tr").append(addquery);



            //切换菜单

            $("nav td").each(function(a) {
                $(this).click(function() {
                    $("nav").find("span").removeClass("cur");
                    $(this).find("span").addClass("cur");

                    var menutype = $("nav td").eq(a).find("span").text();
                    console.log(menutype);
                    $.ajax({
                        type: "post",
                        url: "/indexmenu",
                        dataType: "json",
                        data: {
                            'type': menutype
                        },
                        success: function(json) {

                            var query = json;
                            var addquery = "";
                            $.each(query, function(index, array) {
                                addquery +=
                                    '<div class="list-item">' +
                                    '<div class="list-main">' +
                                    '<div class="item-img"><img src="' + array["img"] + '" alt="' + array["title"] + '"></div>' +
                                    '<div class="item-title">' +
                                    '<div class="title">' + array["title"] + '</div>' +
                                    '<div class="desc">' + array["desc"] + '</div>' +
                                    '</div>' +
                                    '<div class="item-time">' +
                                    '<b>' + new Date(array["time"]).toLocaleString() +
                                    '</b>' +
                                    '</div>' +
                                    '</div>' +
                                    '</div>'
                            });
                            $("#article .list").html(addquery);
                        }
                    });
                });
            });
        },
        error: function() {
            $("#tbody").html("请求数据失败");

        }
    });



    // 显示article
    $.ajax({
        type: "post",
        url: "/adminquery",
        dataType: "json",
        success: function(json) {

            var query = json;
            var addquery = "";
            $.each(query, function(index, array) {
                addquery +=
                    '<div class="list-item">' +
                    '<div class="list-main">' +
                    '<div class="item-img"><img src="' + array["img"] + '" alt="' + array["title"] + '"></div>' +
                    '<div class="item-title">' +
                    '<div class="title">' + array["title"] + '</div>' +
                    '<div class="desc">' + array["desc"] + '</div>' +
                    '</div>' +
                    '<div class="item-time">' +
                    '<b>' + new Date(array["time"]).toLocaleString() +
                    '</b>' +
                    '</div>' +
                    '</div>' +
                    '</div>'
            });
            $("#article .list").prepend(addquery);



        },
        error: function() {
            $("#tbody").html("请求数据失败");

        }
    });
    $(".content").css({
        display: "none"
    })
    $(".top-right-subscribe").click(function() {
        $(".content").slideToggle(400);
        event.stopPropagation();
    });
    $("body").click(function() {
        $(".content").slideUp(400);
    });

    $(".content").click(function() {
        event.stopPropagation();
    });


});
