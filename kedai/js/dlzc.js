(function () {

    var dl = document.getElementById('dl');  //登录按钮
    var bg = document.getElementById('xbg');  //遮盖层
    var login = document.getElementById('xlogin');  //登录页
    var guanbi = document.getElementsByClassName('xguanbi');  //关闭按钮
    var wangji = document.getElementById('xwangji');  //忘记密码按钮
    var register = document.getElementById('xregister'); //注册页
    var zc = document.getElementById('zc'); //注册按钮
    var retrievePassword = document.getElementById('xretrievePassword'); //忘记密码页
    var body = document.getElementsByTagName('body');
    dl.onclick = function () {
        console.log('2222')
        bg.style.display = 'block';
        login.style.display = 'block';
        body[0].style.height = '100%';
        body[0].style.overflow = 'hidden';
    };
    bg.onclick = function () {
        bg.style.display = 'none';
        login.style.display = 'none';
        register.style.display = 'none';
        retrievePassword.style.display = 'none';
        body[0].style.overflow = 'initial';
    };
    wangji.onclick = function () {
        bg.style.display = 'block';
        retrievePassword.style.display = 'block';
        login.style.display = 'none';
        body[0].style.height = '100%';
        body[0].style.overflow = 'hidden';
    }
    for (var i = 0; i < guanbi.length; i++) {
        guanbi[i].onclick = function () {
            bg.style.display = 'none';
            this.parentNode.parentNode.style.display = 'none';
            body[0].style.overflow = 'initial';
        }
    }
    zc.onclick = function () {
        console.log('2222')
        bg.style.display = 'block';
        register.style.display = 'block';
        body[0].style.height = '100%';
        body[0].style.overflow = 'hidden';
    }

})()