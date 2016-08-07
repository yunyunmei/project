define(['./jquery'],function (jquery) {
    $(function () {
        //搜索框
        $("#web_search_header").hover(function () {
            $(".search-btn").addClass("search-btn2");
            $(".hot-words").hide();
        },function () {
            $('.hot-words').show();
            $(".search-btn").removeClass("search-btn2");
        });
    });
});