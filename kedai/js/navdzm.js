
$(function(){
    $('#broadside-nav>ul>li').hover(function(){
        var index=$(this).index();
        switch(index){
            case 0:{
                $(this).stop().animate({
                    width:'140px',
                    marginLeft:'-86px',
                },500,function(){
                    $(this).animate({
                        height:'194px',
                        marginTop:'-140px',
                    },500)
                });
                $(this).css('background','rgb(98, 79, 72)').css('opacity','0.8');
                $(this).children('img').css('display','block');
                break;
            }
            case 1:{
                $(this).stop().animate({
                    width:'180px',
                    marginLeft:'-126px',
                },1000);
                $(this).css('background','rgb(98, 79, 72)').css('opacity','0.8');
                break;
            }
            case 2:{
                $(this).stop().animate({
                    width:'500px',
                    marginLeft:'-446px',
                },1000);
                $(this).css('background','rgb(98, 79, 72)').css('opacity','0.8');
                break;
            }
            case 3:{
                $('.sub-menu').hide();
                $(this).children('.navbar-left').css('display','block');
                $(this).stop().animate({
                    width:'600px',
                    marginLeft:'-546px',
                },1000);
                $(this).css('background','rgb(98, 79, 72)').css('opacity','0.8');
                $('.navbar-left>li').hover(function(){
                    $(this).children('.sub-menu').show();
                },function(){
                    $(this).children('.sub-menu').hide();
                });
                break;
            }
            case 4:{
                $(this).css('background','rgb(98, 79, 72)').css('opacity','0.8');
                $(this).click(function(){
                    var num=document.documentElement.scrollTop;
                    var timer=setInterval(function(){
                        num-=10;
                        if(num<0){
                            num=0;
                            clearInterval(timer);
                        }
                        document.documentElement.scrollTop=num;
                    },5)
                });
            }
        }
    },function(){
        var index=$(this).index();
        switch(index){
            case 0:{
                $(this).stop().animate({
                    height:'54px',
                    marginTop:'0px',
                },500,function(){
                    $(this).animate({
                        width:'54px',
                        marginLeft:'0px'
                    },500,function(){
                        $(this).children('img').css('display','none');
                    })
                });
                $(this).css('background','rgb(0,0,0)').css('opacity','0.8');
                break;
            }
            case 1:
            case 2:
            {
                $(this).stop().animate({
                    width:'54px',
                    marginLeft:'0px',
                },1000);
                $(this).css('background','rgb(0,0,0)').css('opacity','0.8');
                break;
            }
            case 3:
            {
                $(this).stop().animate({
                    width:'54px',
                    marginLeft:'0px',
                },1000,function(){
                    $(this).children('.navbar-left').css('display','none');
                });
                $(this).css('background','rgb(0,0,0)').css('opacity','0.8');
                break;
            }
            case 4:{
                $(this).css('background','rgb(0,0,0)').css('opacity','0.8');
            }
        }
    })
});