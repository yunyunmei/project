define(['./jquery'],function (jquery) {
    $(function () {
        //?
        $('.wiki .way').hover(function () {
            $('.wiki .way-infor').fadeIn();
        }, function () {
            $('.wiki .way-infor').fadeOut();
        });
//    图画
        $('.wiki-wrapper .one-wiki .imgbox').hover(function () {
            $(this).find('.look').show();
            $(this).find('.fengmian').addClass('transf');
        }, function () {
            $(this).find('.look').hide();
            $(this).find('.fengmian').removeClass('transf');
        });
    });
});