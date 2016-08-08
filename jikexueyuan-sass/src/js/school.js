define(['./jquery'],function (jquery) {
    $(function () {
        var i = 0;
        //获取图片的数量
        var size = $('.school-wrapper .school-wrapper-banner .school-img a').size();
        var clone = [];
        clone[0] = $('.school-wrapper .school-wrapper-banner .school-img a').first().clone();
        for (var j = 1; j < 7; j++) {
            clone[j] = $('.school-wrapper .school-wrapper-banner .school-img a').next().clone();
        }
        //将图片复制粘贴到最后一张的后面
        $('.school-wrapper .school-wrapper-banner .school-img').append(clone);
        //向右的按钮
        $('.school-wrapper .btn-r').click(function () {
            moveR();
        });
        // 向左的按钮
        $('.school-wrapper .btn-l').click(function () {
            moveL();
        });
        // 向左
        function moveL() {
            i--;
            if (i == -1) {
                $('.school-wrapper .school-wrapper-bannerr .school-img').css({left: -(size - 1) * 136});
                i = size - 1;
            }
            $('.school-wrapper .school-wrapper-banner .school-img').stop().animate({left: -i * 136});
        }

        //向右
        function moveR() {
            i++;
            if (i == size) {
                $('.school-wrapper .school-wrapper-banner .school-img').css({left: -136});
                i = 0;
            }
            $('.school-wrapper .school-wrapper-banner .school-img').stop().animate({left: -i * 136});
        }
    });
});