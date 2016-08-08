define(['./jquery'],function (jquery) {
    $(function () {
        var scrollTop = $(window).scrollTop();
        if(scrollTop == 0){
            $('.gotop span.top').css('display','none');
        }
        $(window).scroll(function () {
            var scrollTop = $(window).scrollTop();
            if(scrollTop == 0){
                $('.gotop span.top').fadeOut();
            }else{
                $('.gotop span.top').fadeIn();
            }
        });
        $('.gotop span.top').click(function () {
            $('html,body').animate({scrollTop:'0px'},500);
        });
        $('.jk-app').hover(function () {
            $('.appewm').show();
        },function () {
            $('.appewm').hide();
        });
        $('.qq-online1').hover(function () {
            $('.kefu').show();
        },function () {
            $('.kefu').hide();
        });
        $('.close').click(function () {
            $(this).hide();
            $(this).next().hide();
        })
    });
});