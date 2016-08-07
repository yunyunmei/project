$(document).ready(function() {
    //添加 新闻
    $(".add-news").click(function() {
        var h = $(document).height();
        var w = $(document).width();
        $(".mask").css({
            height: h,
            width: w,
            display: "block"
        });
        $(".addnews-box,.mask").show();
        var t = $("#addtitle");
    });
    $(".addnews-box .close").click(function() {
        $(".addnews-box,.mask").hide();
        document.location.reload();
    });
    
    //添加新闻中的ajax
    $("#add-btn").click(function() {
        var t = $('#addtitle').val();
        event.preventDefault();
        if (t == '') {
            alert("标题不能为空")
        } else {
            $.ajax({
                type: "post",
                url: "/adminadd",
                data: {

                    "newstitle": $('#addtitle').val(),
                    "category": $('#addnecategory').val(),
                    "newsimg": $('#addimg').val(),
                    "newscontent": $('#addcontent').val(),
                    "time":$('#addtime').val()
                },
                success: function(data) {
                    alert("新闻添加成功");
                    $(".addnews-box,.mask").hide();
                    document.location.reload();
                }
            });
        }

    });

    // 后台显示数据库ajax
    $.ajax({
        type: "post",
        url: "/adminquery",
        dataType: "json",
        success: function(json) {
            var query = json;
            var addquery = "";
            $.each(query, function(index, array) {
                addquery +=
                    '<tr>' +
                    '<td class="col-md-1">' + '<input type="checkbox" id="num" value="' + array["id"] + '" > ' + '</td>' +
                    '<td class="col-md-1">' + array["id"] + '</td>' +
                    '<td class="col-md-3">' + array["newstitle"] + '</td>' +
                    '<td class="col-md-4">' + array["category"] + '</td>' +
                    '<td class="col-md-1">' + new Date(array["time"]).toLocaleDateString() + '</td>' +
                    '<td class="col-md-2">' +
                    '<div class="prev">预览</div>' +
                    '<div class="update">修改</div>' +
                    '</td>' +
                    '</tr>'
            });
            $("#tbody").prepend(addquery);

            //修改新闻
            $(".update").each(function(a) {
                $(this).click(function() {
                    var h = $(document).height();
                    var w = $(document).width();
                    $(".mask").css({
                        height: h,
                        width: w,
                        display: "block"
                    });
                    $(".updatenews-box").show();

                    $(".updatenews-box .close").click(function() {
                        $(".updatenews-box,.mask").hide();

                    });
                    var idupdate = $("#tbody tr").eq(a).find("#num").val();
                    $.ajax({
                        type: "post",
                        url: "/adminupdate",
                        data: {
                            'idupdate': idupdate
                        },
                        dataType: "json",
                        success: function(json) {
                            var query = json;
                            var addquery = "";
                            $.each(query, function(index, array) {
                                addquery +=
                                    '<p>' +
                                    '<label for="updatetitle">新闻标题</label>' +
                                    '<input type="text" class="title" id="updatetitle" name="title" value="' + array["newstitle"] + '">' +
                                    '</p>' +
                                    '<p>' +
                                    '<label for="updatecategory">新闻类别</label>' +
                                    '<select class="newstype" id="updatecategory" name="newstype">' +
                                    '<option value="">'+ array["category"]+'</option>' +
                                    '<option value="推荐">推荐</option>' +
                                    '<option value="百家">百家</option>' +
                                    '<option value="本地">本地</option>' +
                                    '<option value="娱乐">娱乐</option>' +
                                    '<option value="社会">社会</option>' +
                                    '</select>' +
                                    '</p>' +
                                    '<p>' +
                                    '<label for="updateimg">图片地址</label>' +
                                    '<input type="text" class="img" id="updateimg" name="img" value="' + array["newsimg"] + '">' +
                                    '</p>' +
                                    '<p>' +
                                    '<label for="updatecontent">新闻内容</label>' +
                                    '<textarea name="content" id="updatecontent" class="content" >' + array["newscontent"] + '</textarea>' +
                                    '</p>' +
                                    '<p>' +
                                    '<label for="updatetime">时间</label>' +
                                    '<input type="text" class="time" id="updatetime" name="time"  value="' + new Date(array["time"]).toLocaleDateString() + '">' +
                                    '</p>' +
                                    '<p class="center">' +
                                    '<input type="submit" id="update-btn" value="提交" class="box-btn">' +
                                    '<input type="reset" value="重置" class="box-btn">' +
                                    '</p>'
                            });
                            $(".updatenews-box form").html(addquery);
                            // 添加修改好的新闻
                            $("#update-btn").click(function() {
                                event.preventDefault();
                                $.ajax({
                                    type: "post",
                                    url: "/adminrep",
                                    data: {
                                        "newstitle": $('#updatetitle').val(),
                                        "category": $('#updatecategory').val(),
                                        "newsimg": $('#updateimg').val(),
                                        "newscontent": $('#updatecontent').val(),
                                        "time": $('#updatetime').val(),
                                        "id": idupdate
                                    },
                                    success: function(data) {
                                        alert("修改成功");
                                        $(".updatenews-box,.mask").hide();
                                        document.location.reload();
                                    }
                                });
                            });
                        }
                    });
                });

            });
            //预览新闻
            $(".prev").each(function(a) {
                $(this).click(function() {
                    var h = $(document).height();
                    var w = $(document).width();
                    $(".mask").css({
                        height: h,
                        width: w,
                        display: "block"
                    });
                    $(".previewnews-box").show();

                    $(".previewnews-box .close").click(function() {
                        $(".previewnews-box,.mask").hide();

                    });
                    var idpreview = $("#tbody tr").eq(a).find("#num").val();
                    $.ajax({
                        type: "post",
                        url: "/adminpre",
                        data: {
                            'idpreview': idpreview
                        },
                        dataType: "json",
                        success: function(json) {
                            var query = json;
                            var addquery = "";
                            $.each(query, function(index, array) {
                                addquery +=
                                    '<p>' +
                                    '<label for="previewtitle">新闻标题</label>' +
                                    '<input type="text" class="title" id="previewtitle" name="title" value="' + array["newstitle"] + '">' +
                                    '</p>' +
                                    '<p>' +
                                    '<label for="previewcategory">新闻类别</label>' +
                                    '<select class="newstype" id="previewcategory" name="updatecategory">' +
                                    '<option value="">'+ array["category"]+'</option>' +
                                    '</select>' +
                                    '</p>' +
                                    '<p>' +
                                    '<label for="previewimg">图片地址</label>' +
                                    '<input type="text" class="img" id="previewimg" name="img" value="' + array["newsimg"] + '">' +
                                    '</p>' +
                                    '<p>' +
                                    '<label for="previewcontent">新闻内容</label>' +
                                    '<textarea name="content" id="previewcontent" class="content" >' + array["newscontent"] + '</textarea>' +
                                    '</p>' +
                                    '<p>' +
                                    '<label for="previewtime">时间</label>' +
                                    '<input type="text" class="time" id="previewtime" name="time"  value="' + new Date(array["time"]).toLocaleDateString() + '">' +
                                    '</p>'
                            });
                            $(".previewnews-box form").html(addquery);
                        }
                    });
                });

            });
        },
        error: function() {
            $("#tbody").html("请求数据失败");
        }
    });





    // 全选删除
    $("#all-num").click(function() {
        if (this.checked) {
            $("#tbody :checkbox").attr("checked", true);
        } else {
            $("#tbody :checkbox").attr("checked", false);
        }
    });

    //    删除新闻
    $(".del-news").click(function() {
        $(this).css({
            background: "#5dabf0",
            color: "#fff"
        });
        var checkboxs = $(':checkbox');
        var iddel = '';
        $.each($(':checkbox'), function(index, obj) {
            if (obj.checked) {
                iddel += ",'" + $(this).val() + "'";
            }
        });
        event.preventDefault();
        if (iddel == '') {
            alert("没有要删除的内容，请选择");
            document.location.reload();
        } else {
            $.ajax({
                type: "post",
                url: "/admindel",
                data: {
                    'iddel': iddel.substr(1)
                },
                success: function(data) {
                    alert('删除后不可恢复，确定要删除吗？');
                    document.location.reload();
                }
            });
        };

    });

    // 导航栏显示后台栏目
    $.ajax({
        type: "post",
        url: "/adminnav",
        dataType: "json",
        success: function(json) {
            var query = json;
            addquery = "";
            $.each(query, function(index, array) {
                addquery += '<div class="info-title">' + array["category"] + '</div>'
            });
            $(".nav-info").append(addquery);

            //切换菜单
            $(".info-title").each(function(a) {
                $(this).click(function() {
                    var menutype = $(".info-title").eq(a).text();
                    console.log(menutype);
                    $.ajax({
                        type: "post",
                        url: "/adminmenu",
                        dataType: "json",
                        data: {
                            'category': menutype
                        },
                        success: function(json) {
                            var query = json;
                            var addquery = "";
                            $.each(query, function(index, array) {
                                addquery +=
                                    '<tr>' +
                                    '<td class="col-md-1">' + '<input type="checkbox" id="num" value="' + array["id"] + '" > ' + '</td>' +
                                    '<td class="col-md-1">' + array["id"] + '</td>' +
                                    '<td class="col-md-3">' + array["newstitle"] + '</td>' +
                                    '<td class="col-md-4">' + array["category"] + '</td>' +
                                    '<td class="col-md-1">' + new Date(array["time"]).toLocaleDateString() + '</td>' +
                                    '<td class="col-md-2">' +
                                    '<div class="prev">预览</div>' +
                                    '<div class="update">修改</div>' +
                                    '</td>' +
                                    '</tr>'
                            });
                            $("#tbody").html(addquery);
                            //修改新闻
                            $(".update").each(function(a) {
                                $(this).click(function() {
                                    var h = $(document).height();
                                    var w = $(document).width();
                                    $(".mask").css({
                                        height: h,
                                        width: w,
                                        display: "block"
                                    });
                                    $(".updatenews-box").show();

                                    $(".updatenews-box .close").click(function() {
                                        $(".updatenews-box,.mask").hide();

                                    });
                                    var idupdate = $("#tbody tr").eq(a).find("#num").val();
                                    $.ajax({
                                        type: "post",
                                        url: "/adminupdate",
                                        data: {
                                            'idupdate': idupdate
                                        },
                                        dataType: "json",
                                        success: function(json) {
                                            var query = json;
                                            var addquery = "";
                                            $.each(query, function(index, array) {
                                                addquery +=
                                                    '<p>' +
                                                    '<label for="updatetitle">新闻标题</label>' +
                                                    '<input type="text" class="title" id="updatetitle" name="title" value="' + array["newstitle"] + '">' +
                                                    '</p>' +
                                                    '<p>' +
                                                    '<label for="updatecategory">新闻类别</label>' +
                                                    '<select class="newstype" id="updatecategory" name="updatecategory">' +
                                                    '<option value="">'+ array["category"]+'</option>' +
                                                    '<option value="推荐">推荐</option>' +
                                                    '<option value="百家">百家</option>' +
                                                    '<option value="本地">本地</option>' +
                                                    '<option value="娱乐">娱乐</option>' +
                                                    '<option value="社会">社会</option>' +
                                                    '</select>' +
                                                    '</p>' +
                                                    '<p>' +
                                                    '<label for="updateimg">图片地址</label>' +
                                                    '<input type="text" class="img" id="updateimg" name="img" value="' + array["newsimg"] + '">' +
                                                    '</p>' +
                                                    '<p>' +
                                                    '<label for="updatecontent">新闻内容</label>' +
                                                    '<textarea name="content" id="updatecontent" class="content" >' + array["newscontent"] + '</textarea>' +
                                                    '</p>' +
                                                    '<p>' +
                                                    '<label for="updatetime">时间</label>' +
                                                    '<input type="text" class="time" id="updatetime" name="time"  value="' + new Date(array["time"]).toLocaleDateString() + '">' +
                                                    '</p>' +
                                                    '<p class="center">' +
                                                    '<input type="submit" id="update-btn" value="提交" class="box-btn">' +
                                                    '<input type="reset" value="重置" class="box-btn">' +
                                                    '</p>'
                                            });
                                            $(".updatenews-box form").html(addquery);
                                            // 添加修改好的新闻
                                            $("#update-btn").click(function() {
                                                event.preventDefault();
                                                $.ajax({
                                                    type: "post",
                                                    url: "/adminrep",
                                                    data: {
                                                        "newstitle": $('#updatetitle').val(),
                                                        "category": $('#updatecategory').val(),
                                                        "newsimg": $('#updateimg').val(),
                                                        "newscontent": $('#updatecontent').val(),
                                                        "time": $('#updatetime').val(),
                                                        "id": idupdate
                                                    },
                                                    success: function(data) {
                                                        alert("修改成功");
                                                        $(".updatenews-box,.mask").hide();
                                                        document.location.reload();
                                                    }
                                                });
                                            });
                                        }
                                    });
                                });

                            });
                            //预览新闻
                            $(".prev").each(function(a) {
                                $(this).click(function() {
                                    var h = $(document).height();
                                    var w = $(document).width();
                                    $(".mask").css({
                                        height: h,
                                        width: w,
                                        display: "block"
                                    });
                                    $(".previewnews-box").show();

                                    $(".previewnews-box .close").click(function() {
                                        $(".previewnews-box,.mask").hide();

                                    });
                                    var idpreview = $("#tbody tr").eq(a).find("#num").val();
                                    $.ajax({
                                        type: "post",
                                        url: "/adminpre",
                                        data: {
                                            'idpreview': idpreview
                                        },
                                        dataType: "json",
                                        success: function(json) {
                                            var query = json;
                                            var addquery = "";
                                            $.each(query, function(index, array) {
                                                addquery +=
                                                    '<p>' +
                                                    '<label for="previewtitle">新闻标题</label>' +
                                                    '<input type="text" class="title" id="previewtitle" name="title" value="' + array["newstitle"] + '">' +
                                                    '</p>' +
                                                    '<p>' +
                                                    '<label for="previewcategory">新闻类别</label>' +
                                                    '<select class="newstype" id="previewcategory" name="updatecategory">' +
                                                    '<option value="">'+ array["category"]+'</option>' +
                                                    '</select>' +
                                                    '</p>' +
                                                    '<p>' +
                                                    '<label for="previewimg">图片地址</label>' +
                                                    '<input type="text" class="img" id="previewimg" name="img" value="' + array["newsimg"] + '">' +
                                                    '</p>' +
                                                    '<p>' +
                                                    '<label for="previewcontent">新闻内容</label>' +
                                                    '<textarea name="content" id="previewcontent" class="content" >' + array["newscontent"] + '</textarea>' +
                                                    '</p>' +
                                                    '<p>' +
                                                    '<label for="previewtime">时间</label>' +
                                                    '<input type="text" class="time" id="previewtime" name="time"  value="' + new Date(array["time"]).toLocaleDateString() + '">' +
                                                    '</p>'
                                            });
                                            $(".previewnews-box form").html(addquery);
                                        }
                                    });
                                });

                            });
                        }
                    });
                });
            });
        },
        error: function() {
            $("#tbody").html("请求数据失败");

        }
    });




    $("#headernav").click(function() {
        $(".nav").slideDown(400);
        event.stopPropagation();
    });

    $(".nav").click(function() {
        event.stopPropagation();
    });
    $(".nav-close").click(function() {
        $("nav").slideUp(400);
    });
    

});




window.onload = function() {
    function getDate() {
        var today = new Date();
        var date;
        date = (today.getFullYear()) + "-" + (today.getMonth() + 1) + "-" + today.getDate();
        return date;
    }
    window.setInterval(function() {
        document.getElementById("addtime").value = getDate();
        document.getElementById("updatetime").value = getDate();
    }, 1000);
}