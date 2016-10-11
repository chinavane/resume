//js的入口文件
//引入zepto
var $ = require('./components/zepto-modules/_custom'); 

$('#enter').tap(function(){
	console.log('tap'); 
	
})
//引入swiper
var Swiper = require('./components/swiper/swiper-3.3.1.min.js');
//引入swiper animate
var SwiperAnimate = require('./components/swiper/swiper.animate1.0.2.min.js');

var mySwiper = new Swiper ('.swiper-container', {
	effect: 'cube', 
	onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
		SwiperAnimate.swiperAnimateCache(swiper); //隐藏动画元素 
		SwiperAnimate.swiperAnimate(swiper); //初始化完成开始动画
	}, 
	onSlideChangeEnd: function(swiper){ 
		SwiperAnimate.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	} 
})        
