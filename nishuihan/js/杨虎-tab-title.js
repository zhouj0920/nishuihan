$(function () {
    $('.tab-title>li>.tab-1').mouseenter(function () {
        $(this).css({
            'background-image':'url(images/nav-news_d32e706.png)',
            'background-position':'0 -45px'
        });
    }).mouseleave(function () {
        $(this).css({
            'background-image':'url(images/nav-news_d32e706.png)',
            'background-position':'0 0'
        });
    });

    $('.tab-title>li>.tab-2').mouseenter(function () {
        $(this).css({
            'background-image':'url(images/nav-news_d32e706.png)',
            'background-position':'-202px -45px'
        });
    }).mouseleave(function () {
        $(this).css({
            'background-image':'url(images/nav-news_d32e706.png)',
            'background-position':'-202px 0'
        });
    });

    $('.tab-title>li>.tab-3').mouseenter(function () {
        $(this).css({
            'background-image':'url(images/nav-news_d32e706.png)',
            'background-position':'-404px -45px'
        });
    }).mouseleave(function () {
        $(this).css({
            'background-image':'url(images/nav-news_d32e706.png)',
            'background-position':'-404px 0'
        });
    });

    $('.tab-title>li>.tab-4').mouseenter(function () {
        $(this).css({
            'background-image':'url(images/nav-news_d32e706.png)',
            'background-position':'-606px -45px'
        });
    }).mouseleave(function () {
        $(this).css({
            'background-image':'url(images/nav-news_d32e706.png)',
            'background-position':'-606px 0'
        });
    });

    $('.tab-title>li').click(function () {
        $('.news-box').eq($(this).index()).addClass('active1').siblings().removeClass('active1');
    });


    $('.inner-side>a').mouseenter(function () {
        $(this).css({
            'background-position':'-167px -134px'
        });
    }).mouseleave(function () {
        $(this).css({
            'background-position':'0px -134px'
        });
    });
});