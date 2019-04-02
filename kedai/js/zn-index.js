$(function () {
    //侧边固定导航    
    // $("#r-side li").mouseover(function(){
    //     $(this).find("div").stop().fadeIn();
    // })
    // $("#r-side li").mouseout(function(){
    //     $(this).find('div').stop().fadeOut();
    // })
    //到顶部
    var num = 0;
    $(document).scroll(function () {
        num = $(this).scrollTop();
        //滑动距离显示导航栏        
        if (num >= 100) {
            $(".top-box").css("backgroundColor", "#624f48");
            $(".rentou").show();
            $(".side").show();
        } else {
            $(".top-box").css("backgroundColor", "");
            $(".rentou").hide();
            $(".side").hide();
        }

    });
    //
    //搜索框
    $(".navbar-nav ul li").eq(9).click(function () {
        $(".navbar-nav>ul").hide();
        $(".navbar-nav .search").show();
        return false;
    })
    $(".close").click(function () {
        $(".navbar-nav>ul").show();
        $(".navbar-nav .search").hide();
        return false;
    })

    //高端定制优势tab栏目切换
    $(".youshi-center li").mouseover(function () {
        $(this).css("backgroundColor", "#624f48");
        $(this).find("a").css("color", "#fff");
    })
    $(".youshi-center li").mouseout(function () {
        $(this).css("backgroundColor", "");
        $(this).find("a").css("color", "");
    })
    $(".youshi-center li").click(function () {
        $(this).css("backgroundColor", "#624f48");
        $(this).find("a").css("color", "#fff");
        var index = $(this).index();
        $(".youshi-bottom .youshi-b-box").eq(index).siblings().hide();
        $(".youshi-bottom .youshi-b-box").eq(index).show();
        return false;
    })
    //高端定制流程鼠标移入
    $(".education-item .title span").mouseover(function () {
        $(this).siblings().show();
    })
    $(".education-item .title span").mouseout(function () {
        $(this).siblings().hide();
    })

    //服务特色鼠标移入事件
    $(".service-box").mouseover(function () {
        $(this).stop().animate({ "padding": "0" }, 300);
        $(this).find(".service-box-b").stop().animate({ "height": "248px" }, 300);
        $(this).find("a").stop().animate({ "bottom": "20px" }, 300);
    })
    $(".service-box").mouseout(function () {
        $(this).stop().animate({ "padding": "0 15px" }, 300);
        $(this).find(".service-box-b").stop().animate({ "height": "180px" }, 300);
        $(this).find("a").stop().animate({ "bottom": "-55px" }, 300);
    })

    //模态窗口
    $("#login").click(function () {
        $(".motai").show();
        $(".motai .motai-login").eq(0).show();
        return false;
    })
    $("#zhuce").click(function () {
        $(".motai").show();
        $(".motai .motai-login").eq(1).show();
        return false;
    })

    $("#close").click(function () {
        $(".motai").hide();
        $(".motai .motai-login").hide();
        return false;
    })
    $("#close1").click(function () {
        $(".motai").hide();
        $(".motai .motai-login").hide();
        return false;
    })


    // 联系我们
    lxwm();
    // 侧边导航
    cathetnav();


})
var lxwm = function () {
    window.onscroll = function () {
        var num = document.documentElement.scrollTop;
        if (num > 200) {
            $('.lxwm').css('bottom', -35)
        } else {
            $('.lxwm').css('bottom', -350)
        }
        if (num > 400) {
            $('.cathetnav').css('right', -450)
        } else {
            $('.cathetnav').css('right', -500)
        }
    }
};
var cathetnav = function () {
    function huadongw(i, num) {
        $('.cathetnav ul').find('li').eq(i).on('mouseenter', function () {
            $(this).css('left', num)
        }).on('mouseleave', function () {
            $(this).css('left', '0')
        })
    }
    huadongw(1, -80);
    huadongw(2, -450);
    huadongw(3, -450);
    //  返回顶部
    $('.cathetnav ul').find('li').eq(4).click(function () {
        $("html,body").stop().animate({ scrollTop: 0 }, 1000);
    })
    //下拉菜单
    $(".cathetlist dl").hover(function () {
        $(this).find('dd').stop().slideToggle(500);
    })
    $('#firlis').on('mouseenter', function () {
        $(this).stop().animate({ left: -80 }, 1, function () {
            $(this).stop().animate({ height: 171, top: -170 })
        })
    }).on('mouseleave', function () {
        $(this).stop().animate({ height: 50, top: -50 }, 1, function () {
            $(this).stop().animate({ left: 0 })
        })
    })


}



