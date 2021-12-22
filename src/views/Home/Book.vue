<template>
  <div class="home" v-title data-title="广州市第一人民医院官方网站www.gzhosp.cn|预约挂号|医疗咨询|国家临床重点专科|优势专科|著名专家首页">
  <div class="background">
    <section class="logo">
       <img src="../../static/home/img/home_logo.png">
    </section>
    <section class="quicklink">
    	<span><a href="/home"><i>总院</i></a></span>
        <span><a href="/service/"><i>医疗服务</i></a></span>
        <span><a href="/information/"><i>新闻中心</i></a></span>
    </section>
    <section class="footer">
        <div class="part1">
        	<span><a href="/ns/">广州市第一人民医院南沙医院</a></span>
            <p>Copyright © 广州市第一人民医院 版权所有</p>
            <p>ICP备案号：<a href="https://beian.miit.gov.cn">粤ICP备17084739号</a> 技术支持：<a href="http://www.39.net">39健康网</a></p>
        </div>
        <div class="part3">
    	    <span><img src="../../static/home/img/qrcode_wxdyh.jpg"><p>微信订阅号</p></span>
            <span><img src="../../static/home/img/qrcode_wxfwh.jpg"><p>微信服务号</p></span>
            <span><img src="../../static/home/img/qrcode_weibo.jpg"><p>官方微博</p></span>
        </div>
    </section>
  </div>

  </div>
</template>

<script>
import '../../static/home/css/home.css'/*引入公共样式*/
export default {
    name: "Book",
}
</script>

<style>
.logo img {
    width: 46%;
    margin: 0 auto;
    position: absolute;
    top: 57px;
    left: 459px;
}
.background{
    width:100%;  
    height:100%;  /**宽高100%是为了图片铺满屏幕 */
    position: absolute;
}
.quicklink {
    position: fixed;
    width: 34%;
    height: 21%;
    margin-left: -17%;
    left: 50%;
    top: 42%;
    z-index: 900;
}
section {
    display: block;
}
.quicklink span {
    position: absolute;
    top: 4%;
    width: 36%;
    height: 82%;
    text-align: center;
    font-size: 20px;
    line-height: 20px;
    color: white;
    line-height: 100%;
    border-radius: 8px;
    overflow: hidden;
    background: rgba(68,121,217,0.9) url(../../static/home/img/icon01.png) center 25% no-repeat;
    z-index: 993;
}
.quicklink span:nth-child(2) {
    left: 32%;
    top: 18%;
    background: rgba(238,159,95,0.9) url(../../static/home/img/icon02.png) center 30% no-repeat;
    z-index: 992;
}
.quicklink span:nth-child(3) {
    right: 0;
    top: 0;
    background: rgba(5,161,154,0.9) url(../../static/home/img/icon03.png) center 25% no-repeat;
    z-index: 991;
}
.quicklink span i {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 22%;
    font-style: normal;
}
.quicklink span a {
    display: block;
    height: 100%;
    color: white;
}
.quicklink span:hover {
    opacity: 0.9;
}
.footer {
    width: 100%;
    height: 200px;
    background: url(../../static/home/img/home_footer.png) center top no-repeat;
    color: white;
    position: fixed;
    bottom: 0;
    z-index: 800;
    min-width: 1300px;
}
.footer .part1 {
    left: 12%;
    top: 44px;
    padding-left: 195px;
    font-size: 12px;
    background: url(../../static/home/img/logo6.png) no-repeat;
}
.footer .part1 span {
    display: block;
    font-size: 16px;
    width: 260px;
    line-height: 50px;
    padding-left: 50px;
    margin-bottom: 20px;
    background: url(../../static/home/img/home_link.png) no-repeat;
}
.footer p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.footer a {
    color: white;
}
.footer .part3 {
    right: 12%;
    top: 34px;
    padding-left: 14px;
}
.footer div {
    position: absolute;
}
.footer .part3 span {
    float: left;
    width: 110px;
    text-align: center;
    margin-left: 20px;
}
.footer div {
    position: absolute;
}
a {
    text-decoration: none;
    transition: color 0.25s;
}
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
</style>