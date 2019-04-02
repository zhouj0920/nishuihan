$(function () {
    // 导航下拉菜单
    topnav();
    // 历程tab栏
    myscourse();
    // 服務场景
    scene();
    // 可待资讯
    information();
    // 轮播图
    carousel();
    //垂直行业解决方案
    scheme();
    // 联系我们
    lxwm();
    // 侧边导航
    cathetnav();


});
var topnav = function () {
    $(".menu").hover(function () {
        $(this).children(".ul").stop().slideToggle();
    });

};
var myscourse = function () {
    $('.coursenav li').on('mouseenter', function () {
        var idx = $(this).index();
        $(this).find('a').addClass('nowbj').find('img').attr('src', '');
        $(this).siblings().find('a').removeClass('nowbj').find('img').attr('src', 'img/city_disc.jpg')
        $('.setuptime li').eq(idx).addClass('show').siblings().removeClass('show')
    })
};
var scene = function () {
    $('.scene > .w > ul li').on('click', function () {
        var idx = $(this).index();
        $(this).addClass('border').siblings().removeClass('border');
        $('.serlist ul').eq(idx).stop().fadeIn().siblings().stop().fadeOut().removeClass('show');
    })
};
var carousel = function () {
    var i = 0;
    var b = 0;
    var w = $('.bannerlb ul:first li').width();
    var lastli = $('.bannerlb ul:last li');
    var time = setInterval(function () {
        i++;
        b++;
        b >= 3 ? b = 0 : b = b;
        if (i >= 4) {
            i = 1;
            $('.bannerlb ul:first').css('left', 0)
        }
        $('.bannerlb ul:first').animate({ left: -i * w });
        lastli.children().removeClass('nowcolor');
        lastli.eq(b).children().addClass('nowcolor')
    }, 3000)
    lastli.on('mouseenter', function () {

    })
};
var information = function () {

    var ulh = $('.messalist').height();
    var i = 0;
    var b = 0;
    var time = setInterval(function () {
        i += -1;
        if (Math.abs(i) > ulh) {
            i = -38
        }
        $('#messalistb ul').css('top', i);
    }, 30);


    var time1 = setInterval(function () {
        b += -1;
        if (Math.abs(b) > ulh) {
            b = -38
        }
        $('#messalisttop ul').css('top', b);
    }, 30);
    $('#messalisttop')
        .on('mouseover', function () {
            clearInterval(time1)
        }).on('mouseout', function () {
            clearInterval(time1)
            time1 = setInterval(function () {
                b += -1;
                if (Math.abs(b) > ulh) {
                    b = -38
                }
                $('#messalisttop ul').css('top', b);
            }, 30);
        })

    $('#messalistb')
        .on('mouseover', function () {
            clearInterval(time)
        })
        .on('mouseout', function () {
            clearInterval(time)
            time = setInterval(function () {
                i += -1;
                if (Math.abs(i) > ulh) {
                    i = -38
                }
                $('#messalistb ul').css('top', i);
            }, 30);
        })

};
var scheme = function () {
    $('.boxTab ul:last>li').on('click', function () {
        var idx = $(this).index();
        $(this).addClass('color').siblings().removeClass('color');
        $('.boxTab ul:first li').eq(idx).fadeIn().siblings().fadeOut().removeClass('show');
    })
};
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
