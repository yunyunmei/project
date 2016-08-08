//单列模式   减少全局变量,

$(document).ready(function () {
    //    设置下拉菜单和侧边栏的显示与隐藏
    var topNav = {
        init: function () {
            var me = this;
            me.render();
            me.bind();
        },
        render: function () {
            var me = this;
            me.navMore = $('#navMore,#moreProduct');
            me.moreProduct = $('#moreProduct');
        },
        bind: function () {
            var me = this;
            me.navMore.mouseenter(function () {
                me.moreProduct.show();
            });
            me.navMore.mouseleave(function () {
                me.moreProduct.hide();
            });
        }
    };
    //设置
    var setting = {
        init: function () {
            var me = this;
            me.render();
            me.bind();
        },
        render: function () {
            var me = this;
            me.settingmMenu = $('#settingmMenu,#baiduSetting');
            me.baiduSetting = $('#baiduSetting');
        },
        bind: function () {
            var me = this;
            me.settingmMenu.mouseover(function () {
                me.baiduSetting.show();
            });
            me.settingmMenu.mouseout(function () {
                me.baiduSetting.hide();
            });
        }
    };
    // 我的关注推荐等切换
    var tap = {
        init: function (argument) {
            var me = this;
            this.render();
            this.bind();
        },
        render: function () {
            var me = this;
            me.btn = $('#sCtnerMenus span');
            me.sCtnerMenus = $("#sCtnerMenus .current");
            me.centerContentdb = $('#centerContent .db');
            me.centerContentadd = $('#centerContent .add');
        },
        bind: function () {
            var me = this;
            me.btn.each(function (index) {
                $(this).hover(function () {
                    //移除导航栏class
                    $("#sCtnerMenus .current").removeClass("current");
                    $("#centerContent .db").removeClass("db");
                    //主体内容的切换
                    $("#centerContent .add").eq(index).addClass("db");
                    $(this).addClass("current");
                })
            })
        }
    };
//    换肤
    var skin = {
        init: function () {
            var me = this;
            me.render();
            me.bind();
        },
        render: function () {
            var i = 1;
            var me = this;
            me.sSkin = $("#sSkin");
            me.changeskin = $(".change-skin");
            me.skinup = $(".skin-up");
            me.photobody = $(".photo-body img");
            me.skinpreview = $(".skin-preview");
            me.body = $("body");
        },
        bind: function () {
            var i = 1;
            var me = this;
            //换肤界面出现
            me.sSkin.click(function () {
                me.changeskin.animate({height: "288px"}, 50);
            });
            //隐藏
            me.skinup.click(function () {
                me.changeskin.animate({height: "0px"}, 50);
            });
            //换肤的效果展示
            me.photobody.hover(function () {
                i = $(this).index();
                me.skinpreview.css("background", 'url(images/bg' + i + '.jpg)');
                me.skinpreview.css("background-size", "264px 180px");
            });
            me.photobody.click(function () {
                me.body.css("background", 'url(images/bg' + i + '.jpg)');
                storage.setItem(strKey, 'url(images/bg' + i + '.jpg)');
            });
        }
    };
    //    页面下滑 出现搜索框
    var seach = {
        init: function () {
            var me = this;
            me.render();
            me.bind();
        },
        render: function () {
            var me = this;
            me._window = $(window);
            me.topsearch = $('.top-search');
        },
        bind: function () {
            var me = this;
            me._window.scroll(function () {
                if (me._window.scrollTop() > 200) {
                    me.topsearch.fadeIn(50);
                } else {
                    me.topsearch.fadeOut(50);
                }
            });
        }
    };
    //回到顶部
    //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
    var totop = {
        init: function () {
            var me = this;
            me.render();
            me.bind();
        },
        render: function () {
            var me = this;
            me._window = $(window);
            me.totop = $('#toTop');
            me.boyd = $('body,html')
        },
        bind: function () {
            var me = this;
            me._window.scroll(function () {
                if (me._window.scrollTop() > 100) {
                    me.totop.fadeIn(50);
                }
                else {
                    me.totop.fadeOut(50);
                }
            });
            //当点击跳转链接后，回到页面顶部位置
            me.totop.click(function () {
                me.boyd.animate({scrollTop: 0}, 400);
                return false;
            });
        }
    };
    tap.init();
    totop.init();
    topNav.init();
    skin.init();
    setting.init();
    seach.init();
});
var strKey = "strKey";
var storage = window.localStorage;
// 存储背景
function onStart() {
    if (storage.getItem("strKey") != null) {
        var backc = storage.getItem("strKey");
        document.body.style.background = backc;
    }
}