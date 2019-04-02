$(function () {

    //mouseover：鼠标经过事件
    //mouseout:鼠标离开事件

    //mouseenter:鼠标进入事件
    //mouseleave：鼠标离开事件

    var $li = $(".header .nav>ul>li");

    //给li注册鼠标经过事件，让自己的ul显示出来
    $li.mouseenter(function () {
        //找到所有的儿子，并且还得是ul

        //stop：停止当前正在执行的动画
        $(this).children("ul").stop().slideDown();
    });

    $li.mouseleave(function () {
        $(this).children("ul").stop().slideUp();
    });


});