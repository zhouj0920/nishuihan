(function(){


var changeBox=document.getElementById('changeBox');
var changeLis=changeBox.getElementsByTagName('li');
var circle=document.getElementById('circle');
var circleLis=circle.getElementsByTagName('li');
var changeIndex=0;
function animate(element, target) {
  if (element.timerId) {
    clearInterval(element.timerId);
    element.timerId = null;
  }
  element.timerId = setInterval(function () {
    var step = 20;
    var current = element.offsetLeft;
    if (current > target) {
      step = - Math.abs(step);
    }
    if (Math.abs(current - target) <= Math.abs(step)) {
      clearInterval(element.timerId);
      element.style.left = target + 'px';
      return;
    }
    current += step;
    element.style.left = current + 'px';
  }, 5);
}
function changeCircle(changeIndex){
    for(var i=0;i<circleLis.length;i++){
        circleLis[i].className='';
    }
    if(changeIndex==3){
        changeIndex=0;
    }
    circleLis[changeIndex].className='active';
}
var timer=null;
var firstLi=changeLis[0].cloneNode(true);
changeBox.appendChild(firstLi);
timer=setInterval(function(){
    changeIndex++;
    if(changeIndex>3){
        changeBox.style.left='0';
        changeIndex=1;
    }
    animate(changeBox,-changeIndex*changeLis[0].offsetWidth);
    changeCircle(changeIndex);
},3000)

changeBox.onmouseenter=function(){
    clearInterval(timer);
}
changeBox.onmouseleave=function(){
    timer=setInterval(function(){
    changeIndex++;
    if(changeIndex>3){
        changeBox.style.left='0';
        changeIndex=1;
    }
    animate(changeBox,-changeIndex*changeLis[0].offsetWidth);
    changeCircle(changeIndex);
},3000)
}

for(var i=0;i<circleLis.length;i++){
    circleLis[i].setAttribute('index',i);
    circleLis[i].onclick=function(){
        changeCircle(this.getAttribute('index'));
        animate(changeBox,-this.getAttribute('index')*changeLis[0].offsetWidth);
        changeIndex=this.getAttribute('index');
    }
}

})()