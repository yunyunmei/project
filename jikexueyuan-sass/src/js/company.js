define(['./jquery'],function (jquery) {
    $(function () {
        var i = 0;
        //获取图片的数量
        var size = $('.company-wrapper .company-wrappper-banner .company-img a').size();
        var clone = [];
        clone[0] = $('.company-wrapper .company-wrappper-banner .company-img a').first().clone();
        for (var j = 1; j < 6; j++) {
            clone[j] = $('.company-wrapper .company-wrappper-banner .company-img a').next().clone();
        }
        //将图片复制粘贴到最后一张的后面
        $('.company-wrapper .company-wrappper-banner .company-img').append(clone);
        //向右的按钮
        $('.company-wrapper .btn-r').click(function () {
            moveR();
        });
        // 向左的按钮
        $('.company-wrapper .btn-l').click(function () {
            moveL();
        });
        // 向左
        function moveL() {
            i--;
            if (i == -1) {
                $('.company-wrapper .company-wrappper-banner .company-img').css({left: -(size - 1) * 160});
                i = size - 1;
            }
            $('.company-wrapper .company-wrappper-banner .company-img').stop().animate({left: -i * 160}, 500);
        }

        //向右
        function moveR() {
            i++;
            if (i == size) {
                $('.company-wrapper .company-wrappper-banner .company-img').css({left: -480});
                i = 1;
            }
            $('.company-wrapper .company-wrappper-banner .company-img').stop().animate({left: -i * 160}, 500);
        }
    });
});
