define(['./jquery'],function (jquery) {
    $(function () {
        //左边的菜单栏
        $('.content-nav-left ul > li').hover(function () {
            $(this).find('.lesson-list-show').show();
            $(this).find(' div > a').addClass('word-color');
        }, function () {
            $('.lesson-list-show').hide();
            $(this).find(' div > a').removeClass('word-color');
        });
        
        
        
        //这个地方有错 没弄出来
        
        
        
        
        
        //问答 wiki 课程 社群
        $('.recommend ul .recommend-hover').mouseover(function () {
            $('.recommend-show').hide();
            $('.recommend ul .recommend-list').show();
            $('.type-list > li').hover(function () {
                $(this).find('.content').show();
                $(this).addClass('active');
            }, function () {
                $('.type-list > li .content').hide();
                $(this).removeClass('active');
            });
        });
    });
});