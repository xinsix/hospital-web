import $ from "jquery"
import Swiper from "swiper"
$(function () {
	
	$(".header .topnav span").click(function(){
		$(".header .topnav").fadeOut();
		$(".header .option").fadeOut();
		$(".header .morenav").fadeIn();
		$(".header .morenav .nav").slideDown();
	});
	
	$(".header .option span").click(function(){
		$(".header .topnav").fadeOut();
		$(".header .optFion").fadeOut();
		$(".header .morenav").fadeIn();
	});
	
	$(".header .morenav .close").click(function(){
		$(".header .morenav").fadeOut();
		$(".header .morenav .nav").slideUp();
		$(".header .topnav").fadeIn();
		$(".header .option").fadeIn();
	});
	
	$(".tabnav a").mouseenter(function(){
		$(this).siblings().removeClass();
		$(this).parent().parent('.tabs').children('.tabblock').children().hide();
		$(this).addClass("current");
		$(this).parent().parent('.tabs').children('.tabblock').children().eq($(this).index()).fadeIn();
	});
	
	//$(".videopop a").click(function(){
	//	$(this).parents('.videopop').children('.floatbg').fadeIn();
	//	$(this).parents('.videopop').find('video').trigger('play');
	//});
	
	$(".floatbg .close").click(function(){
		$(this).parents('.videopop').find('video').trigger('pause');
		$(".floatbg").fadeOut();
	});
	
	// var Swiper2 = new Swiper('.picslide .swiper-container', {
	// 	autoHeight: true,
	// 	observer: true,
	// 	observeParents: true,
	// 	autoplay: true,
	// 	pagination: {
	// 		el: '.picslide .swiper-pagination',
	// 		clickable: true,
	// 	},
	// });

});