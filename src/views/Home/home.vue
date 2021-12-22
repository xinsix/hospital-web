<template>
  <div class="home" v-title data-title="广州市第一人民医院官方网站www.gzhosp.cn|预约挂号|医疗咨询|国家临床重点专科|优势专科|著名专家首页">
    <Demo1></Demo1>
    <section class="indexslide" id="hu">
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img
              src="https://www.gzhosp.cn/Upload/202104/637551445484738580.jpg"
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://www.gzhosp.cn/Upload/202103/637526387410583144.jpg"
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://www.gzhosp.cn/Upload/202111/637716988876028191.jpg"
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://www.gzhosp.cn/Upload/202007/6373039943255595917679577.jpg"
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://www.gzhosp.cn/Upload/201909/6370424014114523069348898.jpg"
            />
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </section>

    <div class="indexbg1">
      <div class="wrap">
        <div class="left">
          <section class="picslide">
            <div
              class="
                swiper-container
                swiper-container-horizontal
                swiper-container-autoheight
              "
            >
              <div
                class="swiper-wrapper"
                style="
                  height: 403px;
                  transition-duration: 0ms;
                  transform: translate3d(-1300px, 0px, 0px);
                "
              >
                <div class="swiper-slide" style="width: 650px">
                  <a href="/news/dynamic/a_108216.html">
                    <img
                      src="https://www.gzhosp.cn/Upload/202108/637659053936629337.jpg"
                    />
                    <p>国家级“胸痛中心”落户广州市第一人民医院</p>
                  </a>
                </div>

                <div
                  class="swiper-slide swiper-slide-prev"
                  style="width: 650px"
                >
                  <a href="/news/dynamic/a_108200.html">
                    <img
                      src="https://www.gzhosp.cn/Upload/202108/637655055002418261.jpg"
                    />
                    <p>
                      创建高水平研究型医院！广州市第一人民医院通过广州市研究型医院现场评审
                    </p>
                  </a>
                </div>

                <div
                  class="swiper-slide swiper-slide-active"
                  style="width: 650px"
                >
                  <a href="/news/dynamic/a_108179.html">
                    <img
                      src="https://www.gzhosp.cn/Upload/202108/637648140764323464.png"
                    />
                    <p>寻找广州最美医师，这四位市一人榜上有名!</p>
                  </a>
                </div>

                <div
                  class="swiper-slide swiper-slide-next"
                  style="width: 650px"
                >
                  <a href="/news/dynamic/a_108164.html">
                    <img
                      src="https://www.gzhosp.cn/Upload/202108/637640952532222280.jpg"
                    />
                    <p>创建老年友善医疗机构 持续提升“银发族”就医获得感</p>
                  </a>
                </div>
              </div>
              <span
                class="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              ></span>
            </div>
            <div
              class="
                swiper-pagination
                swiper-pagination-clickable
                swiper-pagination-bullets
              "
            >
              <span
                class="swiper-pagination-bullet"
                tabindex="0"
                role="button"
                aria-label="Go to slide 1"
              ></span
              ><span
                class="swiper-pagination-bullet"
                tabindex="0"
                role="button"
                aria-label="Go to slide 2"
              ></span
              ><span
                class="swiper-pagination-bullet swiper-pagination-bullet-active"
                tabindex="0"
                role="button"
                aria-label="Go to slide 3"
              ></span
              ><span
                class="swiper-pagination-bullet"
                tabindex="0"
                role="button"
                aria-label="Go to slide 4"
              ></span>
            </div>
          </section>

          <div class="clear"></div>
          <section class="tabs">
            <div class="tabnav">
              <a class="current" href="/news/dynamic/">医院新闻</a
              ><a href="/news/MediaFocus/">媒体聚焦</a
              ><a href="/news/dzyk/">电子院刊</a><a href="/rszp/">人事招聘</a
              ><a href="/news/ggxx/">医院公告</a
              ><a href="/ywgk/zbcg/">招标采购</a>
            </div>
            <div class="tabblock">
              <div class="datelist" style="display: block">
               <div style="position: relative;top: -50px;overflow: scroll;height: 500px">
                 <template>
                   <el-table
                           :data="tableData1"
                           style="width: 100%">
                     <el-table-column
                             prop="newsDate"
                             >
                     </el-table-column>
                     <el-table-column
                             prop="newsTitle"
                             >
                     </el-table-column>
                     <el-table-column
                             prop="newsContent"
                            >
                     </el-table-column>
                   </el-table>
                 </template>
               </div>
              </div>
              <div class="datelist">
                <div style="position: relative;top: -50px;overflow: scroll;height: 500px">
                  <template>
                    <el-table
                            :data="tableData2"
                            style="width: 100%">
                      <el-table-column
                              prop="newsDate"
                      >
                      </el-table-column>
                      <el-table-column
                              prop="newsTitle"
                      >
                      </el-table-column>
                      <el-table-column
                              prop="newsContent"
                      >
                      </el-table-column>
                    </el-table>
                  </template>
                </div>
              </div>
              <div class="datelist">
                <div style="position: relative;top: -50px;overflow: scroll;height: 500px">
                  <template>
                    <el-table
                            :data="tableData4"
                            style="width: 100%">
                      <el-table-column
                              prop="newsDate"
                      >
                      </el-table-column>
                      <el-table-column
                              prop="newsTitle"
                      >
                      </el-table-column>
                      <el-table-column
                              prop="newsContent"
                      >
                      </el-table-column>
                    </el-table>
                  </template>
                </div>
              </div>

              <div class="datelist">
                <div style="position: relative;top: -50px;overflow: scroll;height: 500px">
                  <template>
                    <el-table
                            :data="tableData5"
                            style="width: 100%">
                      <el-table-column
                              prop="newsDate"
                      >
                      </el-table-column>
                      <el-table-column
                              prop="newsTitle"
                      >
                      </el-table-column>
                      <el-table-column
                              prop="newsContent"
                      >
                      </el-table-column>
                    </el-table>
                  </template>
                </div>
              </div>
              <div class="datelist">
                <div style="position: relative;top: -50px;overflow: scroll;height: 500px">
                  <template>
                    <el-table
                            :data="tableData5"
                            style="width: 100%">
                      <el-table-column
                              prop="newsDate"
                      >
                      </el-table-column>
                      <el-table-column
                              prop="newsTitle"
                      >
                      </el-table-column>
                      <el-table-column
                              prop="newsContent"
                      >
                      </el-table-column>
                    </el-table>
                  </template>
                </div>
              </div>
              <div class="datelist">
                <div style="position: relative;top: -50px;overflow: scroll;height: 500px">
                  <template>
                    <el-table
                            :data="tableData6"
                            style="width: 100%">
                      <el-table-column
                              prop="newsDate"
                      >
                      </el-table-column>
                      <el-table-column
                              prop="newsTitle"
                      >
                      </el-table-column>
                      <el-table-column
                              prop="newsContent"
                      >
                      </el-table-column>
                    </el-table>
                  </template>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div class="right">
          <dl class="quicklink8">
            <dd><a href="/registration">预约挂号</a></dd>
            <dd><a href="https://www.gzhosp.cn/jyzn/czxx/" target="_blank">出诊信息</a></dd>
            <dd><a href="https://www.gzhosp.cn/jyzn/mzzn/jzzn/" target="_blank">就诊指南</a></dd>
            <dd><a href="https://www.gzhosp.cn/ks/" target="_blank">专家门诊</a></dd>
            <dd><a href="https://www.gzhosp.cn/ks/" target="_blank">科室导航</a></dd>
            <dd><a href="https://www.amap.com/dir?from%5Bid%5D=B0HRMRHJYZ&from%5Bname%5D=%E4%BD%9B%E5%B1%B1%E5%8D%8E%E5%8D%97IT%E5%AD%A6%E9%99%A2(%E4%B8%9C%E9%97%A8)&from%5Blnglat%5D=113.101660%2C23.036205&from%5Bmodxy%5D=113.101660%2C23.036205&from%5Bpoitype%5D=991400&from%5Badcode%5D=440604&to%5Bname%5D=%E5%B9%BF%E5%B7%9E%E5%B8%82%E7%AC%AC%E4%B8%80%E4%BA%BA%E6%B0%91%E5%8C%BB%E9%99%A2&to%5Blnglat%5D=113.256347%2C23.131207&to%5Bid%5D=B0FFGOEMOC-to&to%5Bpoitype%5D=090101&to%5Badcode%5D=440100&to%5Bmodxy%5D=113.258007%2C23.130871&type=bus&policy=0&dateTime=now" target="_blank">交通指南</a></dd>
          </dl>

          <section class="entry1">
            <a href="/ns/"
              ><img
                src="https://www.gzhosp.cn/Upload/201909/6370424074493176525867502.jpg"
            /></a>
          </section>

          <div class="yqfb">
            <a href="/zt/djt/"
              ><img
                src="https://www.gzhosp.cn/Upload/202108/637649540201194637.gif"
            /></a>
          </div>
        </div>
      </div>
    </div>

    <div class="indexbg2">
      <div class="wrap">
        <section class="entry2">
          <a href="/zt/120/">
            <img
              src="https://www.gzhosp.cn/Upload/201910/6370788090578072637964687.jpg"
          /></a>

          <a href="#">
            <img
              src="https://www.gzhosp.cn/Upload/201909/6370424058395955816027455.jpg"
          /></a>

          <a href="/djw/">
            <img
              src="https://www.gzhosp.cn/Upload/201909/6370424060964302714562414.jpg"
          /></a>

          <a href="#">
            <img
              src="https://www.gzhosp.cn/Upload/201909/6370424063880669526283804.jpg"
          /></a>
        </section>

        <section class="links">
          <b>友情链接</b><a href="http://www.39.net">39健康网</a>|<a
            href="http://www.nhc.gov.cn//"
            >中华人民共和国国家卫生健康委员会</a
          >|<a href="http://gdwsjd.gd.gov.cn/">广东卫生监督</a>|<a
            href="http://wsjkw.gd.gov.cn/"
            >广东省卫生健康委员会</a
          >|<a href="http://wjw.gz.gov.cn/">广州市卫生健康委员会</a>|<a
            href="http://www.gzhmu.edu.cn/"
            >广州医学院</a
          >|<a href="http://www.dayoo.com/">广州日报</a>|<a
            href="http://www.ycwb.com/"
            >羊城晚报</a
          >|<a href="http://www.gzszyy.com/">广州市中医医院</a>
        </section>
      </div>
    </div>

    <!--飘浮广告 start-->
    <div id="thediv" ref="thediv" @mouseover="clearFdAd" @mouseout="starFdAd">
      <img
        src="https://www.gzhosp.cn/Upload/202008/637327524246711891.png"
        border="0"
      />
      <span id="close" @click="testClose()">X</span>
    </div>
    <!--飘浮广告 end-->

    <Demo2></Demo2>
  </div>
