$(function(){
    var sum=0;
    if($('.current').text()=='官方'){
        sum=4;
    }else{
        sum=2;
    }
    $('.switch>a').click(function(){
        var index=$(this).index();
        $(this).addClass('current').siblings().removeClass('current');
        $('.Btnblock').eq(index-1).removeClass('hide').siblings().addClass('hide');
        if($('.current').text()=='官方'){
            sum=4;
        }else{
            sum=2;
        }
    })
    var index=0;
    $('.gf .switch_ctr1 span').hover(function(){
        index=$(this).index();
        $(this).addClass('current').siblings().removeClass('current');
        $('.gf .switch-pic a').eq(index).stop().animate({opacity:'1',display: 'block',zIndex:'100'},150).siblings().stop().animate({opacity:'0',display: 'none',zIndex:'99'},200);
    })
    $('.hz .switch_ctr1 span').hover(function(){
        index=$(this).index();
        $(this).addClass('current').siblings().removeClass('current');
        $('.hz .switch-pic a').eq(index).stop().animate({opacity:'1',display: 'block',zIndex:'100'},150).siblings().stop().animate({opacity:'0',display: 'none',zIndex:'99'},200);
    })
    var time=setInterval(function(){
        index++;
        if(index==sum){
            index=0;
        }
        if(sum==4){
            $('.gf .switch_ctr1 span').eq(index).addClass('current').siblings().removeClass('current');
            $('.gf .switch-pic a').eq(index).stop().animate({opacity:'1',display: 'block',zIndex:'100'},150).siblings().stop().animate({opacity:'0',display: 'none',zIndex:'99'},200);
        } else {
            $('.hz .switch_ctr1 span').eq(index).addClass('current').siblings().removeClass('current');
            $('.hz .switch-pic a').eq(index).stop().animate({opacity:'1',display: 'block',zIndex:'100'},150).siblings().stop().animate({opacity:'0',display: 'none',zIndex:'99'},200);
        }

    },5000)
    
})