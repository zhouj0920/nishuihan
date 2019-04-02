$(function(){
    var index=0;
    $('.job-nav>a').each(function(i){
        var y=-((i-1)*48);
        if(i!=0){$(this).css('backgroundPositionY',y+'px');}
    })
    $('.job-bg').eq(0).stop().fadeIn().siblings().stop().fadeOut();
    $('.job-nav>a').click(function(){
        index=$(this).index();
        $('.job-bg').eq(index).stop().fadeIn().siblings().stop().fadeOut();
        $(this).addClass('active').siblings().removeClass('active');
    })
    setInterval(function(){
        index++;
        if(index==6){
            index=0;
        }
        $('.job-bg').eq(index).stop().fadeIn().siblings().stop().fadeOut();
        $('.job-nav a').eq(index).addClass('active').siblings().removeClass('active');
    },5000);
})