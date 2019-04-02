$(function () {
    // tab栏导航
    tabnav();
    // lbt
    lbtnav()
    //关闭
    close()
})
function tabnav() {
    var imgindex = 0;
    var time = null;
    var taba = document.querySelector('.tabnav').querySelectorAll('a');
    for (var i = 0; i < taba.length; i++) {
        taba[i].style.background = 'url(img/feature-nav.png) no-repeat ' + (-i * 54) + 'px' + ' -192px';
    }
    for (var i = 0; i < taba.length; i++) {
        taba[i].index = i;
        taba[i].onmouseover = function (e) {
            for (var j = 0; j < taba.length; j++) {
                taba[j].style.background = 'url(img/feature-nav.png) no-repeat ' + (-j * 54) + 'px' + ' -192px';
            }
            this.style.background = 'url(img/feature-nav.png) no-repeat ' + (this.index * -54) + 'px' + ' 0';
            $('.tablan li').eq(this.index).stop().fadeIn(500).siblings().stop().fadeOut(500)
            imgindex = this.index;
            e.stopPropagation();
        }
    }
    time = setInterval(function () {
        imgindex++;
        if (imgindex > 3) {
            imgindex = 0;
        }
        $('.tablan li').eq(imgindex).stop().fadeIn(500).siblings().stop().fadeOut(500)
        $('.tabnav a').removeClass('tabbg')

        for (var i = 0; i < taba.length; i++) {
            taba[i].style.background = 'url(img/feature-nav.png) no-repeat ' + (-i * 54) + 'px' + ' -192px';
        }
        taba[imgindex].style.background = 'url(img/feature-nav.png) no-repeat ' + (imgindex * -54) + 'px' + ' 0';
    }, 3000)


}
function lbtnav() {
    var imgindex1 = 0;
    var time1 = null;
    var lbta = document.querySelector('.lbtnav').querySelectorAll('a');
    for (var i = 1; i < lbta.length; i++) {
        lbta[i].style.background = 'url(img/icon-nav.png) no-repeat  0 ' + (-600 + ((i - 1) * -36)) + 'px';
    }


    time1 = setInterval(function () {
        imgindex1++;
        if (imgindex1 > 7) {
            imgindex1 = 0;
        }
        $('.content li').eq(imgindex1).stop().fadeIn(500, function () {
        }).siblings().stop().fadeOut(500).removeClass('show')
        for (var i = 0; i < lbta.length; i++) {
                if (imgindex1 == lbta[0]) {
                    lbta[imgindex1].style.background = 'url(img/icon-ly2.png) no-repeat 0 0';
                    $(lbta[imgindex1]).next().css('background', 'url(img/icon-nav.png) no-repeat 0 -600px')
                } else {
                    for (var j = 0; j < lbta.length; j++) {
                        if (j == 0) {
                            lbta[j].style.background = 'url(img/icon-ly.png) no-repeat 0 0';
                        } else {
                            lbta[j].style.background = 'url(img/icon-nav.png) no-repeat  0 ' + (-600 + ((j - 1) * -36)) + 'px';
                        }
                    }
                    lbta[imgindex1].style.background = 'url(img/icon-nav.png) no-repeat  -110px ' + (-600 + ((imgindex1 - 1) * -36)) + 'px';
                }
        }
    }, 6000)


    for (var i = 0; i < lbta.length; i++) {
        lbta[i].index = i;
        lbta[i].onmouseover = function (e) {
            var indexs = $(this).index();
            if (this == lbta[0]) {
                this.style.background = 'url(img/icon-ly2.png) no-repeat 0 0';
                $(this).next().css('background', 'url(img/icon-nav.png) no-repeat 0 -600px')
            } else {
                for (var j = 0; j < lbta.length; j++) {
                    if (j == 0) {
                        lbta[j].style.background = 'url(img/icon-ly.png) no-repeat 0 0';
                    } else {
                        lbta[j].style.background = 'url(img/icon-nav.png) no-repeat  0 ' + (-600 + ((j - 1) * -36)) + 'px';
                    }
                }
                this.style.background = 'url(img/icon-nav.png) no-repeat  -110px ' + (-600 + ((this.index - 1) * -36)) + 'px';
            }
            $('.content li').eq(this.index).stop().fadeIn(500, function () {

            }).siblings().stop().fadeOut(500).removeClass('show');
            var indexs = $(this).index();
            imgindex1 = indexs;
            e.stopPropagation();
        }
    }
}
function close() {
    $('.register .close').on('click',function (e) {
        $('.register').fadeOut()
        e.stopPropagation();
    })
    $('body').click(function (e) {
        $('.register').fadeIn()
        e.stopPropagation();
    })
}





