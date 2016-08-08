define(['./jquery'], function (jquery) {
    $(function () {
//鼠标移入移出时
        $('#navbox .navbox').hover(function (index) {
            $('#navbox .navbox').find('.navpanel').show();
            var index = $(this).find('a').data("data-index");
        }, function () {
            $('.navpanel').hide();
        });
        // //下拉菜单
        $('#navbox .navbox ul.navpanel li').hover(function () {
            $(this).addClass('bc');
            $(this).find('span').addClass('bln');
        }, function () {
            $(this).removeClass('bc');
            $(this).find('span').removeClass('bln');
        });
    });
});
