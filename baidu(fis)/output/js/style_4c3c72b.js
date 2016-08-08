$(document).ready(function () {
    //    设置下拉菜单和侧边栏的显示与隐藏
    $('#navMore, #moreProduct').mouseover(function () {
        $('#moreProduct').show();
    }).mouseout(function () {
        $('#moreProduct').hide();
    });
    //设置
    $("#settingmMenu").mouseover(function () {
        $("#baiduSetting").show();
    }).mouseout(function () {
        $("#baiduSetting").hide();
    });
    //    页面下滑 出现搜索框
    $(window).scroll(function () {
        if ($(window).scrollTop() > 200){
            //    显示搜索框
            $(".top-search").fadeIn(50);
        }else {
            $(".top-search").fadeOut(50);
        }
    });
//     我的关注推荐等切换
    $('#sCtnerMenus span').each(function (index) {
        $(this).hover (function () {
            //移除导航栏class
            $("#sCtnerMenus .current").removeClass("current");
            $("#centerContent .db").removeClass("db");
            //主体内容的切换
            $("#centerContent .add").eq(index).addClass("db");
            $(this).addClass("current");
        })
    });

//    换肤
    var i=1;
    //换肤界面出现
    $("#sSkin").click(function(){
        $(".change-skin").animate({height:"100%"},50);
    });
    //隐藏
    $(".skin-up").click(function(){
        $(".change-skin").animate({height:"0px"},50);
    });
    //换肤的效果展示
    $(".photo-body img").hover(function(){
        i=$(this).index();
        $(".skin-preview").css("background",'url(bg/bg'+i+'.jpg)');
        $(".skin-preview").css("background-size","264px 180px");
    });
    $(".photo-body img").click(function(){
        $("body").css("background",'url(bg/bg'+i+'.jpg)');
        storage.setItem(strKey, 'url(bg/bg'+i+'.jpg)');
    });
 

    //回到顶部
    //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
    $(function () {
        $(window).scroll(function(){
            if ($(window).scrollTop()>100){
                $("#toTop").fadeIn(50);
            }
            else
            {
                $("#toTop").fadeOut(50);
            }
        });
        //当点击跳转链接后，回到页面顶部位置
        $(".to-top").click(function(){
            $('body,html').animate({scrollTop:0},400);
            return false;
        });
    });
});
var strKey = "strKey";
var storage = window.localStorage;
// 存储背景
function onStart(){
    if (storage.getItem("strKey") != null){
        var backg = storage.getItem("strKey");
        document.body.style.background = backg;
    }
}
