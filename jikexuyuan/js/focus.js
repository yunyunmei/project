//轮播图下的内容
define(['./jquery'],function (jquery) {
    $(function () {
        var i = 0;
        //获取图片的数量
        var size = $('.main-wrapper ul li').size();
        var clone = [];
        clone[0] = $('.main-wrapper ul li').first().clone();
        for (var j = 1; j < 7; j++) {
            clone[j] = $('.main-wrapper ul li').next().clone();
        }
        //将图片复制粘贴到最后一张的后面
        $('.main-wrapper ul').append(clone);
        //向右的按钮
        $('.main-wrapper .btn-r').click(function () {
            moveR();
        });
        // 向左的按钮
        $('.main-wrapper .btn-l').click(function () {
            moveL();
        });
        // 向左
        function moveL() {
            i--;
            if (i == -1) {
                $('.main-wrapper ul li').css({left: -(size - 1) * 186.5});
                i = size - 1;
            }
            $('.main-wrapper ul li').stop().animate({left: -i * 186.5});
        }

        //向右
        function moveR() {
            i++;
            if (i == size) {
                $('.main-wrapper ul li').css({left: -186.5});
                i = 0;
            }
            $('.main-wrapper ul li').stop().animate({left: -i * 186.5});
        }
    });
});