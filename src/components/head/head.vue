<template>
  <div class="head">
    <section class="header">
      <a href="/"><img src="https://www.gzhosp.cn/html/images/logo4.jpg" /></a>
      <div class="topnav">
        <a href="/home">首页</a><a href="https://www.gzhosp.cn/about/" target="_blank">医院概况</a
        ><a href="https://www.gzhosp.cn/service" target="_blank">医疗服务</a><a href="https://www.gzhosp.cn/ks/" target="_blank">科室导航</a
        ><a href="https://www.gzhosp.cn/ks/zkzj.html" target="_blank">专科专家</a><a href="https://www.gzhosp.cn/medtech" target="_blank">医疗技术</a
        ><a href="https://www.gzhosp.cn/information/" target="_blank">新闻中心</a><a href="https://bots.4paradigm.com/web/chat/31224/5282ea85-617e-4cdb-9d0a-45b54428c6f6?type=EXPERIENCE" target="_blank">客服中心</a
        ><span></span>
      </div>
      <div class="option" v-if="show">
        <a href="/login" target="_blank" @click="toggle()">登录</a>
		<a href="/register">注册</a
        ><!--<a href="#">English</a>--><span
        ></span>
      </div>
      <div class="morenav">
        <div class="close"></div>
        <div class="search">
          <form action="/search/" method="post">
            <input type="text" placeholder="请输入关键词" name="wd" /><button
              type="submit"
            ></button>
          </form>
        </div>
        <div class="nav">
          <div class="wrap">
            <ul>
              <li><a href="/about/">医院概况</a></li>
              <li><a href="/service/">医疗服务</a></li>
              <li><a href="/ks/">科室导航</a></li>
              <li><a href="/ks/team.html">专科专家</a></li>
              <li><a href="/medtech/">医疗技术</a></li>
              <li><a href="/information/">新闻中心</a></li>
              <li><a href="/rszp/">人事招聘</a></li>
            </ul>
            <ul>
              <li><a href="/ywgk/">院务公开</a></li>
              <li><a href="/hlyd/">护理园地</a></li>
              <li><a href="/kjxx/">科教信息</a></li>
              <!--<li><a href="/rszp/">人事招聘</a></li>-->
              <li><a href="/djw/">党团建设</a></li>
              <li><a href="/ywgl/">医务管理</a></li>
              <li><a href="/llwyh/">伦理委员会</a></li>
              <li><a href="/zt/120/">百廿医脉</a></li>
              <!--<li><a href="#">特色专题</a></li>-->
            </ul>
            <dl>
              <span
                ><p>地址：广州市盘福路1号</p>
                <p><a href="#">[ 查看交通线路 ]</a></p></span
              >
              <span
                ><p>预约咨询电话</p>
                <i>020-81048888</i></span
              >
              <dd><a href="/ns/">广州市第一人民医院南沙医院</a></dd>
              <dd>
                <a href="/about/aboutus/syhdfygk/a_100771.html"
                  >广州市第一人民医院鹤洞医院</a
                >
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import $ from "jquery"; /*引入公共样式*/
import Swiper from "swiper";

export default {
  name: "head",
  data(){
    return{
      //显示隐藏
      show:true,
    }
  },
  methods:{
    //隐藏与显示
    toggle(){
      this.show=!this.show
    },
  }
};
$(function () {
  $(".header .topnav span").click(function () {
    $(".header .topnav").fadeOut();
    $(".header .option").fadeOut();
    $(".header .morenav").fadeIn();
    $(".header .morenav .nav").slideDown();
  });

  $(".header .option span").click(function () {
    $(".header .topnav").fadeOut();
    $(".header .option").fadeOut();
    $(".header .morenav").fadeIn();
  });

  $(".header .morenav .close").click(function () {
    $(".header .morenav").fadeOut();
    $(".header .morenav .nav").slideUp();
    $(".header .topnav").fadeIn();
    $(".header .option").fadeIn();
  });

  $(".tabnav a").mouseenter(function () {
    $(this).siblings().removeClass();
    $(this).parent().parent(".tabs").children(".tabblock").children().hide();
    $(this).addClass("current");
    $(this)
      .parent()
      .parent(".tabs")
      .children(".tabblock")
      .children()
      .eq($(this).index())
      .fadeIn();
  });

  //$(".videopop a").click(function(){
  //	$(this).parents('.videopop').children('.floatbg').fadeIn();
  //	$(this).parents('.videopop').find('video').trigger('play');
  //});

  $(".floatbg .close").click(function () {
    $(this).parents(".videopop").find("video").trigger("pause");
    $(".floatbg").fadeOut();
  });

  var Swiper2 = new Swiper(".picslide .swiper-container", {
    autoHeight: true,
    observer: true,
    observeParents: true,
    autoplay: true,
    pagination: {
      el: ".picslide .swiper-pagination",
      clickable: true,
    },
  });
});
</script>

