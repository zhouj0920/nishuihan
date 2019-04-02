var tab1 = document.getElementById('tab1');
var tab2 = document.getElementById('tab2');
var build = document.getElementById('build');
var vip = document.getElementById('vip');
var drop = document.getElementsByClassName('drop');
var drop_nav = document.getElementsByClassName('drop-nav');

tab1.onmouseover = function(){
    tab1.style.borderBottom = '2px solid #624F48';
    tab2.style.borderBottom = '';

    build.className = 'dpBlock';
    vip.className = 'dpHidden';
}
tab2.onmouseover = function () {
    tab2.style.borderBottom = '2px solid #624F48';
    tab1.style.borderBottom = '';
    build.className = 'dpHidden';
    vip.className = 'dpBlock';
}

drop[0].onmouseover = function () {
    drop_nav[0].style.display = 'block';
}
drop[0].onmouseout = function () {
    drop_nav[0].style.display = 'none';
}
drop[1].onmouseover = function () {
    drop_nav[1].style.display = 'block';
}
drop[1].onmouseout = function () {
    drop_nav[1].style.display = 'none';
}
drop[2].onmouseover = function () {
    drop_nav[2].style.display = 'block';
}
drop[2].onmouseout = function () {
    drop_nav[2].style.display = 'none';
}

