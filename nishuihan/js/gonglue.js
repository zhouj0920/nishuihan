$(function(){
    $('.luntan-tab a').hover(function(){
        var index=$(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.luntan-news .news').eq(index).addClass('active').siblings().removeClass('active');
    })
    var i=0;
    setInterval(function(){
        if(i==0){
            $('.slide1').animate({
                'left':'-505px'
            },500)
            $('.slide2').animate({
                'left':'-505px'
            },500)
            $('.swiper-pagination span').eq(i+1).addClass('artive').siblings().removeClass('artive');
            i=1;
        } else {
            $('.slide1').animate({
                'left':'0px'
            },500)
            $('.slide2').animate({
                'left':'0px'
            },500)
            $('.swiper-pagination span').eq(i-1).addClass('artive').siblings().removeClass('artive');
            i=0;
        }
    },3000)
    $('.swiper-pagination span').click(function(){
        var index=$(this).index();
        $(this).addClass('artive').siblings().removeClass('artive');
        if(index==0){
            $('.slide1').animate({
                'left':'0px'
            },500)
            $('.slide2').animate({
                'left':'0px'
            },500)
        } else {
            $('.slide1').animate({
                'left':'-505px'
            },500)
            $('.slide2').animate({
                'left':'-505px'
            },500)
        }
    })
})