</template>

<script >
import demo1 from "../../components/head/head.vue";
import demo2 from "../../components/footer/footer.vue";
import $ from "jquery";
import axios from 'axios'
//import '../../static/home/js/jquery'

import "../../static/home/js/common.js";
// import '../../static/home/js/core.js'

//  import '../../static/home/js/pf.js'

import "../../static/home/js/uaredirect.js";
// import '../../static/home/js/z_stat.js'

import Swiper from "../../static/home/js/swiper-bundle.min.js";

var interval;
export default {
  components: {
    Demo1: demo1, //将别名demo 变成 组件 Demo
    Demo2: demo2,
  },
  data() {
    return {
      tableData1:[],
      tableData2:[],
      tableData3:[],
      tableData4:[],
      tableData5:[],
      tableData6:[],
      xPos: 300,
      yPos: 200,
      step: 1,
      delay: 8,
      height: 0,
      Hoffset: 0,
      Woffset: 0,
      yon: 0,
      xon: 0,
      pause: true,
    };
  },
  mounted() {
    (interval = setInterval(this.changePos, 10)), this.test();
  },
  methods: {
    test() {
      var swiper = new Swiper(".mySwiper", {
        autoHeight: true,
        observer: true,
        observeParents: true,
        autoplay: true,
        spaceBetween: 5,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
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
    },
    testClose() {
      document.getElementById("thediv").style.visibility = "hidden";
    },
    changePos() {
      let width = document.documentElement.clientWidth;
      let height = document.documentElement.clientHeight;
      this.Hoffset = this.$refs.thediv.offsetHeight;
      this.Woffset = this.$refs.thediv.offsetWidth;
      this.$refs.thediv.style.left =
        this.xPos +
        document.body.scrollLeft +
        document.documentElement.scrollLeft +
        "px";
      this.$refs.thediv.style.top =
        this.yPos +
        document.body.scrollTop +
        document.documentElement.scrollTop +
        "px";
      if (this.yon) {
        this.yPos = this.yPos + this.step;
      } else {
        this.yPos = this.yPos - this.step;
      }
      if (this.yPos < 0) {
        this.yon = 1;
        this.yPos = 0;
      }
      if (this.yPos >= height - this.Hoffset) {
        this.yon = 0;
        this.yPos = height - this.Hoffset;
      }
      if (this.xon) {
        this.xPos = this.xPos + this.step;
      } else {
        this.xPos = this.xPos - this.step;
      }
      if (this.xPos < 0) {
        this.xon = 1;
        this.xPos = 0;
      }
      if (this.xPos >= width - this.Woffset) {
        this.xon = 0;
        this.xPos = width - this.Woffset;
      }
    },
    clearFdAd() {
      clearInterval(interval);
    },
    starFdAd() {
      interval = setInterval(this.changePos, 10);
    },
    //自定义索引

    //查询第一页
    selNews1(){
      axios.get(" http://119.91.29.66:8091/client/news/search").then(resp=>{
        this.tableData1=resp.data.list
      })
    },
    selNews2(){
      axios.get(" http://119.91.29.66:8091/client/news/search?pageNo=2").then(resp=>{
        this.tableData2=resp.data.list
      })
    },
    selNews3(){
      axios.get(" http://119.91.29.66:8091/client/news/search?pageNo=3").then(resp=>{
        this.tableData3=resp.data.list
      })
    },
    selNews4(){
      axios.get(" http://119.91.29.66:8091/client/news/search?pageNo=4").then(resp=>{
        this.tableData4=resp.data.list
      })
    },
    selNews5(){
      axios.get(" http://119.91.29.66:8091/client/news/search?pageNo=5").then(resp=>{
        this.tableData5=resp.data.list
      })
    },
    selNews6(){
      axios.get(" http://119.91.29.66:8091/client/news/search?pageNo=6").then(resp=>{
        this.tableData6=resp.data.list
      })
    },
  },
  mounted(){
    this.selNews1();
    this.selNews2();
    this.selNews3();
    this.selNews4();
    this.selNews5();
    this.selNews6();

  }
};
</script>

<style>
@import url("../../static/home/css/swiper-bundle.min.css");

#thediv {
  z-index: 1000000;
  position: absolute;
  top: 43px;
  left: 2px;
  height: 100px;
  width: 100px;
}
#thediv {
  width: 140px;
  height: 140px;
}
#thediv img {
  width: 140px;
  height: 140px;
}
#close {
  width: 20px;
  height: 20px;
  line-height: 20px;
  background-color: red;
  position: absolute;
  color: #ffffff;
  text-align: center;
}

