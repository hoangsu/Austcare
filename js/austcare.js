$(document).ready(function() {
	$(".home-banner .flexslider").flexslider({
    	controlNav:false
    });
	$("#chat-me a.close").click(function(event) {
		$(this).parents("#chat-me").hide('slow');
	});
	$(".box").each(function() {
		var textHeight = $(this).children('.text').height();
		var imageHeight = $(this).children('.image').height();
		if (textHeight <= imageHeight) {
			$(this).children('.text').css('height', imageHeight);
		}else {
			$(this).children('.image').css('height', textHeight);
		}
	});
	$('.tabs li').click(function(){
		$('.tabs li').removeClass('active');
		$('.tab-content').removeClass('active');
		$(this).addClass('active');
		$($(this).find('a').attr("href") + '-content').addClass('active');
	});
	$(".select-city .text-top").click(function(event) {
		$(this).next('ul').slideToggle('fast');
	});
	$(".select-city li a").click(function() {
		var text = $(this).text();
		$(".select-city ul").hide();
		$(this).parents('.select-city').children('.text-top').text(text);
	});
	$(".showrooms .col-2 .head").addClass('active');
	$(".showrooms .head").click(function(event) {
		$(".showrooms .head").removeClass("active");
		$(this).addClass("active");
	});
	$(".group1").colorbox({rel:'group1'});
	$(".group2").colorbox({rel:'group2'});
	$(".inline").colorbox({inline:true, maxWidth:"97%"});

	/*Responsive*/
	$("#menu-icon").click(function() {
		$(this).next("ul").slideToggle();
		$(".menu > ul > li").each(function() {
			if($(this).children('.sub-menu').length != 0){
				$(this).addClass("has-child");
				$(this).click(function() {
					$(this).toggleClass('active');
					$(this).children('.sub-menu').slideToggle();
				});
			}
		});
	});
});
