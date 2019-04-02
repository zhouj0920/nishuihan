$(function () {
    // 新闻资讯
    $('.drop-bx>li>a').each(function (i) {
        var index = -i * 24;
        $(this).css('backgroundPositionY', index + 'px');
    })
    $('.drop-bx>li>a').hover(function () {
        $(this).css('backgroundPositionX', '-85px');
    }, function () {
        $(this).css('backgroundPositionX', '0px');
    })

    //官方论坛
    $('.jobs>li>a').each(function (i) {
        var index = -(i - 1) * 24;
        if (i != 0) {
            $(this).css('backgroundPositionY', index + 'px');
        }
    })
    $('.jobs>li>a').hover(function () {
        $(this).css('backgroundPositionX', '-85px');
    }, function () {
        $(this).css('backgroundPositionX', '0px');
    })

    //宗门流派
    $('.down-dashi>li>a').each(function (i) {
        var index = -i * 24;
        if (i != 3) {
            $(this).css('backgroundPositionY', index + 'px');
        } else {
            $(this).css('backgroundPositionY', index - 24 + 'px');
        }
    })
    //江湖知己
    $('.down-dashi>li>a').hover(function () {
        $(this).css('backgroundPositionX', '-85px');
    }, function () {
        $(this).css('backgroundPositionX', '0px');
    })

    //视频图赏
    $('.down-media>li>a').each(function (i) {
        var index = -i * 24;
        $(this).css('backgroundPositionY', index + 'px');
    })
    $('.down-media>li>a').hover(function () {
        $(this).css('backgroundPositionX', '-85px');
    }, function () {
        $(this).css('backgroundPositionX', '0px');
    })

    // $('.drop').hide(); //全都隐藏
    //nav
    $('.nav-box>li').hover(function () {  //鼠标移入
        $(this).children('.drop').stop().fadeIn(); //淡入

        $(this).find('.xian').css({  //底下线的动画需要配合css3属性
            'transform': 'scaleX(1)',
            'backgroundColor': '#aa9452'
        });

        if ($(this).index() != 0) //除了第一个不需要改背景,其他的都改
        {
            $(this).children('a').css('backgroundPositionY', '0px');
        }
        if ($(this).index() == 2) {  //官方论坛的无限滚动线变颜色
            $(this).find('.border').css('backgroundColor', '#aa9452');
        }

    }, function () {  //鼠标移出 (还原)
        $(this).children('.drop').stop().fadeOut();

        $(this).find('.xian').css({
            'transform': 'scaleX(0.3)',
            'backgroundColor': '#39456c'
        });

        if ($(this).index() != 0) {
            $(this).children('a').css('backgroundPositionY', '-50px');
        }

        if ($(this).index() == 2) {
            $(this).find('.border').css('backgroundColor', '#39456c')
        }
    })
    $('#btn-audio').click(function () {
        if ($(this).css('backgroundPosition') == '-709px -325px') {
            $(this).css('backgroundPosition', '-700px -146px');
        } else {
            $(this).css('backgroundPosition', '-709px -325px');
        }
        toggleSound();
    })
})
function toggleSound() {
    var music = document.getElementById("audio1");//获取ID
    if (music.paused) { //判读是否播放  
        music.paused = false;
        music.play(); //没有就播放 
    } else {
        music.paused = true;
        music.pause(); //有就关闭
    }
}