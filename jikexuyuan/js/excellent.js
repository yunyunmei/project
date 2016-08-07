define(['./jquery'],function (jquery) {
    $(function () {
        //?
        $('.excellent .way').hover(function () {
            $('.excellent .way-infor').fadeIn();
        }, function () {
            $('.excellent .way-infor').fadeOut();
        });
//    人物简介
        $('.lesson-card').hover(function () {
            $(this).find('.describe').css({opacity: 1});
        },function () {
            $(this).find('.describe').css({opacity: 0});
        });
    });
});