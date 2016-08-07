define(['./jquery'],function (jquery) {
    $(function () {
        $('.lesson-list li').hover(function () {
            //播放按钮的显示
            $(this).find('.lessonplay').fadeIn();
            //显示简介
            $(this).find('.lesson-infor').addClass('hei').slideDown();
            $(this).find('.lesson-infor p').slideDown();
            //学习人数的显示
            $(this).find('.learn-number').show();
            $(this).find('.lessonicon-box').css({bottom: -2});
            $(this).find('.zhongji').show();
        }, function () {
            $('.lessonplay').fadeOut();
            $(this).find('.lesson-infor').css({height: 88});
            $(this).find('.lesson-infor').removeClass('hei');
            $(this).find('.lesson-infor p').hide();
            $(this).find('.learn-number').hide();
            $(this).find('.lessonicon-box').css({bottom: 4});
            $(this).find('.zhongji').hide();
        });
        
        //切换
        //这个地方有错 没弄出来
        $('.hot-lesson').each(function (index) {
            console.log(index)
            $(this).mouseover(function () {
                $('.hot-lesson .ft').hide();
                $('.hot-lesson .lesson-list').eq(index).addClass("bln");
                $(this).find('nav').show();
            }, function () {
                $('.hot-lesson .lesson-list').eq(index).removeClass("bln");
            });
        });
    });
});