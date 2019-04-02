$(function () {
    var picIndex = 0;
    var videoIndex = 0;
    var clickNum = 0;

    // tab初始化
    function tabInit() {
        picIndex = 0;
        videoIndex = 0;
        clickNum = 0;
        $('.tabNav li').eq(0).find('a').css({
            color: '#e9e0b9'
        })
        $('.tabNav li').eq(0).siblings('li').find('a').css({
            color: '#dbe9fe'
        })
        $('.tabNav .line').css({
            'top': '29px',
            'left': 10 + 'px'
        });
        $('.tabBox').eq(0).css('display', 'block').siblings().css('display', 'none');
    }

    // 主页雪山视频鼠标移动事件

    $('.containerVideo .right').mouseover(function () {
        $('.rightMask').hide();
    }).mouseout(function () {
        $('.rightMask').show();
    })

    // 主页左边视频点击事件

    function containerVideoLeft() {
        $('.gamePic').hide();
        $('.containerVideo').hide();
        $('.rightMask').hide();
        $('.change').show();
        $('.change_icon_l').hide();
        $('.change_icon_r').hide();
        $('.logoBtn').css('left', '20px');
        $('.picRight').css('zIndex', '-6');
        $('.videoLeft').css({ 'zIndex': '-2', 'width': '1000px' });
        $('.change_cover').show();
        var timer = setInterval(function () {
            if ($('.videoLeft').width() >= 1466) {
                clearInterval(timer);
                $('.change_icon_r').show();
                tabInit();
                $('.gameVideo').show();
            }
            $('.videoLeft').css('width', '+=6px');
        }, 2);

    }

    $('.containerVideo .left').on('click', containerVideoLeft);

    // 主页视频按钮事件
    $('.videoIcon').on('mouseover', function () {
        $(this).css('left', '514px');
        $('.videoIconSmall').show();
    })
    $('.videoIcon').on('mouseout', function () {
        $(this).css('left', '524px');
        $('.videoIconSmall').hide();
    })
    $('.videoIcon').on('click', containerVideoLeft)


    // 主页右边视频点击事件
    function containerVideoRight() {
        $('.containerVideo').hide();
        $('.rightMask').hide();
        $('.gameVideo').hide();
        $('.change').show();
        $('.change_icon_l').hide();
        $('.change_icon_r').hide();
        $('.change_cover').hide();
        $('.videoLeft').css({ 'zIndex': '-2', 'width': '900px' });
        $('.videoLeft').stop().animate({
            'top': '-200px',
            'width': '0px'
        }, 600, function () {
            tabInit();
            $('.gamePic').show();
            $('.videoLeft').css('zIndex', '-8');
            $('.change_icon_l').css('display', 'block');
            $('.change_icon_l').stop().animate({
                'left': '-20px'
            }, 600);
        });
    }

    $('.containerVideo .right').on('click', containerVideoRight);

    // 主页图片按钮事件
    $('.picIcon').on('mouseover', function () {
        $(this).css('right', '350px');
        $('.picIconSmall').show();
    })
    $('.picIcon').on('mouseout', function () {
        $(this).css('right', '360px');
        $('.picIconSmall').hide();
    })
    $('.picIcon').on('click', containerVideoRight)

    //动画页右边视频大图标鼠标移动和点击事件
    $('.change_icon_r').on('mouseenter', function () {
        $(this).css('backgroundPosition', '0 0');
    }).mouseleave(function () {
        $(this).css('backgroundPosition', '-298px 0');
    });
    $('.change_icon_r').on('click', function () {
        $(this).hide();
        $('.change_cover').hide();
        $('.gameVideo').hide();
        $('.logoBtn').css({
            'left': 'auto',
            'right': '-31px'
        });
        $('.videoLeft').stop().animate({
            'top': '-200px',
            'width': '0px'
        }, 600, function () {
            tabInit();
            $('.gamePic').show();
            $('.videoLeft').css('zIndex', '-8');
            $('.change_icon_l').css('display', 'block');
            $('.change_icon_l').stop().animate({
                'left': '-20px'
            }, 600);
        });
    });

    //动画页左边图片大图标鼠标移动和点击事件
    $('.change_icon_l').on('mouseenter', function () {
        $(this).css('backgroundPosition', '-609px 0');
    }).mouseleave(function () {
        $(this).css('backgroundPosition', '-911px 0');
    });
    $('.change_icon_l').on('click', function () {
        $(this).hide();
        $('.gamePic').hide();
        $('.logoBtn').css('left', '20px');
        $('.picRight').css('zIndex', '-6');
        $('.videoLeft').css('zIndex', '-2');
        $('.change_cover').show();
        var timer = setInterval(function () {
            if ($('.videoLeft').width() >= 1766) {
                clearInterval(timer);
                $('.change_icon_r').show();
                tabInit();
                $('.gameVideo').show();
            }
            $('.videoLeft').css('width', '+=12px');
        }, 2)
    });

    // 游戏图赏 

    $('.gamePic .tabNav').find('li').on('click', function () {
        picIndex = $(this).index();
        $(this).find('a').css({
            color: '#e9e0b9'
        })
        $(this).siblings('li').find('a').css({
            color: '#dbe9fe'
        })
        $('.gamePic .tabNav .line').css({
            'top': '29px',
            'left': picIndex * 100 + 10 + 'px'
        });
        $('.gamePic .tabBox').eq(picIndex).css('display', 'block').siblings().css('display', 'none');
    })


    $('.gamePic .tabNav li').on('mouseover', function () {
        $('.gamePic .tabNav li').eq(picIndex).find('a').css({
            color: '#e9e0b9'
        })
        $(this).find('a').css({
            color: '#e9e0b9'
        })

    })
    $('.gamePic .tabNav li').on('mouseout', function () {
        $('.gamePic .tabNav li').eq(picIndex).find('a').css({
            color: '#e9e0b9'
        })
        var navLiIndex = $(this).index();
        if (navLiIndex == picIndex) {
            $(this).find('a').css({
                color: '#e9e0b9'
            })
        } else {
            $(this).find('a').css({
                color: '#dbe9fe'
            })
        }


    })


    // 游戏视频

    $('.gameVideo .tabNav').find('li').on('click', function () {
        videoIndex = $(this).index();
        $(this).find('a').css({
            color: '#e9e0b9'
        })
        $(this).siblings('li').find('a').css({
            color: '#dbe9fe'
        })
        $('.gameVideo .tabNav .line').css({
            'top': '29px',
            'left': videoIndex * 100 + 10 + 'px'
        });
        $('.gameVideo .tabBox').eq(videoIndex).css('display', 'block').siblings().css('display', 'none');
    })


    $('.gameVideo .tabNav li').on('mouseover', function () {
        $('.gameVideo .tabNav li').eq(videoIndex).find('a').css({
            color: '#e9e0b9'
        })
        $(this).find('a').css({
            color: '#e9e0b9'
        })

    })
    $('.gameVideo .tabNav li').on('mouseout', function () {
        $('.gameVideo .tabNav li').eq(videoIndex).find('a').css({
            color: '#e9e0b9'
        })
        var navLiIndex = $(this).index();
        if (navLiIndex == videoIndex) {
            $(this).find('a').css({
                color: '#e9e0b9'
            })
        } else {
            $(this).find('a').css({
                color: '#dbe9fe'
            })
        }


    })

    // 游戏图赏tab滚轮事件
    var tabBoxTop = 0;
    var tabBoxHeight = 0;
    var boxHeight = 0;

    $('.gamePic .tabBox').on('mouseover', function () {
        $(this).mousewheel(function (event, delta) {
            var dir = delta > 0 ? 'Up' : 'Down';
            tabBoxTop = parseInt($(this).css('top'));
            tabBoxHeight = $(this).height();
            boxHeight = $('.gamePic .tabContentBox').height();
            if (dir == 'Up') {
                if (tabBoxTop >= 0) {
                    $(this).css('top', '0px');
                } else {
                    $(this).css('top', (tabBoxTop + 10) + 'px');
                }
            } else {
                if (tabBoxTop + tabBoxHeight <= boxHeight) {
                    $(this).css('top', boxHeight - tabBoxHeight + 'px');
                } else {
                    $(this).css('top', (tabBoxTop - 10) + 'px');
                }
            }
            return false;
        })
    })


    $('.gamePic .arrowDown').on('click', function () {
        console.log('picIndex' + picIndex);

        if (tabBoxTop + tabBoxHeight <= boxHeight + 155) {
            clickNum = 0;
        }
        clickNum += 155;
        console.log('clickNum' + clickNum);
        tabBoxTop = parseInt($('.gamePic .tabBox').eq(picIndex).css('top'));
        tabBoxHeight = $('.gamePic .tabBox').eq(picIndex).height();
        boxHeight = $('.gamePic .tabContentBox').height();
        if (tabBoxTop + tabBoxHeight > boxHeight + 155) {
            $('.gamePic .tabBox').eq(picIndex).css('top', -clickNum + 'px');
        } else {
            $('.gamePic .tabBox').eq(picIndex).css('top', boxHeight - tabBoxHeight + 'px');
        }
        console.log(tabBoxTop + tabBoxHeight > boxHeight + 155);
        console.log('tabBoxTop' + tabBoxTop);
        console.log('tabBoxHeight' + tabBoxHeight);
        console.log('boxHeight' + boxHeight);

    })

    $('.gamePic .arrowTop').on('click', function () {
        $('.gamePic .tabBox').eq(picIndex).css('top', '0px');
    })

    // 游戏视频tab滚轮事件
    var vtabBoxTop = 0;
    var vtabBoxHeight = 0;
    var vboxHeight = 0;
    $('.gameVideo .tabBox').on('mouseover', function () {
        $(this).mousewheel(function (event, delta) {
            var dir = delta > 0 ? 'Up' : 'Down';
            vtabBoxTop = parseInt($(this).css('top'));
            vtabBoxHeight = $(this).height();
            vboxHeight = $('.gameVideo .tabContentBox').height();
            if (dir == 'Up') {
                if (vtabBoxTop >= 0) {
                    $(this).css('top', '0px');
                } else {
                    $(this).css('top', (vtabBoxTop + 10) + 'px');
                }
            } else {
                if (vtabBoxHeight <= vboxHeight) {
                    $(this).css('top', '0px');
                } else if (vtabBoxTop + vtabBoxHeight <= vboxHeight) {
                    $(this).css('top', vboxHeight - vtabBoxHeight + 'px');
                }
                else {
                    $(this).css('top', (vtabBoxTop - 10) + 'px');
                }
            }
            return false;
        })
    })

    $('.gameVideo .arrowTop').on('click', function () {
        $('.gameVideo .tabBox').eq(videoIndex).css('top', '0px');
    })

    var timerDown = setInterval(function () {
        $('.arrowDown').animate({
            'bottom': '-20px',
            'opacity': 100
        }, 1000, function () {
            $(this).css({
                'bottom': '-10px',
                'opacity': 0
            })
        });
    }, 1000)



    $('.gamePic .tabBox li').on('mouseenter', function () {
        $(this).find('.tabBoxMask').show();
        $(this).find('img').addClass('tabImgActive');
    })
    $('.gamePic .tabBox li').on('mouseleave', function () {
        $(this).find('.tabBoxMask').hide();
        $(this).find('img').removeClass('tabImgActive');
    })


    $('.gameVideo .tabBox li').on('mouseenter', function () {
        $(this).find('img').addClass('tabImgActive');
    })
    $('.gameVideo .tabBox li').on('mouseleave', function () {
        $(this).find('img').removeClass('tabImgActive');
    })
























})