#hu {
  padding-top: 150px;
}
.focuspic {
  width: 420px;
  height: 260px;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
}
.focuspic img {
  width: 100%;
  height: 100%;
}
.focuspic p {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  font-size: 16px;
  color: white;
  line-height: 58px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-indent: 30px;
  background: #000;
  background: -moz-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, rgba(0, 0, 0, 0)),
    color-stop(100%, rgba(0, 0, 0, 0.5))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  background: -ms-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='rgba(0,0,0,0)', endColorstr='rgba(0,0,0,0.5)',GradientType=0 );
}

.focusblock {
  overflow: hidden;
}
.focusblock img {
  float: left;
  width: 200px;
  height: 125px;
  margin-right: 20px;
  border-radius: 5px;
}
.focusblock strong {
  display: block;
  font-size: 18px;
  font-weight: normal;
  line-height: 18px;
  color: #333;
  margin-top: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.focusblock p {
  color: #999;
  margin-top: 15px;
  height: 48px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.focusblock i {
  display: block;
  color: #999;
  line-height: 14px;
  margin-top: 25px;
}
.focusblock.large img {
  width: 320px;
  height: 198px;
  margin-right: 28px;
}
.focusblock.large strong {
  margin-top: 19px;
}
.focusblock.large p {
  margin-top: 19px;
  height: 72px;
  -webkit-line-clamp: 3;
}
.focusblock.large i {
  margin-top: 44px;
}
.focusblock.line {
  padding-bottom: 18px;
  border-bottom: #f0f0f0 1px solid;
}

.picslide {
  float: left;
  width: 650px;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
}
.picslide img {
  width: 650px;
  height: 403px;
}
.picslide p {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  font-size: 16px;
  color: white;
  line-height: 78px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-indent: 40px;
  background: #000;
  background: -moz-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, rgba(0, 0, 0, 0)),
    color-stop(100%, rgba(0, 0, 0, 0.5))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  background: -ms-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='rgba(0,0,0,0)', endColorstr='rgba(0,0,0,0.5)',GradientType=0 );
}
.picslide .swiper-pagination {
  bottom: 31px;
  right: 35px;
  left: auto;
  line-height: 12px;
  text-align: right;
}
.picslide .swiper-pagination .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  margin: 0 5px;
  background: #437de8;
  opacity: 1;
}
.picslide .swiper-pagination .swiper-pagination-bullet-active {
  background: white;
}

