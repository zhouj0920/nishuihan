$(function(){
    var index = 0;
    var index1 = 0;
    $('.side-nav a').click(function(){
        $('.main>div').eq($(this).index()).siblings().hide(500);
        $('.main>div').eq($(this).index()).show(500);
        return false;
    })

    $('.tab-wrap a').click(function(){
        index1 = $(this).index();
       
        $('.ppw').eq(index1).siblings().hide();
        $('.ppw').eq(index1).show();
        $('.tab-wrap').show();
        if(index1==0) {
            $(".tab-1").addClass('tab-1-tog');
        }else {
            $(".tab-1").removeClass('tab-1-tog');
        }
        if(index1==1) {
            $(".tab-2").addClass('tab-2-tog');
        }else {
            $(".tab-2").removeClass('tab-2-tog');
        }
        if(index1==2) {
            $(".tab-3").addClass('tab-3-tog');
        }else {
            $(".tab-3").removeClass('tab-3-tog');
        }
        return false;
    })

    
    $('.arrow-wrap ').click(function(){      
        index++;
        console.log(index);       
        if(index>2){
            index = 0;
        }

        $('.main>div').eq(index).siblings().hide(500);
        $('.main>div').eq(index).show(500);
        return false;
    })
//三个人动
    clearInterval(timer);
    var timer = setInterval(function(){
        
        index1++;
        if(index1>2){
            index1 = 0;
        }
        if(index1==0) {
            $(".tab-1").addClass('tab-1-tog');
        }else {
            $(".tab-1").removeClass('tab-1-tog');
        }
        if(index1==1) {
            $(".tab-2").addClass('tab-2-tog');
        }else {
            $(".tab-2").removeClass('tab-2-tog');
        }
        if(index1==2) {
            $(".tab-3").addClass('tab-3-tog');
        }else {
            $(".tab-3").removeClass('tab-3-tog');
        }
        $('.tab-wrap a ').eq(index1).click();
    },3000)
//
    setInterval(function () {
        $('.arrow-wrap a').toggleClass('cls');
        $('.video-play').toggleClass('cls');
    }, 600)

    // var timer1 = setInterval(function () {
    //     $('.video-play').toggleClass('video-cls')
    // }, 600)

    $(".player").click(function(){
        $(".video-box").show();
    })

    $("#video-bigbox-close").click(function(){
        $(".video-box").hide();
    })

    $('.audio-player').click(function(){
        $(this).toggleClass('audio-player-stop');
        return false;
    })

    
})
