<template>
  <div class="registration" v-title data-title="广州市第一人民医院官方网站www.gzhosp.cn|预约挂号|医疗咨询|国家临床重点专科|优势专科|著名专家首页">
    <!-- 头部 -->
    <Demo1></Demo1>
    <div class="T"></div>
    <div style="background-color: #fcfcfc;width: 100%; display: flex;">
        <!--部门表 -->
      <div style="background-color:#f5f5f5;padding: 10px;width: 200px">
        <div style="background-color: #f5f5f5;padding: 5px" v-for="item in dep">
          <div @click="qianhuan(item)">{{item.departmentName}}</div>
          <hr>
        </div>
      </div>
        <!--科室表-->
      <div style="width: 180px;background-color: #FFFFFF;padding: 10px">
        <div  v-for="item in divs">
          <div @click="qianhuanDoc(item)" style="height: 40px;">
            {{item.divisionName}}
            <i class="el-icon-arrow-right"  style="float: right;margin-top: 5px"></i>
            <hr>
          </div>
        </div>
      </div>
        <!--医生信息表-->
      <div style="background-color: #ffffff;border: 1px solid #d7eedd;padding: 10px;width: 100%">
        <div style="border: 1px solid #cbcbcb;height: 103px;margin-top: 15px;position: relative;top: -10px" v-for="item in doct">
          <div style="padding: 5px;float: left;margin-right: 20px">
            <img style="width: 75px;position: relative;top: 1px;left: 10px" :src="item.doctorImgurl"/>
          </div>
          <div style="background-color: #FFFFFF;height: 100%;display: flex;position: relative;left: -5px">
            <div style="margin-top: 4px;margin-right: 80px">
              <div style="font-size: 16px;font-weight: 600">{{item.doctorName}}</div>
              <div>{{item.doctorSex==0?"女":"男"}}</div>
              <div>{{item.doctorGood}}</div>
              <div class="p">{{item.doctorDescribe}}</div>
              <el-button type="text" @click="yishen(item)" style="font-size: 12px;color: #437de8;position: relative;top: -31px;left: 145px">
                详细
              </el-button>
            </div>
            <div style="width: 98%;padding: 10px;position: absolute;">
              <div style="float: right;margin-top: 25px">
                <el-button type="warning" size="medium">￥12</el-button>
                <el-button type="success" size="medium" @click="opGua(item)">预约</el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--医生详细信息-->
    <el-dialog title="提示" :visible.sync="dialogVisible" width="40%">
      <div v-for="item in doctor">
        <div style="display: flex">
          <div style="margin-left: 20px">
            <img style="width: 150px;" :src="item.doctorImgurl"/>
          </div>
          <div style="margin-top: 0px">
            <div style="font-size: 17px;margin-bottom: 10px"><span style="font-weight: 900;font-size: 20px">姓名：</span>{{item.doctorName}}</div>
            <div style="font-size: 17px;margin-bottom: 10px"><span style="font-weight: 900;font-size: 20px">性别：</span>{{item.doctorSex==0?'女':'男'}}</div>
            <div style="font-size: 17px;"><span style="font-weight: 900;font-size: 20px">擅长：</span>{{item.doctorGood}}</div>
          </div>
        </div>
        <div style="font-size: 17px;"><span style="font-weight: 900;font-size: 20px">详细介绍：</span>{{item.doctorDescribe}}</div>
      </div>
      <span slot="footer" class="dialog-footer">
        <div style="position: relative;top: -15px">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </div>
      </span>
    </el-dialog>
    <!-- 挂号信息表-->
    <el-dialog title="挂号信息确认" :visible.sync="dialogGua" width="30%">
      <el-dialog
              width="40%"
              height="300%"
              title="支付信息"
              :visible.sync="innerVisible"
              append-to-body>
        <div style="margin-bottom: 15px">
          <span style="margin-left: 130px;font-size: 26px">支付宝支付</span>
          <span style="margin-left: 230px;font-size: 26px">微信支付</span>
        </div>
        <div style="height: 280px">
          <template>
            <img :src="wx" style="width: 300px;position: relative;left: -50px;" @click="zf()">
            <img :src="zfb" style="width: 275px;margin-top: 9px;position: relative;left: -100px" @click="zf()">
          </template>
        </div>
      </el-dialog>
      <div v-for="item in doctorGua" style="width: 100%">
        <div>医生姓名：<span style="float: right;margin-right: 10px">{{item.doctorName}}</span></div>
      </div>
      <hr/>
      <div style="width: 100%">
        <div>挂号类型：<span style="float: right;margin-right: 10px">预约挂号</span></div>
        <hr/>
        <div>医院名称：<span style="float: right;margin-right: 10px">广州市第一人民医院</span></div>
      </div>
      <hr/>
      <div v-for="item in divsOr">
        <div>就诊科室：<span style="float: right;margin-right: 10px">{{item.divisionName}}</span></div>
      </div>
      <hr>
      <div style="width:100%;position: relative;top: 20px" v-for="item in watch">
        <div>就诊时段：<span style="margin-right: 10px;color: rgb(209,209,0);float: right  ">{{item.watchDate}}</span></div>
      </div>
      <hr style="position: relative;top: 20px">
      <div style="width: 100%;position: relative;top: 20px">
        <div>诊察费：<span style="margin-right: 10px;color: rgba(199,199,0,0.89);float: right">￥12</span></div>
      </div>
      <span slot="footer" class="dialog-footer">
         <el-button @click="dialogGua = false">取 消</el-button>
         <el-button type="primary" @click="innerVisible = true">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 底部 -->
    <Demo2></Demo2>
  </div>