.tabblock > * {
  display: none;
}

.tabnav {
  font-size: 18px;
  color: #666;
  line-height: 62px;
  height: 64px;
  border-bottom: #f0f0f0 1px solid;
}
.tabnav a {
  color: #666;
  display: inline-block;
  margin-right: 27px;
}
.tabnav a:hover,
.tabnav a.current {
  font-size: 24px;
  color: #333;
  border-bottom: #437de8 2px solid;
  text-decoration: none;
}

.datelist div {
  overflow: hidden;
}
.datelist div span {
  float: left;
  width: 115px;
  height: 83px;
  padding-left: 5px;
  line-height: 14px;
  color: #4479d9;
}
.datelist div span b {
  display: block;
  font-size: 30px;
  line-height: 30px;
  margin-bottom: 10px;
}
.datelist div strong {
  display: block;
  font-size: 18px;
  font-weight: normal;
  line-height: 20px;
  color: #e60321;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.datelist div strong a {
  color: #e60321;
}
.datelist div p {
  color: #999;
  margin-top: 15px;
  height: 48px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.datelist ul {
  margin-top: 20px;
}
.datelist li {
  line-height: 36px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.datelist li i {
  float: left;
  width: 113px;
  padding-left: 7px;
  color: #999;
}

.floatbg {
  display: none;
  position: fixed !important;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  z-index: 999;
}
.floatcard {
  position: absolute;
  top: 50%;
  left: 50%;
}
.floatcard .close {
  width: 22px;
  height: 22px;
  background: url(https://www.gzhosp.cn/images/icon28.png) no-repeat;
  position: absolute;
  top: 24px;
  right: 24px;
  cursor: pointer;
}

.videolist li {
  padding-top: 16px;
  overflow: hidden;
}
.videolist img {
  display: block;
  float: right;
  width: 130px;
  height: 80px;
  border-radius: 5px;
}
.videolist strong {
  display: block;
  float: left;
  width: calc(100% - 150px);
  font-weight: normal;
  line-height: 34px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.videolist span {
  display: block;
  float: left;
  width: calc(100% - 150px);
  color: #999;
  line-height: 14px;
  padding: 10px 0 22px;
  border-bottom: #f0f0f0 1px solid;
}
.videopop .floatcard {
  width: 1000px;
  height: 588px;
  margin: -294px 0 0 -500px;
}
.videopop .floatcard .close {
  top: 0px;
  right: -32px;
}
.videopop .floatcard video {
  display: block;
  width: 1000px;
  height: 588px;
  background: black;
}

.position {
  line-height: 14px;
  color: #999;
  margin-top: 24px;
}
.position a {
  color: #999;
  padding: 0 5px;
}
.position a:hover {
  color: #2254af;
}
.position b {
  color: #333;
  padding: 0 5px;
}

.title {
  font-size: 24px;
  margin-bottom: 25px;
}
.title.line {
  padding-bottom: 19px;
  border-bottom: #f0f0f0 1px solid;
}
.title a {
  float: right;
  font-size: 14px;
  color: #666;
  padding: 0 20px;
  border: #eaeaea 1px solid;
  border-radius: 24px;
}
.title a:hover {
  color: #2254af;
}
.title em {
  float: right;
  font-size: 14px;
  font-style: normal;
  color: #999;
}
.title b {
  color: #f33526;
}

.date {
  display: block;
  width: 50px;
  height: 72px;
  padding: 8px 15px 0;
  background: #4479d9;
  text-align: center;
  color: white;
  border-radius: 3px;
}
.date b {
  font-size: 36px;
  line-height: 41px;
  display: block;
  border-bottom: #a2bcec 1px solid;
}
.date i {
  font-size: 12px;
  opacity: 0.5;
  display: block;
  line-height: 27px;
}

.newsblock .date {
  float: left;
  margin-right: 20px;
}
.newsblock strong {
  display: block;
  font-size: 16px;
  line-height: 16px;
  font-weight: normal;
  padding-top: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.newsblock p {
  color: #999;
  padding-top: 21px;
  height: 72px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.covervideo {
  width: 460px;
  height: 287px;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
}
.covervideo img {
  width: 100%;
  height: 100%;
}
.covervideo span {
  display: block;
  width: 337px;
  height: 79px;
  padding: 208px 40px 0 83px;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5) url("https://www.gzhosp.cn/images/icon24.png")
    30px 212px no-repeat;
}
.covervideo span p {
  font-size: 16px;
  line-height: 26px;
  color: white;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.tl img {
  width: 100%;
  border-radius: 5px;
}

.main {
  float: left;
  margin: 40px 0 70px;
  width: 960px;
}
.side {
  float: right;
  margin: 40px 0 70px;
  width: 300px;
}
.secondary {
  float: left;
  margin: 40px 0 70px 30px;
  width: 800px;
}
.extra {
  float: left;
  margin: 40px 0 70px;
  width: 140px;
}

.listnav {
  font-size: 18px;
  line-height: 50px;
  text-align: center;
}
.listnav li {
  margin-bottom: 10px;
}
.listnav li a {
  display: block;
  border-radius: 5px;
}
.listnav li.current a,
.listnav li a:hover {
  color: white;
  text-decoration: none;
  background: #e60321;
}

.mainlist dd {
  padding: 30px 0;
  height: 20px;
  border-bottom: #f0f0f0 1px solid;
}
.mainlist2 dd {
  padding: 30px 0;
  height: 150px;
  border-bottom: #f0f0f0 1px solid;
}
.mainlist dd:first-child {
  padding-top: 0;
}
.mainlist dd img {
  width: 240px;
  height: 150px;
  float: left;
  margin-right: 30px;
  border-radius: 5px;
}
.mainlist dd strong {
  display: block;
  font-size: 18px;
  font-weight: normal;
  padding-top: 2px;
  height: 48px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.mainlist dd p {
  color: #999;
  margin: 17px 0 15px;
  height: 48px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.mainlist dd span {
  display: block;
  font-size: 12px;
  line-height: 12px;
  font-style: normal;
  color: #999;
}
.mainlist dd span i {
  float: right;
}

.pageno {
  padding-top: 40px;
  text-align: center;
}
.pageno span,
.pageno b,
.pageno a,
.pageno i {
  display: inline-block;
  width: 36px;
  height: 36px;
  line-height: 36px;
  border-radius: 5px;
  text-align: center;
  font-size: 16px;
  color: #666;
  overflow: hidden;
}
.pageno b {
  background: #e60321;
  color: white;
}
.pageno > a:hover {
  background: #e60321;
  color: white;
  text-decoration: none;
}
.pageno span {
  background: url(https://www.gzhosp.cn/images/slide04_left.jpg) center center
    no-repeat;
  margin: 0 10px;
}
.pageno span:last-child {
  background-image: url(https://www.gzhosp.cn/images/slide04_right.jpg);
}
.pageno span a {
  background: url(https://www.gzhosp.cn/images/slide03_left.jpg) center center
    no-repeat;
}
.pageno span:last-child a {
  background-image: url(https://www.gzhosp.cn/images/slide03_right.jpg);
}

.hotnews {
  border-bottom: #e8e8e8 1px solid;
}
.hotnews dt {
  color: #2254af;
  font-size: 24px;
  line-height: 24px;
  padding: 66px 0 0 30px;
  height: 54px;
  background: url(https://www.gzhosp.cn/html/images/bg12.jpg) no-repeat;
}
.hotnews dd {
  font-size: 16px;
  padding: 0 30px 30px;
  border: #e8e8e8 1px solid;
  border-top: none;
  border-bottom: none;
}
.hotnews dd a {
  display: block;
  padding-top: 30px;
  max-height: 48px;
  overflow: hidden;
  border-top: #efefef 1px solid;
}
.hotnews dd:nth-child(2) a {
  border: none;
}

.share {
  font-size: 16px;
  color: #999;
  line-height: 30px;
  vertical-align: middle;
}
.share a {
  display: inline-block;
  width: 30px;
  height: 30px;
  background: url(https://www.gzhosp.cn/images/icon25.png) no-repeat;
  vertical-align: middle;
  margin-left: 8px;
}
.share a:nth-child(2) {
  background-image: url(https://www.gzhosp.cn/images/icon26.png);
}
.share a:nth-child(3) {
  background-image: url(https://www.gzhosp.cn/images/icon27.png);
}

.art h1 {
  font-size: 30px;
  line-height: 45px;
  padding: 33px 0 43px;
  font-weight: normal;
  text-align: center;
}
.art .info {
  text-align: center;
  color: #999;
  line-height: 30px;
  position: relative;
}
.art .info .share {
  position: absolute;
  bottom: 0;
  right: 0;
}
.art .content {
  font-size: 16px;
  line-height: 30px;
  margin-top: 38px;
}
.art .content p,
.art .content div {
  padding-bottom: 20px;
  text-indent: 2em;
}
.art .content img {
  max-width: 94%;
}
.art .content table {
  margin-bottom: 20px;
}
.art .content table td {
  font-size: 14px;
  border: #ccc 1px solid;
  line-height: 32px;
}

.relative {
  margin-top: 20px;
  border-top: #f0f0f0 1px solid;
}
.relative .share {
  float: right;
  margin: 52px 0 0 35px;
}
.relative ul {
  font-size: 16px;
  line-height: 36px;
  margin-top: 32px;
}
.relative li {
  color: #2254af;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.toptitle {
  font-size: 36px;
  line-height: 36px;
  text-align: center;
  margin-top: 45px;
}

.more {
  display: block;
  font-size: 14px;
  line-height: 40px;
}
.more a {
  display: inline-block;
  width: 140px;
  text-align: center;
  color: white;
  background: #4479d9;
  border-radius: 40px;
}
.more a:hover {
  background: #2254af;
  text-decoration: none;
}
.more.s2 {
  font-size: 12px;
  line-height: 34px;
}
.more.s2 a {
  width: 108px;
  color: #999;
  background: white;
  border: #ebebeb 1px solid;
  border-radius: 34px;
}
.more.s2 a:hover {
  color: white;
  background: #4479d9;
  border-color: #4479d9;
}

.doctors {
  overflow: hidden;
  margin-bottom: -20px;
}
.doctors li {
  width: 310px;
  height: 370px;
  float: left;
  margin: 0 20px 20px 0;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
}
.doctors li:nth-child(4n) {
  margin-right: 0;
}
.doctors li a {
  display: block;
  height: 100%;
}
.doctors li img {
  width: 100%;
  height: 100%;
}
.doctors li span {
  display: block;
  width: 100%;
  height: 80px;
  text-align: center;
  background: rgba(255, 255, 255, 0.9);
  position: absolute;
  bottom: 0;
}
.doctors li strong {
  display: block;
  font-size: 24px;
  line-height: 24px;
  color: #2254af;
  font-weight: normal;
  margin-top: 15px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.doctors li p {
  margin-top: 5px;
  color: #666;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.doctors li.loadmore {
  background: #f8f8f8 url(https://www.gzhosp.cn/images/icon16.png) center center
    no-repeat;
}

.calendar {
  margin-top: 70px;
  overflow: hidden;
}
.calendar .tablename {
  height: 68px;
  line-height: 68px;
  background: #437de8 url(https://www.gzhosp.cn/images/icon22.png) no-repeat
    37px center;
  color: white;
  font-size: 24px;
  padding: 0 33px 0 77px;
  margin: 0 2px;
}
.calendar .tablename a {
  float: right;
  margin-top: 16px;
  width: 110px;
  height: 36px;
  font-size: 14px;
  line-height: 36px;
  background: #2254af;
  border-radius: 36px;
  color: white;
  text-align: center;
}
.calendar .tablename a:hover {
  text-decoration: none;
}
.calendar table {
  width: 100%;
}
.calendar table th,
.calendar table td {
  border: white 2px solid;
  font-weight: normal;
  text-align: center;
  background: #f9f9f9;
  width: 144px;
}
.calendar table th {
  height: 58px;
  background: #edf3fa;
  font-size: 14px;
  line-height: 18px;
  color: #2a2a2a;
}
.calendar table th i {
  display: block;
  color: #999;
}
.calendar table td {
  padding: 10px 0;
}
.calendar table td p {
  line-height: 24px;
}
.calendar table td i {
  display: block;
  color: #2a2a2a;
}
.calendar table td:first-child {
  color: #488ad8;
}

.tips {
  float: right;
  margin-top: 18px;
  font-size: 12px;
  line-height: 16px;
  color: #666;
  padding-left: 27px;
  background: url(https://www.gzhosp.cn/images/icon23.png) 0 center no-repeat;
}

.normallist li {
  line-height: 49px;
}
.normallist a {
  display: block;
  padding: 0 20px;
  border-bottom: #f0f0f0 1px solid;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.normallist i {
  float: right;
  color: #999;
  margin-right: 20px;
}
.normallist a:hover {
  color: #437de8;
  border-color: #437de8;
  text-decoration: none;
}
.normallist a:hover i {
  color: #437de8;
}

.environment {
  position: relative;
  border-bottom: #f0f0f0 1px solid;
  margin-bottom: 100px;
}
.environment .swiper-slide {
  width: 310px;
}
.swiper-button-prev,
.swiper-button-next {
  width: 9px;
  height: 14px;
  background: url(https://www.gzhosp.cn/images/slide02_left.png) no-repeat;
  margin-top: 0;
  top: -38px;
  left: auto;
  right: 35px;
}
.swiper-button-next {
  background-image: url(https://www.gzhosp.cn/images/slide02_right.png);
  right: 10px;
}
.environment img {
  width: 100%;
  height: 193px;
  border-radius: 5px;
}
.environment p {
  font-size: 16px;
  line-height: 54px;
  padding-left: 10px;
  background: url(https://www.gzhosp.cn/images/icon15.png) right 10px center
    no-repeat;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.advantage {
  position: relative;
  margin-bottom: 80px;
}
.advantage .swiper-slide {
  width: 400px;
  height: 380px;
  border-radius: 5px;
  overflow: hidden;
}
.advantage > .swiper-slide {
  float: left;
  margin: 0 50px 50px 0;
}
.advantage > .swiper-slide:nth-child(3n) {
  margin-right: 0;
}
.advantage .swiper-button-prev {
  top: -43px;
  right: 25px;
}
.advantage .swiper-button-next {
  top: -43px;
}
.advantage img {
  width: 100%;
  height: 100%;
}
.advantage strong,
.advantage p,
.advantage span {
  display: block;
  width: 100%;
  color: #333;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.advantage strong {
  font-weight: normal;
  font-size: 24px;
  line-height: 24px;
  top: 218px;
}
.advantage p {
  font-size: 14px;
  line-height: 14px;
  top: 250px;
}
.advantage span {
  font-size: 16px;
  line-height: 16px;
  top: 313px;
}
.advantage em {
  width: 30px;
  height: 2px;
  background: #999;
  position: absolute;
  top: 281px;
  left: 50%;
  margin-left: -15px;
}
.advantage .dark strong,
.advantage .dark p,
.advantage .dark span {
  color: white;
}
.advantage .dark em {
  background: white;
}

/* 科普基地入口 浮标 */
.yqfb {
  width: 200px;
  height: 148px;
  overflow: hidden;
  position: fixed;
  z-index: 999900;
  float: right;
  top: 50%;
  right: 50px;
  display: none;
}
.yqfb a img {
  width: 200px;
  height: auto;
}

/* Created by kong 20190819 */

.indexslide {
  position: relative;
  min-width: 1300px;
}
.indexslide img {
  width: 100%;
}
.indexslide .swiper-pagination {
  width: 100%;
  line-height: 12px;
  bottom: 20px;
}
.indexslide .swiper-pagination .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  margin: 0 5px;
  background: #437de8;
  border-radius: 12px;
  opacity: 1;
}
.indexslide .swiper-pagination .swiper-pagination-bullet-active {
  width: 30px;
  background: white;
}

.indexbg1 {
  padding-top: 100px;
  height: 900px;
  background: url(https://www.gzhosp.cn/html/images/bg01.jpg) center top
    no-repeat;
  min-width: 1300px;
  overflow: hidden;
}
.indexbg1 .left {
  float: left;
  width: 650px;
}
.indexbg1 .right {
  float: right;
  width: 440px;
}

.tabs {
  margin-top: 35px;
}

.datelist {
  margin-top: 28px;
}
.videolist {
  margin-top: 8px;
}

.quicklink8 {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.quicklink8 dd {
  margin-bottom: 40px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.15) 0 2px 6px 0;
}
.quicklink8 dd a {
  display: block;
  width: 200px;
  height: 55px;
  padding-top: 125px;
  font-size: 16px;
  color: white;
  text-align: center;
  background: #05a19a url(https://www.gzhosp.cn/html/images/icon06.png) center
    49px no-repeat;
}
.quicklink8 dd a:hover {
  text-decoration: none;
}
.quicklink8 dd:nth-child(2) a {
  background: #4479d9 url(https://www.gzhosp.cn/html/images/icon07.png) center
    49px no-repeat;
}
.quicklink8 dd:nth-child(3) a {
  background: #ee9f5f url(https://www.gzhosp.cn/html/images/icon08.png) center
    45px no-repeat;
}
.quicklink8 dd:nth-child(4) a {
  background: #e73a51 url(https://www.gzhosp.cn/html/images/icon09.png) center
    45px no-repeat;
}
.quicklink8 dd:nth-child(5) a {
  background: #5299db url(https://www.gzhosp.cn/html/images/icon10.png) center
    45px no-repeat;
}
.quicklink8 dd:nth-child(6) a {
  background: #05a19a url(https://www.gzhosp.cn/html/images/icon11.png) center
    38px no-repeat;
}

.entry1 img {
  width: 100%;
  height: 140px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.15) 0 2px 6px 0;
}

.indexbg2 {
  padding: 70px 0 25px;
  background: #f9fcff;
  min-width: 1300px;
}

.entry2 {
  display: flex;
  justify-content: space-between;
}
.entry2 img {
  width: 310px;
  height: 120px;
  border-radius: 5px;
}

.entry3 {
  display: flex;
  justify-content: space-between;
}
.entry3 img {
  width: 315px;
  height: 80px;
  border-radius: 5px;
}

.links {
  line-height: 18px;
  color: #ccc;
  margin-top: 90px;
}
.links b {
  font-size: 18px;
  color: #666;
  padding-right: 5px;
}
.links a {
  color: #666;
  margin: 0 14px;
}
.links a:hover {
  color: #2254af;
}
</style>
