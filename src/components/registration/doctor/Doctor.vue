<template>
  <div class="doctor" v-title data-title="广州市第一人民医院官方网站www.gzhosp.cn|预约挂号|医疗咨询|国家临床重点专科|优势专科|著名专家首页">
    <!-- 头部 -->
    <Demo1></Demo1>
    <div class="T"></div>
    <div class="wrap">
      <!-- 科室 -->
      <Demo3></Demo3>

      <el-row>
        <el-col
          :span="8"
          v-for="(o, index) in 6"
          :key="o"
          :offset="index > 0 ? 2 : 0"
        >
          <el-card :body-style="{ padding: '0px' }">
            <img
              src="https://www.gzhosp.cn/Upload/202006/6372837202928791263664048.jpg"
              class="image"
            />
            <div style="padding: 14px">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button class="yygh" @click="outerVisible = true">预约挂号</el-button>
                <!-- <el-button class="button" type="text">预约挂号</el-button> -->
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
<!-- 模态框 -->
<el-dialog title="挂号信息" :visible.sync="outerVisible">
     <div class="fl">
  <img
              src="https://www.gzhosp.cn/Upload/202006/6372837202928791263664048.jpg"
              class="image2"
            />
  </div>
    <div class="xx">
  <h1 >医师:</h1><br/>
  <h1 >科室:</h1><br/>
  <h1 >费用:</h1><br/>
  <h1 >时段:</h1>
  </div>
    <el-dialog
      width="30%"
      title="订单支付"
      :visible.sync="innerVisible"
      append-to-body>
      <div class="hh">
        <img src="../../../static/Login/img/wx.png" class="image22"/>
      </div>
     <div slot="footer" class="dialog-footer">
         <a href="/home">
      <el-button >回到首页</el-button>
         </a>
      <a href="/personal">
      <el-button type="primary" @click="innerVisible = true">进入个人中心</el-button>
      </a>
    </div>
    </el-dialog>
    <div slot="footer" class="dialog-footer">
      <!-- <el-button @click="outerVisible = false">取 消</el-button> -->
      <el-button type="primary" @click="innerVisible = true">立即预约</el-button>
    </div>
  </el-dialog>


<!-- 预约成功 -->


      <!-- 热点新闻-->
      <!-- <div class="rd">
      <Demo4></Demo4>
    </div> -->
    </div>
    <div class="clear"></div>
    <!-- 底部 -->
    <Demo2></Demo2>
  </div>
</template>

<script>
import demo1 from "../../head/head.vue";
import demo2 from "../../footer/footer.vue";
import demo3 from "../Aside.vue";
import demo4 from "../rdxw.vue";
export default {
  name: "doctor",
  components: {
    Demo1: demo1, //将别名demo 变成 组件 Demo
    Demo2: demo2,
    Demo3: demo3,
    Demo4: demo4,
  },
  data() {
    return {
      currentDate: new Date(),
      dialogVisible: false,
       outerVisible: false,
        innerVisible: false
    };
  }
};
</script>

<style>
.image22{
    width: 450px;
    height: 500px;
}
.hh{
    margin: 1px;
}
.yygh {
  color: #35c1ff;
  float: right;
}
.fl{
    float:left;
    margin: 2px;
}
.xx{
    margin: -15px;
}
.image2{
    width: 150px;
    height: 180px;
}
.el-col-8 {
  width: 20.33333%;
  margin-top: 45px;
  margin-left: 40px;
}
.el-col-offset-2 {
  margin-left: 40px;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.T {
  width: 100%;
  height: 150px;
}
.top {
  padding-top: 5px;
  padding-left: 10px;
  width: 100%;
  background-color: #ffffff;
  height: 50px;
}
img {
  width: 60px;
  position: relative;
  top: -19px;
  left: -20px;
}
last-child {
  margin-bottom: 0;
}
.bg-purple {
  background: #ffffff;
}
.grid-content {
  border-radius: 4px;
  min-height: 110px;
}
.contact {
  width: 45%;
  text-align: center;
  height: 85px;
  padding-top: 46px;
  border-radius: 4px;
}
.contact2 {
  width: 45%;
  text-align: center;
  height: 110px;
  padding-top: 32px;
  padding-right: 29px;
  border-radius: 4px;
}
.card-panel-text {
  line-height: 18px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 16px;
  margin-bottom: 12px;
}
.tabe {
  border-radius: 4px;
  background-color: #ffffff;
  margin-top: 20px;
  height: 390px;
  margin-right: 50px;
  margin-left: 50px;
}
.tabe2 {
  border-radius: 4px;
  background-color: #ffffff;
  margin-top: 20px;
  height: 320px;
  margin-right: 50px;
  margin-left: 50px;
}
</style>