$(document).ready(function () {
    //搜索框
    $("#web_search_header").hover(function () {
        $(".search-btn").addClass("search-btn2");
        $(".hot-words").hide();
    },function () {
        $('.hot-words').show();
        $(".search-btn").removeClass("search-btn2");
    })
});
//下拉菜单
$(document).ready(function () {
    //鼠标移入移出时
    $('#navbox .navbox').hover(function () {
        $(this).find('.navpanel').show();
    }, function () {
        $('.navpanel').hide();
    });
    //下拉菜单
    $('#navbox .navbox ul.navpanel li').hover(function () {
        $(this).addClass('bc');
        $(this).find('span').addClass('bln');
    }, function () {
        $(this).removeClass('bc');
        $(this).find('span').removeClass('bln');
    });
});
// 中间导航左边的菜单
$(document).ready(function () {
    //鼠标移入移出时
    $('.content-nav-left ul > li').hover(function () {
        $(this).find('.lesson-list-show').show();
        $(this).find(' div > a').addClass('word-color');
    }, function () {
        $('.lesson-list-show').hide();
        $(this).find(' div > a').removeClass('word-color');
    });
});


//中间导航部分左右切换
$(document).ready(function () {
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
    })
});

<!--中间导航下面部分-->
$(document).ready(function () {
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


//战略合作企业
$(document).ready(function () {
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


//合作院校
$(document).ready(function () {
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

//媒体报道
$(document).ready(function () {
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


//右边导航的菜单
$(document).ready(function () {
    //鼠标移入移出时
//     $(".recommend ul .recommend-hover").toggle(topicHandler,topicHandler);
//     function topicHandler(){
// //使用fadeIn、show、slideDown可以完成某个容器的显示
// //使用fadeOut、hide、slideUp可以完成某个容器的隐藏
// //所以可以通过各个的toggle来完成两个之间的轮换
//         $(this).next("ul").toggle(1000);
//     }
// });
    $('.recommend ul .recommend-hover').mouseover(function () {
        $('.recommend-show').fadeOut();
        $('.recommend ul .recommend-list').fadeIn();
        $('.type-list > li').hover(function () {
            $(this).find('.content').show();
            $(this).addClass('active');
        }, function () {
            $('.type-list > li .content').hide();
            $(this).removeClass('active');
        });
        if ($('.recommend').mouseout()) {
            $('.recommend ul .recommend-list').fadeOut();
            $('.recommend-show').fadeIn();
        }
    }, function () {

    });


    // $('.recommend').mouseout(function () {
    //      $('.recommend ul .recommend-list').fadeOut();
    //     $('.recommend-show').fadeIn();
    // });
});
// $('.recommend ul .recommend-list').fadeOut();
// $('.recommend-show').fadeIn();


//wiki
$(document).ready(function () {
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

//精品系列课程
$(document).ready(function () {
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
//知识体系图
$(document).ready(function () {
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

//职业路径图
$(document).ready(function () {
    $('.projectpath .way').hover(function () {
        $('.projectpath .way-infor').fadeIn();
    }, function () {
        $('.projectpath .way-infor').fadeOut();
    });
});


//热门推荐  最新课程等
$(document).ready(function () {
    $('.lesson-list li').hover(function () {
        //播放按钮的显示
        $(this).find('.lessonplay').fadeIn();
        //显示简介
        $(this).find('.lesson-infor').addClass('hei').slideDown();
        $(this).find('.lesson-infor p').slideDown();
        //学习人数的显示
        $(this).find('.learn-number').show();
        $(this).find('.lessonicon-box').css({bottom: -2});
        $(this).find('.zhongji').show();
    }, function () {
        $('.lessonplay').fadeOut();
        $(this).find('.lesson-infor').css({height: 88});
        $(this).find('.lesson-infor').removeClass('hei');
        $(this).find('.lesson-infor p').hide();
        $(this).find('.learn-number').hide();
        $(this).find('.lessonicon-box').css({bottom: 4});
        $(this).find('.zhongji').hide();
    });
    //切换
    $('.hot-lesson li').each(function (index) {
        $(this).hover(function () {
            $('.hot-lesson .ft').hide();
                  $('.hot-lesson .lesson-list').eq(index).addClass("bln");
                   $(this).find('nav').show();
        }, function () {
            $('.hot-lesson .lesson-list').eq(index).removeClass("bln");
        });
    });
});

//回到顶部
$(document).ready(function () {
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
    })
    $('.gotop span.top').click(function () {
        $('html,body').animate({scrollTop:'0px'},500);
    })
    $('.jk-app').hover(function () {
        $('.appewm').show();
    },function () {
        $('.appewm').hide();
    })
    $('.qq-online1').hover(function () {
        $('.kefu').show();
    },function () {
        $('.kefu').hide();
    })

});

//悬浮的图片
$(document).ready(function () {
   $('.close').click(function () {
       $(this).hide();
       $(this).next().hide();
   }) 
});


