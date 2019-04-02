$(function(){
	$('.touchus').click(function(){
		$('.touchus_form').show();
	})
	$('.touchus_form .hd i').click(function(){
		$('.touchus_form').hide();
	})
	$('.touchus_form .hd').mousedown(function(e){
		var x=e.pageX-$('.touchus_form').offset().left;
		var y=e.pageY-$('.touchus_form').offset().top;
		$(document).mousemove(function(e){
			var moveX=e.pageX-$(document).scrollLeft()-x;
			var moveY=e.pageY-$(document).scrollTop()-y;
			$('.touchus_form').css({
				'left':moveX+'px',
				'top':moveY+'px'
			})
		})
	})
	$('.touchus_form .hd').mouseup(function(){
		$(document).off('mousemove');
	})



	// sideBox
	$('.sideBox #sideBoxFirst').mouseenter(function(){
		$('.sideBox li:eq(0)').css('backgroundColor','transparent');
		$('.sideBox #sideBoxFirst').css({
			'backgroundColor':'rgba(98,79,72,.8)'
		});
		$('.sideBox #sideBoxFirst').stop().animate({
			left:'-90px',
		},200,function(){
			$('.sideBox #sideBoxFirst').animate({
			top:'-138px',
			height:'186px'
		},200)
		})
	})
	$('.sideBox #sideBoxFirst').mouseleave(function(){
		$('.sideBox #sideBoxFirst').css({
			backgroundColor: '#333'
		})
		$('.sideBox #sideBoxFirst').stop().animate({
			top:'0px',
			height:'48px'
		},200,function(){
			$('.sideBox #sideBoxFirst').animate({
			left:'0px'
		},200)
		})
	})



	$('.sideBox #sideBoxSecond').mouseenter(function(){
		$('.sideBox li:eq(0)').css('backgroundColor','');
		$('.sideBox #sideBoxSecond').stop().animate({
			left:'-106px',
		},200)
	})
	$('.sideBox #sideBoxSecond').mouseleave(function(){
		$('.sideBox #sideBoxSecond').stop().animate({
			left:'0px'
		},200)
	})
	$('.sideBox #sideBoxThird').mouseenter(function(){
		$('.sideBox li:eq(0)').css('backgroundColor','');
		$('.sideBox #sideBoxThird').stop().animate({
			left:'-406px',
		},200)
	})
	$('.sideBox #sideBoxThird').mouseleave(function(){
		$('.sideBox #sideBoxThird').stop().animate({
			left:'0px'
		},200)
	})

	$('.sideBox #sideBoxFourth').mouseenter(function(){
		$('.sideBox li:eq(0)').css('backgroundColor','');
		$('.sideBox #sideBoxFourth').stop().animate({
			left:'-506px',
		},200)
	})
	$('.sideBox #sideBoxFourth').mouseleave(function(){
		$('.sideBox #sideBoxFourth').stop().animate({
			left:'0px'
		},200)
	})


	$('.sideHide>ul>li').mouseenter(function(){
		$(this).css({
			'border':'1px solid #fff',
			'borderTop':'none',
			'borderBottom':'none'
		}).siblings().css('border','none');
		$(this).children('ul').stop().slideDown();
	})
	$('.sideHide>ul>li').mouseleave(function(){
		$(this).css('border','none');
		$(this).children('ul').stop().slideUp();
	})

	$('#slideUl li').mouseenter(function(){
		$(this).css({
			'border':'1px solid #fff',
			'borderTop':'none',
			'borderBottom':'none'
		}).siblings().css('border','none');
	})
	$('#slideUl li').mouseleave(function(){
		$(this).css('border','none');
	})

	$(window).scroll(function(){
		if($(document).scrollTop()>=500){
			$('.sideBox').show();
		}else{
			$('.sideBox').hide();
		}
	})
	$(window).scroll(function(){
		if($(document).scrollTop()>=300){
			$('.contact_pic').show();
		}else{
			$('.contact_pic').hide();
		}
	})

	var myDate=new Date();
	if(1){
		$('.touchus').show();
	}else{
		$('.touchus').hide();
	}

})