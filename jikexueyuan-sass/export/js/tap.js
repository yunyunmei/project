define(['./jquery'],function (jquery) {
    $(function () {
        $(function () {
            var i = 0;
            //复制第一张图片
            var clone = $('.banner .content-nav-img li').first().clone();
            //将第一张复制粘贴到最后一张的后面
            $('.banner .content-nav-img').append(clone);
            //获取图片的数量
            var size = $('.banner .content-nav-img li').size();
            //根据图片的数量增加效果
            for (var j = 0; j < size - 1; j++) {
                $('.banner .content-num').append('<li></li>');
            }
            //按钮
            $('.banner .content-num li').first().addClass('on');

            // 鼠标划入圆点进行图像切换的效果
            $('.banner .content-num li').hover(function () {
                var index = $(this).index();
                i = index;
                $('.banner .content-nav-img').stop().animate({left: -index * 560}, 500);
                $(this).addClass('on').siblings().removeClass('on');
            });
            // 自动轮播
            //定时器
            var t = setInterval(moveR, 2000);
            //对banner定时器的操作  鼠标离开定时器继续运行
            $(".banner").hover(function () {
                clearInterval(t);
            }, function () {
                t = setInterval(moveR, 2000);
            });
            //向右的按钮
            $('.banner .btn-r').click(function () {
                moveR();
            });
            // 向左的按钮
            $('.banner .btn-l').click(function () {
                moveL();
            });
            // 向左
            function moveL() {
                i--;
                if (i == -1) {
                    $('.banner .content-nav-img').css({left: -(size - 1) * 560});
                    i = size - 2;
                }
                $('.banner .content-nav-img').stop().animate({left: -i * 560}, 500);
                $('.banner .content-num li').eq(i).addClass('on').siblings().removeClass('on');
            }
            //向右
            function moveR() {
                i++;
                if (i == size) {
                    $('.banner .content-nav-img').css({left: 0});
                    i = 1;
                }
                $('.banner .content-nav-img').stop().animate({left: -i * 560}, 500);

                if (i == size - 1) {
                    $('.banner .content-num li').eq(0).addClass('on').siblings().removeClass('on');
                } else {
                    $('.banner .content-num li').eq(i).addClass('on').siblings().removeClass('on');
                }
            }
        });
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