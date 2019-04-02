$(function(){
    var index=0;
    $('.switch span').hover(function(){
        index=$(this).index();
        $(this).addClass('current').siblings().removeClass('current');
        $('.ds-tabs>div').eq(index).removeClass('hide').siblings().addClass('hide');
    })
    var time=setInterval(function(){
        index++;
        if(index==4){
            index=0;
        }
            $('.switch span').eq(index).addClass('current').siblings().removeClass('current');
            $('.ds-tabs>div').eq(index).removeClass('hide').siblings().addClass('hide');

    },5000)
})