$(function(){
    $('.news-box .box-title .news-tab a').each(function(i){
        $(this).attr('index',i);
        $(this).css( 'background-position-x',-(i*83)+'px');
    })
    $('.news-box .box-title .news-tab a').hover(function(){
        $('.news-box .box-title .news-tab a').removeClass('active');
        $(this).addClass('active');
        var index=$(this).attr('index');
        $('.news-box .news').eq(index).addClass('active').siblings().removeClass('active');
    })
})