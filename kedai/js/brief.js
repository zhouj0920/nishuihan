
function hover(e){
    // 获取id为tab的元素
    var ultab=document.getElementById("tab");
    var divContent=document.getElementById("content");
    
    // 获取tab中的标签名字为li的元素赋值给tab数组和content中标签名字为div的
    var tab=ultab.getElementsByTagName("li");
    var content=divContent.getElementsByClassName("dabox");
    // 先把全部的tab里面的元素跑一遍看看有没有被点击的
    for(var i=0;i<tab.length;i++){
        // 自调用函数
        (function (j){
            // 监听点击事件
            tab[j].addEventListener("click",function(){
                // 当有li被点击,将所有的tab都置为normal content都置为none
                for(var n=0;n<tab.length;n++){
                    tab[n].className="normal";
                    content[n].classList.remove("show");
                    content[n].classList.add("none");
                }
                // 将被点击的li置为hover和show
                tab[j].className="hover";
                content[j].classList.remove("none");
                content[j].classList.add("show");
            },false);
        })(i);
    }
}
function boxstyle(){
    var content1=document.getElementById('content1');
    var lists=content1.getElementsByTagName('li');
    for(var i=0;i<lists.length;i++){
        lists[i].onmouseover=behavior;
        lists[i].onmouseout=boxreturn;
    }
    // 正常
    function boxreturn(){
        var imgBox=this.getElementsByClassName('img-box');
        var textBox=this.getElementsByClassName('text-box');
        var cText=this.getElementsByTagName('p');
        imgBox[0].style.width='350px';
        imgBox[0].style.height='260px';
        imgBox[0].style.marginLeft='0px';
        imgBox[0].style.marginTop='0px';
        textBox[0].classList.remove('magnify');
        cText[0].className='c-text';
    }
    //放大
    function behavior(){
        var imgBox=this.getElementsByClassName('img-box');
        var textBox=this.getElementsByClassName('text-box');
        var cText=this.getElementsByTagName('p');
        imgBox[0].style.width='387px';
        imgBox[0].style.height='287px';
        imgBox[0].style.marginLeft='-18.5px';
        imgBox[0].style.marginTop='-13.5px';
        textBox[0].classList.add('magnify');
        cText[0].className='c-text-san';
    }
}
// 页面加载是就调用
window.onload=function(){
    hover();
    boxstyle();
}

