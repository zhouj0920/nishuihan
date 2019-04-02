$(function () {
    //遮挡
    $('.tanchu_2').click(function () {
        $('.tanchu').css('display', 'none');
        $('.zhedang').css('display', 'none');
    });
    //nav 导航栏each遍历
    $('#nav_ul>li').each(function (index, ele) {
        var move = -150 * index + 'px';
        $(ele).css('backgroundPosition', move + '  0');
    });
    $('#nav_ul>li').mouseenter(function () {
        $(this).css('backgroundPositionY', '-60px')
    }).mouseleave(function () {
        $(this).css('backgroundPositionY', '0')
    })

    // 回到顶部按钮
    $(window).scroll(function () {
        var num = document.documentElement.scrollTop;
        if (num >= 100) {
            $('.huidaodingbu').css('display', 'block');
        } else {
            $('.huidaodingbu').css('display', 'none');
        }
    });
    $('.huidaodingbu').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 1000);
        return false;
    });


    //第一个轮播图(新闻行)
    var imgIndex = 0;
    $('.yuandian_ul>li').hover(function () {
        $(this).addClass('current').siblings().removeClass('current');
        imgIndex = $(this).index();
        var move = -imgIndex * $('#xinwen_li').width();
        $('.xinwen_ul').stop().animate({ left: move }, 500);
        $('.xinwen_ul li').eq(imgIndex).addClass('xinwen_li').siblings('li').removeClass('xinwen_li');
    });


    //第二个轮播图(同人站)
    //复制一张
    var firstLi = $('.zhirangfang li').eq(0).clone(true);
    $('.zhirangfang.zhirangfang_xian ul').append(firstLi);
    //给右箭头添加点击事件
    $('#arrright_s').click(function () {
        console.log(imgIndex);
        imgIndex++;
        // console.log(imgIndex);
        var number = $('.zhirangfang.zhirangfang_xian ul li').length;

        if (imgIndex > number) {
            //瞬间移动到第一张图
            console.log(123);

            $('.zhirangfang.zhirangfang_xian ul').css('left', '0px');
            imgIndex = 1;
        }
        var move = -imgIndex * $('.zhirangfang.zhirangfang_xian ul .tongren_li').width() + 'px';
        console.log(move);
        //移动的距离
        var yidongjuli = $('.zhirangfang.zhirangfang_xian ul .tongren_li').width() + 'px';
        $('.zhirangfang.zhirangfang_xian ul').stop().animate({ left: move }, yidongjuli);
    });
    //给左箭头添加点击事件
    $('#arrleft_s').click(function () {
        imgIndex--;
        var number = $('.zhirangfang.zhirangfang_xian ul li').length;
        if (imgIndex < 0) {
            //瞬间移动到第一张图
            console.log(123);

            $('.zhirangfang.zhirangfang_xian ul').css('left', '-2900px');
            imgIndex = number;
        }
        var move = -imgIndex * $('.zhirangfang.zhirangfang_xian ul .tongren_li').width() + 'px';
        // console.log(move);

        $('.zhirangfang.zhirangfang_xian ul').stop().animate({ left: move }, 260);
    });







    //同人站
    $('.tongrenzhan_ul>li').mouseover(function () {

        $(this).addClass('actives');
        var index = $(this).index();
        console.log(index);

        $('.tongrenzhan_box>div').eq(index).addClass('zhirangfang_xian').siblings('div').removeClass('zhirangfang_xian');


    });
    $('.tongrenzhan_ul>li').mouseout(function () {
        $(this).removeClass('actives');
    });
    $('.tongrenzhan_box>div').mouseover(function () {
        var index = $(this).index();
        $('.tongrenzhan_ul>li').eq(index).addClass('actives').siblings('li').removeClass('actives');
        imgIndex = 0;
    });
    $('.tongrenzhan_box>div').mouseout(function () {
        var index = $(this).index();
        console.log(index);

        $('.tongrenzhan_ul>li').eq(index).removeClass('actives');
    });
    //游戏视频
    $('.youxi_nav>span').click(function () {
        $(this).addClass('atters').siblings('span').removeClass('atters');
        var index = $(this).index();
        $('.zuixinshipin ul').eq(index).addClass('shipinul').siblings('ul').removeClass('shipinul');

    });


    var myLis = document.getElementById('shang_ul').children;
    var myLine = document.getElementById('biankuang');
    for (var i = 0; i < myLis.length; i++) {
        myLis[i].setAttribute('index', i);
        myLis[i].onmouseover = function () {
            var index = this.getAttribute('index');
            var move = index * 118;
            myLine.style.left = move + 'px';
        }
    }


    //最新新闻
    $('.shang_ul>li').hover(function () {
        var index = $(this).index();
        var move = index * 110;
        $('.xia>ul').eq(index).addClass('xia_ulxian').siblings('ul').removeClass('xia_ulxian');
        // $('.shang_spans>img').css('left',move +'px');
    });

    //定时切换
    var imgIndex2 = 0;

    var timer = setInterval(function () {
        $('.xinwen_ul li').eq(0).clone(true).appendTo($('.xinwen_ul'));
        imgIndex2++;
        if (imgIndex2 >= 5) {
            $('.xinwen_ul').css('left', '0px');
            imgIndex2 = 1;
            $('.yuandian_ul li').eq(imgIndex2 - 1).addClass('current').siblings('li').removeClass('current');

        }
        // if(imgIndex2 == 5){
        //     $('.yuandian_ul li').eq(0).addClass('current').siblings('li').removeClass('current');
        // }

        var move = -imgIndex2 * $('.xinwen_li').width();
        console.log(move);

        $('.xinwen_ul').stop().animate({ left: move }, 500);
        $('.yuandian_ul li').eq(imgIndex2).addClass('current').siblings('li').removeClass('current');
    }, 2000);
    $('.xinwen-left').hover(function () {
        //停止定时器
        clearInterval(timer);
    }, function () {
        //重新开启定时器
        timer = setInterval(function () {
            imgIndex2++;
            if (imgIndex2 >= 5) {
                $('.xinwen_ul').css('left', '0px');
                imgIndex2 = 0;
                $('.yuandian_ul li').eq(imgIndex2 - 1).addClass('current').siblings('li').removeClass('current');

            }

            var move = -imgIndex2 * $('.xinwen_li').width();
            console.log(move);

            $('.xinwen_ul').stop().animate({ left: move }, 500);
            $('.yuandian_ul li').eq(imgIndex2).addClass('current').siblings('li').removeClass('current');
        }, 2000)
    })

});