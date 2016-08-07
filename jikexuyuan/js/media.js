define(['./jquery'],function (jquery) {
    $(function () {
        var i = 0;
        //获取图片的数量
        var size = $('.media-wrapper .media-wrapper-banner .media-img a').size();
        var clone = [];
        clone[0] = $('.media-wrapper .media-wrapper-banner .media-img a').first().clone();
        for (var j = 1; j < 6; j++) {
            clone[j] = $('.media-wrapper .media-wrapper-banner .media-img a').next().clone();
        }
        //将图片复制粘贴到最后一张的后面
        $('.media-wrapper .media-wrapper-banner .media-img').append(clone);
        console.log($('.media-wrapper .media-wrapper-banner .media-img a').size());
        //向右的按钮
        $('.media-wrapper .btn-r').click(function () {
            moveR();
        });
        // 向左的按钮
        $('.media-wrapper .btn-l').click(function () {
            moveL();
        });
        // 向左
        function moveL() {
            i--;
            if (i == -1) {
                $('.media-wrapper .media-wrapper-bannerr .media-img').css({left: -(size - 1) * 160});
                i = size - 1;
            }
            $('.media-wrapper .media-wrapper-banner .media-img').stop().animate({left: -i * 160});
        }
        //向右
        function moveR() {
            i++;
            if (i == size) {
                $('.media-wrapper .media-wrapper-banner .media-img').css({left: -160});
                i = 0;
            }
            $('.media-wrapper .media-wrapper-banner .media-img').stop().animate({left: -i * 160});
        }
    });
});