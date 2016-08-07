define(['./jquery'],function (jquery) {
    $(function () {
        //?
        $('.system .way').hover(function () {
            $('.system .way-infor').fadeIn();
        }, function () {
            $('.system .way-infor').fadeOut();
        });
        //图片的翻转
        $('.system .card-transform').hover(function () {
            $(this).find('.front').css('transform','rotateY(180deg)');
            $(this).find('.back').css('transform','rotateY(0deg)');
        },function () {
            $(this).find('.front').css('transform','rotateY(0deg)');
            $(this).find('.back').css('transform','rotateY(180deg)');
        });
    });
});