jQuery(document).ready(function() {
	
    $("#a").hover(function() {
        if ($(this).is(".active")) {
            return;
        } else {
            $('#b').removeClass('active');
            $('#c').removeClass('active');
            $('#d').removeClass('active');
            $('#e').removeClass('active');
            $('#f').removeClass('active');
            $(this).addClass('active');
            $(".box2b_b").fadeOut(0);
            $(".box2b_c").fadeOut(0);
            $(".box2b_d").fadeOut(0);
            $(".box2b_e").fadeOut(0);
            $(".box2b_f").fadeOut(0);
            $(".box2b_a").fadeIn(0);
        }
    });
    $("#b").hover(function() {
        if ($(this).is(".active")) {
            return;
        } else {
            $('#a').removeClass('active');
            $('#c').removeClass('active');
            $('#d').removeClass('active');
            $('#e').removeClass('active');
            $('#f').removeClass('active');
            $(this).addClass('active');
            $(".box2b_a").fadeOut(0);
            $(".box2b_c").fadeOut(0);
            $(".box2b_d").fadeOut(0);
            $(".box2b_e").fadeOut(0);
            $(".box2b_f").fadeOut(0);
            $(".box2b_b").fadeIn(0);
        }
    });
    $("#c").hover(function() {
        if ($(this).is(".active")) {
            return;
        } else {
            $('#b').removeClass('active');
            $('#a').removeClass('active');
            $('#d').removeClass('active');
            $('#e').removeClass('active');
            $('#f').removeClass('active');
            $(this).addClass('active');
            $(".box2b_b").fadeOut(0);
            $(".box2b_a").fadeOut(0);
            $(".box2b_d").fadeOut(0);
            $(".box2b_e").fadeOut(0);
            $(".box2b_f").fadeOut(0);
            $(".box2b_c").fadeIn(0);
        }
    });
    $("#d").hover(function() {
        if ($(this).is(".active")) {
            return;
        } else {
            $('#b').removeClass('active');
            $('#a').removeClass('active');
            $('#c').removeClass('active');
            $('#e').removeClass('active');
            $('#f').removeClass('active');
            $(this).addClass('active');
            $(".box2b_b").fadeOut(0);
            $(".box2b_a").fadeOut(0);
            $(".box2b_e").fadeOut(0);
            $(".box2b_c").fadeOut(0);
            $(".box2b_f").fadeOut(0);
            $(".box2b_d").fadeIn(0);
        }
    });
    $("#e").hover(function() {
        if ($(this).is(".active")) {
            return;
        } else {
            $('#b').removeClass('active');
            $('#a').removeClass('active');
            $('#c').removeClass('active');
            $('#d').removeClass('active');
            $('#f').removeClass('active');
            $(this).addClass('active');
            $(".box2b_b").fadeOut(0);
            $(".box2b_a").fadeOut(0);
            $(".box2b_d").fadeOut(0);
            $(".box2b_c").fadeOut(0);
            $(".box2b_f").fadeOut(0);
            $(".box2b_e").fadeIn(0);
        }
    });
    $("#f").hover(function() {
        if ($(this).is(".active")) {
            return;
        } else {
            $('#b').removeClass('active');
            $('#a').removeClass('active');
            $('#c').removeClass('active');
            $('#d').removeClass('active');
            $('#e').removeClass('active');
            $(this).addClass('active');
            $(".box2b_b").fadeOut(0);
            $(".box2b_a").fadeOut(0);
            $(".box2b_d").fadeOut(0);
            $(".box2b_c").fadeOut(0);
            $(".box2b_e").fadeOut(0);
            $(".box2b_f").fadeIn(0);
        }
    });
});