</template>

<script>
  import deImg from '/src/static/yishe/img/wx.jpg'
  import zfImg from '/src/static/yishe/img/zfb.jpg'
import  axios from 'axios'
import demo1 from "../../components/head/head.vue";
import demo2 from "../../components/footer/footer.vue";
import demo3 from "../../components/registration/Aside.vue";
import demo4 from "../../components/registration/rdxw.vue";
export default {
  name: "registration",
  components: {
    Demo1: demo1, //将别名demo 变成 组件 Demo
    Demo2: demo2,
    Demo3: demo3,
    Demo4: demo4,
  },
  data(){
    return{
      fullscreenLoading: false,
      innerVisible: false,
      dialogVisible: false,
      dialogGua:false,
      dep:[{
        departmentId:'',
        departmentName:'',
      }],
      divs:{
        divisionName:'',
        divisionId:'',
        divisionDepartmentid:''
      },
      divsOr:{
        divisionId:'',
        divisionName:'',
        doctorDivisionid:''
      },
      watch:{
        watchDate:''
      },
      doct:{
        doctorName:'',//医生姓名
        doctorSex:'',//医生性别
        doctorGood:'',//擅长
        doctorImgurl:'',//图片路径
        doctorDescribe:''//医生详细介绍
      },
      doctor:{
        doctorId:'',
        doctorName:'',//医生姓名
        doctorSex:'',//医生性别
        doctorGood:'',//擅长
        doctorImgurl:'',//图片路径
        doctorDescribe:''//医生详细介绍
      },
      doctorGua:{
        doctorId:'',
        doctorName:'',
      },
      wx:deImg,
      zfb:zfImg
    }
  },
  methods:{
    zf() {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      setTimeout(() => {
        this.innerVisible=false
        this.dialogGua=false
        loading.close();
      }, 1000);
      setTimeout(()=>{
        this.$message({
          message: '支付成功',
          type: 'success'
        });
      },1200)
    },
    //医生模态框
    yishen(item){
      this.dialogVisible=true;
      axios.get("http://119.91.29.66:8091/client/doctorinfo/search?doctorId="+item.doctorId).then(resp=>{
        this.doctor=resp.data.list
      })
    },
    //打开挂号
    opGua(item){
      this.dialogGua=true
      axios.get("http://119.91.29.66:8091/client/doctorinfo/search?doctorId="+item.doctorId).then(resp=>{
        this.doctorGua=resp.data.list
      })
      //查询医生所在科室
      axios.get("http://119.91.29.66:8091/client/division/search?divisionId="+item.doctorDivisionid).then(resp=>{
        this.divsOr=resp.data.list
      })
    },

    //部门
    selDepartment(){
      axios.get("http://119.91.29.66:8091/client/department/search?").then(resp=>{
        this.dep=resp.data.list
      })
    },
    //科室
    seldivs(){
      axios.get("http://119.91.29.66:8091/client/division/search?divisionDepartmentid="+0).then(resp=>{
        this.divs=resp.data.list
      })
    },
    //查询医生信息表
    selDoctorinfo(){
      axios.get("http://119.91.29.66:8091/client/doctorinfo/search?doctorDivisionid="+0).then(resp=>{
        this.doct=resp.data.list
      })
    },
    //根据部门查询科室
    qianhuan(item){
      axios.get("http://119.91.29.66:8091/client/division/search?divisionDepartmentid="+item.departmentId).then(resp=>{
        this.divs=resp.data.list
      })
    },
    //切换医生信息
    qianhuanDoc(item){
      axios.get("http://119.91.29.66:8091/client/doctorinfo/search?doctorDivisionid="+item.divisionId).then(resp=>{
        this.doct=resp.data.list
      })
    },
    //查询医生值班表
    selWatch(){
      axios.get("http://119.91.29.66:8091/client/watch/search?watchId="+1).then(resp=>{
          this.watch=resp.data.list
      })
    }
  },
  mounted() {
    this.selDepartment();
    this.seldivs();
    this.selDoctorinfo();
    this.selWatch();

  }
};
</script>

<style>
.T {
  width: 100%;
  height: 150px;
}
.p{
  overflow: hidden;/*超出部分隐藏*/
  text-overflow:ellipsis;/* 超出部分显示省略号 */
  white-space: nowrap;/*规定段落中的文本不进行换行 */
  width: 150px;/*需要配合宽度来使用*/

}
</style>
