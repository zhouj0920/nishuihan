$(function(){
    window.onscroll=function(){
        if(document.documentElement.scrollTop>=2500){
                $('.cd-animate').css('display', 'block');
                $('.icon').css('display', 'none');
                $('.code').css('display', 'block');
            setTimeout(function(){
                $('.cd-animate').css('display', 'none');
                $('.caidan').css('display', 'block');
            },1700)

            window.onscroll=null;
        }

    }
})