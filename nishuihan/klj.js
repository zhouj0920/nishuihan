$(function () {
    //拖拽盒子动态效果
    $('.btnl').click(function () {
        // $('.renwu').css({
        //     'left': '0px',
        //     'top': ' 0px',
        //     'transform': 'scale(1)'
        // });
        $('.renwu').addClass('clsc');
    })
    // 三角定时器
    var timer = setInterval(function () {
        $('.sanjiao').toggleClass('clsa')
    }, 600)
    // var timer1 = setInterval(function () {
    //     $('.btnl').toggleClass('cls')
    // }, 600)
    var index = 0;
    // 点击A 标签 tab切换
    $('.nav a').click(function () {
        $('.renwu').removeClass('clsc')
        // alert('11111')
        // 改变a标签的背景图
        $(this).css({
            backgroundPositionX: '-61px '
        });
        $(this).siblings('a').css({
            backgroundPositionX: '0px'
        })
        index = $(this).index();
        $('.show .ddd').eq(index).addClass('active').siblings().removeClass('active')
        return false;
    })
    //鼠标移入a标签事件
    $('.nav a').on('mouseover', function () {
        $(this).css({
            backgroundPositionX: '-61px '
        });
        $(this).siblings('a').css({
            backgroundPositionX: '0px'
        })
        $('.nav a').eq(index).css({
            backgroundPositionX: '-61px '
        });
    })
    //鼠标移出a标签事件 还原默认样式
    $('.nav a').on('mouseout', function () {
        $('.nav a').css({
            backgroundPositionX: '0px'
        })
        $('.nav a').eq(index).css({
            backgroundPositionX: '-61px '
        });
    })
    //点击三角弹框事件   
    $('.sanjiao').on('click', function () {
        $('.tankuang').css({
            'display': 'block'
        })
    })
    //关闭弹框
    $('.tankuang-guanbi').on('click', function () {
        $('.tankuang').css({
            'display': 'none'
        })
    })

    $('.btnl').click(function () {
        // $(this).animate({
        //     top: '20px',
        //     left: '200px'
        // }, 500).animate({
        //     left: '0',
        //     top: '0'
        // }, 500);

        $(this).stop().animate({
            top: '10px',
            left: '195px'
        }, 500, function () {
            $(this).animate({
                'width': '100px',
                'height': '100px',
                'left': '195px',
                'top': '10px'
            }, 500)
        });


        /* 
        top: 10px;
    left: 195px;
    width: 100px;
    height: 100px; */
        setTimeout(function () {
            $('.tankuang').css({
                'display': 'block'
            })
        }, 1000);
        clearInterval(timer1);
    })

    // $('.btnl').on('click', function () {
    //     // $('.btnl').animate({
    //     //     top: '20px',
    //     //     left: '200px'
    //     // }, 500, function () {
    //     //     alert(123);
    //     // });

    //     $(this).animate({
    //         top: '20px',
    //         left: '200px'
    //     }, 500).animate({
    //         left: '0',
    //         top: '0'
    //     }, 500);

    //     // setTimeout(function () {
    //     //     $('.tankuang').css({
    //     //         'display': 'block'
    //     //     })
    //     // }, 2000);
    //     clearInterval(timer1);
    // })
})