<style>
/* Created by kong 20190819 */

/* reset */
html,
body,
div,
p,
ul,
ol,
li,
dl,
dt,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
form,
input,
textarea,
select,
th,
td {
  padding: 0;
  margin: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 1em;
}
ol,
ul {
  list-style: none;
}
b,
i,
cite {
  font-weight: normal;
  font-style: normal;
}
img,
iframe {
  border: none;
  vertical-align: top;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
input,
textarea,
button {
  font: inherit;
  border: 0;
  outline: none;
  -webkit-appearance: none;
  font-family: Microsoft Yahei;
}
body {
  font-size: 14px;
  line-height: 24px;
  font-family: Microsoft Yahei;
  color: #333;
  background: white;
  /*padding-top:150px; */
}
a {
  text-decoration: none;
  color: #333;
  transition: color 0.25s;
}
a:hover {
  text-decoration: underline;
  color: #2254af;
}
*:focus {
  outline: none;
}

.swiper-container {
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
}
.swiper-container-no-flexbox .swiper-slide {
  float: left;
}
.swiper-container-vertical > .swiper-wrapper {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}
.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-transition-property: -webkit-transform;
  transition-property: -webkit-transform;
  -o-transition-property: transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}
.swiper-container-android .swiper-slide,
.swiper-wrapper {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
.swiper-container-multirow > .swiper-wrapper {
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.swiper-container-free-mode > .swiper-wrapper {
  -webkit-transition-timing-function: ease-out;
  -o-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
  margin: 0 auto;
}
.swiper-slide {
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  -webkit-transition-property: -webkit-transform;
  transition-property: -webkit-transform;
  -o-transition-property: transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform;
}
.swiper-slide-invisible-blank {
  visibility: hidden;
}
.swiper-container-autoheight,
.swiper-container-autoheight .swiper-slide {
  height: auto;
}
.swiper-container-autoheight .swiper-wrapper {
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  -webkit-transition-property: height, -webkit-transform;
  transition-property: height, -webkit-transform;
  -o-transition-property: transform, height;
  transition-property: transform, height;
  transition-property: transform, height, -webkit-transform;
}
.swiper-container-3d {
  -webkit-perspective: 1200px;
  perspective: 1200px;
}
.swiper-container-3d .swiper-cube-shadow,
.swiper-container-3d .swiper-slide,
.swiper-container-3d .swiper-slide-shadow-bottom,
.swiper-container-3d .swiper-slide-shadow-left,
.swiper-container-3d .swiper-slide-shadow-right,
.swiper-container-3d .swiper-slide-shadow-top,
.swiper-container-3d .swiper-wrapper {
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}
.swiper-container-3d .swiper-slide-shadow-bottom,
.swiper-container-3d .swiper-slide-shadow-left,
.swiper-container-3d .swiper-slide-shadow-right,
.swiper-container-3d .swiper-slide-shadow-top {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10;
}
.swiper-container-3d .swiper-slide-shadow-left {
  background-image: -webkit-gradient(
    linear,
    right top,
    left top,
    from(rgba(0, 0, 0, 0.5)),
    to(rgba(0, 0, 0, 0))
  );
  background-image: -webkit-linear-gradient(
    right,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0)
  );
  background-image: -o-linear-gradient(
    right,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0)
  );
  background-image: linear-gradient(
    to left,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0)
  );
}
.swiper-container-3d .swiper-slide-shadow-right {
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(rgba(0, 0, 0, 0.5)),
    to(rgba(0, 0, 0, 0))
  );
  background-image: -webkit-linear-gradient(
    left,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0)
  );
  background-image: -o-linear-gradient(
    left,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0)
  );
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0)
  );
}
.swiper-container-3d .swiper-slide-shadow-top {
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(rgba(0, 0, 0, 0.5)),
    to(rgba(0, 0, 0, 0))
  );
  background-image: -webkit-linear-gradient(
    bottom,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0)
  );
  background-image: -o-linear-gradient(
    bottom,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0)
  );
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0)
  );
}
.swiper-container-3d .swiper-slide-shadow-bottom {
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(0, 0, 0, 0.5)),
    to(rgba(0, 0, 0, 0))
  );
  background-image: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0)
  );
  background-image: -o-linear-gradient(
    top,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0)
  );
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0)
  );
}
.swiper-container-wp8-horizontal,
.swiper-container-wp8-horizontal > .swiper-wrapper {
  -ms-touch-action: pan-y;
  touch-action: pan-y;
}
.swiper-container-wp8-vertical,
.swiper-container-wp8-vertical > .swiper-wrapper {
  -ms-touch-action: pan-x;
  touch-action: pan-x;
}
.swiper-button-next,
.swiper-button-prev {
  position: absolute;
  top: 50%;
  width: 27px;
  height: 44px;
  margin-top: -22px;
  z-index: 10;
  cursor: pointer;
  background-size: 27px 44px;
  background-position: center;
  background-repeat: no-repeat;
}
.swiper-button-next.swiper-button-disabled,
.swiper-button-prev.swiper-button-disabled {
  opacity: 0.35;
  cursor: auto;
  pointer-events: none;
}
.swiper-button-prev,
.swiper-container-rtl .swiper-button-next {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E");
  left: 10px;
  right: auto;
}
.swiper-button-next,
.swiper-container-rtl .swiper-button-prev {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E");
  right: 10px;
  left: auto;
}
.swiper-button-prev.swiper-button-white,
.swiper-container-rtl .swiper-button-next.swiper-button-white {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E");
}
.swiper-button-next.swiper-button-white,
.swiper-container-rtl .swiper-button-prev.swiper-button-white {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E");
}
.swiper-button-prev.swiper-button-black,
.swiper-container-rtl .swiper-button-next.swiper-button-black {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E");
}
.swiper-button-next.swiper-button-black,
.swiper-container-rtl .swiper-button-prev.swiper-button-black {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E");
}
.swiper-button-lock {
  display: none;
}
.swiper-pagination {
  position: absolute;
  text-align: center;
  -webkit-transition: 0.3s opacity;
  -o-transition: 0.3s opacity;
  transition: 0.3s opacity;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  z-index: 10;
}
.swiper-pagination.swiper-pagination-hidden {
  opacity: 0;
}
.swiper-container-horizontal > .swiper-pagination-bullets,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  bottom: 10px;
  left: 0;
  width: 100%;
}
.swiper-pagination-bullets-dynamic {
  overflow: hidden;
  font-size: 0;
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  -webkit-transform: scale(0.33);
  -ms-transform: scale(0.33);
  transform: scale(0.33);
  position: relative;
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {
  -webkit-transform: scale(0.66);
  -ms-transform: scale(0.66);
  transform: scale(0.66);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {
  -webkit-transform: scale(0.33);
  -ms-transform: scale(0.33);
  transform: scale(0.33);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {
  -webkit-transform: scale(0.66);
  -ms-transform: scale(0.66);
  transform: scale(0.66);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {
  -webkit-transform: scale(0.33);
  -ms-transform: scale(0.33);
  transform: scale(0.33);
}
.swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  display: inline-block;
  border-radius: 100%;
  background: #000;
  opacity: 0.2;
}
button.swiper-pagination-bullet {
  border: none;
  margin: 0;
  padding: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.swiper-pagination-clickable .swiper-pagination-bullet {
  cursor: pointer;
}
.swiper-pagination-bullet-active {
  opacity: 1;
  background: #007aff;
}
.swiper-container-vertical > .swiper-pagination-bullets {
  right: 10px;
  top: 50%;
  -webkit-transform: translate3d(0, -50%, 0);
  transform: translate3d(0, -50%, 0);
}
.swiper-container-vertical
  > .swiper-pagination-bullets
  .swiper-pagination-bullet {
  margin: 6px 0;
  display: block;
}
.swiper-container-vertical
  > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 8px;
}
.swiper-container-vertical
  > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic
  .swiper-pagination-bullet {
  display: inline-block;
  -webkit-transition: 0.2s top, 0.2s -webkit-transform;
  transition: 0.2s top, 0.2s -webkit-transform;
  -o-transition: 0.2s transform, 0.2s top;
  transition: 0.2s transform, 0.2s top;
  transition: 0.2s transform, 0.2s top, 0.2s -webkit-transform;
}
.swiper-container-horizontal
  > .swiper-pagination-bullets
  .swiper-pagination-bullet {
  margin: 0 4px;
}
.swiper-container-horizontal
  > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  white-space: nowrap;
}
.swiper-container-horizontal
  > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic
  .swiper-pagination-bullet {
  -webkit-transition: 0.2s left, 0.2s -webkit-transform;
  transition: 0.2s left, 0.2s -webkit-transform;
  -o-transition: 0.2s transform, 0.2s left;
  transition: 0.2s transform, 0.2s left;
  transition: 0.2s transform, 0.2s left, 0.2s -webkit-transform;
}
.swiper-container-horizontal.swiper-container-rtl
  > .swiper-pagination-bullets-dynamic
  .swiper-pagination-bullet {
  -webkit-transition: 0.2s right, 0.2s -webkit-transform;
  transition: 0.2s right, 0.2s -webkit-transform;
  -o-transition: 0.2s transform, 0.2s right;
  transition: 0.2s transform, 0.2s right;
  transition: 0.2s transform, 0.2s right, 0.2s -webkit-transform;
}
.swiper-pagination-progressbar {
  background: rgba(0, 0, 0, 0.25);
  position: absolute;
}
.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
  background: #007aff;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  -webkit-transform: scale(0);
  -ms-transform: scale(0);
  transform: scale(0);
  -webkit-transform-origin: left top;
  -ms-transform-origin: left top;
  transform-origin: left top;
}
.swiper-container-rtl
  .swiper-pagination-progressbar
  .swiper-pagination-progressbar-fill {
  -webkit-transform-origin: right top;
  -ms-transform-origin: right top;
  transform-origin: right top;
}
.swiper-container-horizontal > .swiper-pagination-progressbar,
.swiper-container-vertical
  > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {
  width: 100%;
  height: 4px;
  left: 0;
  top: 0;
}
.swiper-container-horizontal
  > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,
.swiper-container-vertical > .swiper-pagination-progressbar {
  width: 4px;
  height: 100%;
  left: 0;
  top: 0;
}
.swiper-pagination-white .swiper-pagination-bullet-active {
  background: #fff;
}
.swiper-pagination-progressbar.swiper-pagination-white {
  background: rgba(255, 255, 255, 0.25);
}
.swiper-pagination-progressbar.swiper-pagination-white
  .swiper-pagination-progressbar-fill {
  background: #fff;
}
.swiper-pagination-black .swiper-pagination-bullet-active {
  background: #000;
}
.swiper-pagination-progressbar.swiper-pagination-black {
  background: rgba(0, 0, 0, 0.25);
}
.swiper-pagination-progressbar.swiper-pagination-black
  .swiper-pagination-progressbar-fill {
  background: #000;
}
.swiper-pagination-lock {
  display: none;
}
.swiper-scrollbar {
  border-radius: 10px;
  position: relative;
  -ms-touch-action: none;
  background: rgba(0, 0, 0, 0.1);
}
.swiper-container-horizontal > .swiper-scrollbar {
  position: absolute;
  left: 1%;
  bottom: 3px;
  z-index: 50;
  height: 5px;
  width: 98%;
}
.swiper-container-vertical > .swiper-scrollbar {
  position: absolute;
  right: 3px;
  top: 1%;
  z-index: 50;
  width: 5px;
  height: 98%;
}
.swiper-scrollbar-drag {
  height: 100%;
  width: 100%;
  position: relative;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  left: 0;
  top: 0;
}
.swiper-scrollbar-cursor-drag {
  cursor: move;
}
.swiper-scrollbar-lock {
  display: none;
}
.swiper-zoom-container {
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
}
.swiper-zoom-container > canvas,
.swiper-zoom-container > img,
.swiper-zoom-container > svg {
  max-width: 100%;
  max-height: 100%;
  -o-object-fit: contain;
  object-fit: contain;
}
.swiper-slide-zoomed {
  cursor: move;
}
.swiper-lazy-preloader {
  width: 42px;
  height: 42px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -21px;
  margin-top: -21px;
  z-index: 10;
  -webkit-transform-origin: 50%;
  -ms-transform-origin: 50%;
  transform-origin: 50%;
  -webkit-animation: swiper-preloader-spin 1s steps(12, end) infinite;
  animation: swiper-preloader-spin 1s steps(12, end) infinite;
}
.swiper-lazy-preloader:after {
  display: block;
  content: "";
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
  background-position: 50%;
  background-size: 100%;
  background-repeat: no-repeat;
}
.swiper-lazy-preloader-white:after {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
}
@-webkit-keyframes swiper-preloader-spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes swiper-preloader-spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.swiper-container .swiper-notification {
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
  opacity: 0;
  z-index: -1000;
}
.swiper-container-fade.swiper-container-free-mode .swiper-slide {
  -webkit-transition-timing-function: ease-out;
  -o-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.swiper-container-fade .swiper-slide {
  pointer-events: none;
  -webkit-transition-property: opacity;
  -o-transition-property: opacity;
  transition-property: opacity;
}
.swiper-container-fade .swiper-slide .swiper-slide {
  pointer-events: none;
}
.swiper-container-fade .swiper-slide-active,
.swiper-container-fade .swiper-slide-active .swiper-slide-active {
  pointer-events: auto;
}
.swiper-container-cube {
  overflow: visible;
}
.swiper-container-cube .swiper-slide {
  pointer-events: none;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  z-index: 1;
  visibility: hidden;
  -webkit-transform-origin: 0 0;
  -ms-transform-origin: 0 0;
  transform-origin: 0 0;
  width: 100%;
  height: 100%;
}
.swiper-container-cube .swiper-slide .swiper-slide {
  pointer-events: none;
}
.swiper-container-cube.swiper-container-rtl .swiper-slide {
  -webkit-transform-origin: 100% 0;
  -ms-transform-origin: 100% 0;
  transform-origin: 100% 0;
}
.swiper-container-cube .swiper-slide-active,
.swiper-container-cube .swiper-slide-active .swiper-slide-active {
  pointer-events: auto;
}
.swiper-container-cube .swiper-slide-active,
.swiper-container-cube .swiper-slide-next,
.swiper-container-cube .swiper-slide-next + .swiper-slide,
.swiper-container-cube .swiper-slide-prev {
  pointer-events: auto;
  visibility: visible;
}
.swiper-container-cube .swiper-slide-shadow-bottom,
.swiper-container-cube .swiper-slide-shadow-left,
.swiper-container-cube .swiper-slide-shadow-right,
.swiper-container-cube .swiper-slide-shadow-top {
  z-index: 0;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.swiper-container-cube .swiper-cube-shadow {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.6;
  -webkit-filter: blur(50px);
  filter: blur(50px);
  z-index: 0;
}
.swiper-container-flip {
  overflow: visible;
}
.swiper-container-flip .swiper-slide {
  pointer-events: none;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  z-index: 1;
}
.swiper-container-flip .swiper-slide .swiper-slide {
  pointer-events: none;
}
.swiper-container-flip .swiper-slide-active,
.swiper-container-flip .swiper-slide-active .swiper-slide-active {
  pointer-events: auto;
}
.swiper-container-flip .swiper-slide-shadow-bottom,
.swiper-container-flip .swiper-slide-shadow-left,
.swiper-container-flip .swiper-slide-shadow-right,
.swiper-container-flip .swiper-slide-shadow-top {
  z-index: 0;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.swiper-container-coverflow .swiper-wrapper {
  -ms-perspective: 1200px;
}

.swiper-pagination-bullet,
.swiper-button-prev,
.swiper-button-next {
  outline: none;
}
body,
html {
  height: 100%;
}
.wrap {
  width: 1300px;
  margin: 0 auto;
  clear: both;
}
.clear {
  clear: both;
  height: 0;
  line-height: 0;
  font-size: 0;
}

.search form {
  width: 500px;
  margin: 0 auto;
  border-bottom: #ececec 1px solid;
}
.search input {
  display: inline-block;
  width: 477px;
  line-height: 64px;
}
.search button {
  display: inline-block;
  width: 23px;
  height: 64px;
  vertical-align: middle;
  background: url(https://www.gzhosp.cn/html/images/icon05.png) left center
    no-repeat;
  cursor: pointer;
}

.header {
  font-size: 16px;
  background: white;
  border-top: #2254af 10px solid;
  width: 100%;
  height: 140px;
  min-width: 1300px;
  box-shadow: rgba(0, 0, 0, 0.05) 0 5px 15px 0;
  position: fixed;
  top: 0;
  z-index: 998;
}
.header img {
  width: 335px;
  height: 80px;
  position: absolute;
  top: 30px;
  left: 35px;
  z-index: 997;
}
.header .topnav {
  width: 45%;
  line-height: 140px;
  padding-left: 430px;
  display: flex;
  justify-content: space-between;
}
.header .topnav span {
  width: 14px;
  height: 140px;
  background: url(https://www.gzhosp.cn/html/images/icon04.png) left center
    no-repeat;
  cursor: pointer;
}
.header .option {
  line-height: 140px;
  position: absolute;
  top: 0;
  right: 50px;
}
.header .option a {
  margin-right: 20px;
}
.header .option span {
  display: inline-block;
  width: 23px;
  height: 24px;
  margin-left: 30px;
  background: url(https://www.gzhosp.cn/html/images/icon05.png) no-repeat;
  vertical-align: middle;
  cursor: pointer;
}
.header .morenav {
  display: none;
}
.header .close {
  width: 23px;
  height: 24px;
  background: url(https://www.gzhosp.cn/html/images/icon14.png) no-repeat;
  position: absolute;
  top: 53px;
  right: 50px;
  cursor: pointer;
  z-index: 996;
}
.header .search {
  position: absolute;
  top: 0;
  width: 100%;
}
.header .search form {
  margin-top: 32px;
}
.header .nav {
  display: none;
  width: 100%;
  overflow: hidden;
  padding-bottom: 50px;
  background: rgba(95, 146, 238, 0.95);
  position: absolute;
  top: 140px;
}
.header .nav .wrap {
  width: 980px;
}
.header .nav ul {
  float: left;
  width: 280px;
  margin: 50px 20px 0 0;
}
.header .nav ul li {
  line-height: 50px;
  border-radius: 5px;
  padding-left: 30px;
  margin-top: 10px;
  background: white url(https://www.gzhosp.cn/html/images/icon15.png) right 25px
    center no-repeat;
}
.header .nav ul li a {
  display: block;
}
.header .nav dl {
  float: right;
  width: 280px;
  margin-top: 35px;
}
.header .nav dl span {
  display: block;
  color: white;
  padding-left: 47px;
  background: url(https://www.gzhosp.cn/html/images/icon12.png) left 4px
    no-repeat;
  margin: 32px 0;
}
.header .nav dl span a {
  color: white;
}
.header .nav dl span i {
  font-size: 28px;
  line-height: 38px;
  font-weight: bold;
}
.header .nav dl span:nth-child(2) {
  background-image: url(https://www.gzhosp.cn/html/images/icon13.png);
  background-position: left center;
}
.header .nav dl dd {
  line-height: 50px;
  border-radius: 5px;
  padding-left: 53px;
  margin-top: 10px;
  background: white url(https://www.gzhosp.cn/html/images/logo3.png) 18px center
    no-repeat;
}
.header .nav dl dd a {
  display: block;
}
</style>
