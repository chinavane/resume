var Swiper = require('./components/swiper/swiper-3.3.1.min');
var SwiperAnimate = require('./components/swiper/swiper.animate1.0.2.min');

var mySwiper = new Swiper('.swiper-container', {
    onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
        SwiperAnimate.swiperAnimateCache(swiper); //隐藏动画元素 
        SwiperAnimate.swiperAnimate(swiper); //初始化完成开始动画
    },
    onSlideChangeEnd: function(swiper) {
        SwiperAnimate.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    }
})

var $ = require('zepto-modules/zepto');
require('zepto-modules/event');
require('zepto-modules/ajax');
require('zepto-modules/touch');
module.exports = $;

$("#myIscroll").hide();
$(".swiper-container").show();


$("#enter").tap(function(){

    $("#myIscroll").show();
    $(".swiper-container").hide();


    $.post('/api/skill', {}, function(response){
        console.log(response);
      // process response
    })

    var IScroll = require('./components/iscroll/iscroll');
    var myScroll;
    myScroll = new IScroll('#wrapper', { mouseWheel: true });
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);



})


// 三大规范：AMD、CMD、CommonJs
// 1.html中的ani的代码
// 2.确保swiper.animate1.0.2.min有接口暴露
// 3.在index.js中引入swiper.animate1.0.2.min
// 4.在index.js中调用动画初始化操作部分，注意需要将方法写成“对象.方法”
// 5.在index.css中引入animate.css的动画样式