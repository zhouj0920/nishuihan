
$(function(){
    var introduceNub= $('.introduce .introduce1').size();
    for(i=0;i<introduceNub;i++){
        $(".introduce .introduce1:eq("+i+")").attr("imgId",i);
    }
    for(i=0;i<introduceNub;i++){
        if(i<5){
           $(".introduce .introduce1:eq("+i+")").addClass("introduce"+(i+2)); 
        }else{
            $(".introduce .introduce1:eq("+i+")").addClass("introduce6"); 
        }
    }
    imgClickFy();
    $('#introduce-list li').click(function(){
        $(this).addClass('current');
         var id= $(this).index();
         console.log(id);
         tz(id);
    });
});
var introduceNub= $('.introduce .introduce1').size();
function right(){
    var fy=new Array();//fy 中装的都是类名
    for(var i=0;i<introduceNub;i++){
        fy[i]= $('.introduce .introduce1[imgId='+i+']').attr('class');
    }
    
    for(var i=0;i<introduceNub;i++){
        if(i==0){
            $('.introduce .introduce1[imgId='+i+']').attr('class',fy[introduceNub-1]);
        }else {
            $('.introduce .introduce1[imgId='+i+']').attr('class',fy[i-1]);
        }
    }

    imgClickFy();
    slideLi();
}
function left(){
    var fy=new Array();//fy 中装的都是类名
    for(var i=0;i<introduceNub;i++){
        fy[i]= $('.introduce .introduce1[imgId='+i+']').attr('class');
    }
    for(var i=0;i<introduceNub;i++){
        if(i==(introduceNub-1)){
            $('.introduce .introduce1[imgId='+i+']').attr('class',fy[0]);
        }else {
            $('.introduce .introduce1[imgId='+i+']').attr('class',fy[i+1]);
        }
    }
    imgClickFy();
    slideLi();
}
function imgClickFy(){
    $('.introduce .introduce1').removeAttr('onclick');
    $('.introduce .introduce3').attr('onclick','left()');
    $('.introduce .introduce5').attr('onclick','right()');
}
function slideLi(){
    var list =parseInt($('.introduce .introduce4').attr('imgId'));
    $('#introduce-list li').removeClass('current');
    $('#introduce-list li').eq(list).addClass('current');
}

function tz(id){
    var tzcs=id-(parseInt($('.introduce .introduce4').attr('imgId')));
    if(tzcs>0){
        for(i=0;i<tzcs;i++){
            setTimeout(function(){
                right();
            },1);
        }
    }
    if(tzcs<0){
        tzcs=Math.abs(tzcs);
        for(i=0;i<tzcs;i++){
            setTimeout(function(){
                left();
            },1);
        }
    }
}