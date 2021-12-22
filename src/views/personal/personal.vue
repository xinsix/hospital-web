<template>
  <div class="personal" v-title data-title="广州市第一人民医院官方网站www.gzhosp.cn|预约挂号|医疗咨询|国家临床重点专科|优势专科|著名专家首页">
    <!-- 头部 -->
    <Demo1></Demo1>
    <div class="W">
      <div class="E">
        <div class="Q1">
          <p class="p1">胡灿</p>
          <img src="../../static/Login/img/patient.jpg" /><br />
          <strong>电子健康卡:88888888</strong>
        </div>
        <div class="Q2">
          <strong>性别:&nbsp;&nbsp;&nbsp;男</strong><br />
          <strong>出生日期:&nbsp;&nbsp;&nbsp;2003-10-27</strong><br />
          <strong>身份证:&nbsp;&nbsp;&nbsp;430423200310270114</strong><br />
          <strong>手机号:&nbsp;&nbsp;&nbsp;15918002178</strong><br />
          <strong>地址:&nbsp;&nbsp;&nbsp;广东省佛山市禅城区</strong>
        </div>
      </div>
      <div class="patient1" @click="dialogVisible = true">
        <p class="A">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;挂号记录</p ><br /><br /><br />
      </div>
      <div class="patient2">
        <p  class="A">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;门诊缴费记录</p ><br /><br /><br />
      </div>
      <div class="patient3">
        <p  class="A">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在线取号</p ><br /><br /><br />
      </div>
      <div class="patient4">
        <p  class="A">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我的收藏</p ><br /><br />
      </div>
    </div>

    <el-dialog
  title="挂号成功！"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <span>胡灿</span><br/>
  <span>核酸检测门诊/核酸检测</span><br/>
  <span>就诊时间:2021-11-17 下午 16:00~16:29</span>
  <span slot="footer" class="dialog-footer">
    <!-- <el-button @click="dialogVisible = false">取 消</el-button> -->
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
    <!-- 底部 -->
    <Demo2></Demo2>
  </div>
</template>

<script>
import demo1 from "../../components/head/head.vue";
import demo2 from "../../components/footer/footer.vue";
// import demo2 from "../../static/Login/img/patient.jpg";
export default {
  name: "personal",
  data(){
      return{
          dialogVisible: false
      }
  },
  components: {
    Demo1: demo1, //将别名demo 变成 组件 Demo
    Demo2: demo2,
  },
  
};
</script>

<style>
.W {
  width: 100%;
  /* width: 200px; */
  height: 500px;
  /* border: 1px red solid; */
}
.E {
  width: 500px;
  height: 250px;
  /* border: 1px red solid; */
  border-radius: 30px;
  position: absolute;
  top: 200px;
  left: 300px;
  background-color: #2254af;
  color: #ffffff;
}
.Q1 {
  position: absolute;
  top: 15px;
  left: 45px;
  width: 420px;
  height: 92px;
  /* border: 1px red solid; */
}
.p1 {
  font-size: 30px;
}
img {
  float: right;
  width: 100px;
}
.Q2 {
  position: absolute;
  top: 108px;
  left: 45px;
  width: 420px;
  height: 114px;
  /* border: 1px red solid; */
}
.patient1 {
  width: 170px;
  height: 110px;
  /* border: 1px #2254af solid; */
  border-radius: 30px;
  position: absolute;
  top: 200px;
  left: 900px;
  font-size: 20px;
  background-color: #05A19A;
}
.patient2 {
  width: 170px;
  height: 110px;
  /* border: 1px #2254af solid; */
  border-radius: 30px;
  position: absolute;
  top: 200px;
  right: 360px;
  font-size: 20px;
  background-color: #4479D9;
}
.patient3 {
  width: 170px;
  height: 110px;
  /* border: 1px #2254af solid; */
  border-radius: 30px;
  position: absolute;
  top: 340px;
  left: 900px;
  font-size: 20px;
  background-color: #EE9F5F;
}
.patient4 {
  width: 170px;
  height: 110px;
  /* border: 1px #2254af solid; */
  border-radius: 30px;
  position: absolute;
  top: 340px;
  right: 360px;
  font-size: 20px;
  background-color: #E73A51;
}
.A{
    color: #FFFFFF;
}
</style>