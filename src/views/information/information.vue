<template>
     <div class="information" v-title data-title="广州市第一人民医院官方网站www.gzhosp.cn|预约挂号|医疗咨询|国家临床重点专科|优势专科|著名专家首页">
         <!-- 头部 -->
         <Demo1></Demo1>
<!--         -->
         <div class="R"></div>
         <div style="text-align: center;">
             <div style="margin-top: 50px;margin-bottom: 50px">
                 <h1 style="font-size: 36px">
                     值班查询
                 </h1>
             </div>
             <el-form :inline="true" :model="UpPatientFrom" class="demo-form-inline">
                 <el-form-item label="审批人">
                     <el-input v-model="UpPatientFrom.user" placeholder="审批人"></el-input>
                 </el-form-item>
                 <el-form-item>
                     <el-select v-model="UpPatientFrom.region" placeholder="活动区域">
                         <el-option label="区域一" value="shanghai"></el-option>
                         <el-option label="区域二" value="beijing"></el-option>
                     </el-select>
                 </el-form-item>
                 <el-form-item>
                     <el-button type="primary" >查询</el-button>
                 </el-form-item>
             </el-form>
         </div>
         <el-divider></el-divider>
         <div style="display: flex;margin-bottom: 20px;">
             <div style="width: 23%;margin-top: 25px">
                 <div  v-for="item in dep" style="width: 150px;border-radius: 4px;padding-left: 270px">
                     <div @click="qianhuan(item)">{{item.departmentName}}</div>
                     <hr/>
                 </div>
             </div>
             <div style="margin-left: 60px">
                 <div style="width: 1050px;display: flex">
                     <table style="margin-bottom: 20px">
                         <tr style="background-color: #5c78ec;font-size: 16px">
                             <td style="width: 150px;border: 1px solid #FFFFFF;text-align: center;height: 70px;color: #FFFFFF">科室</td>
                             <td style="width: 120px;border: 1px solid #FFFFFF;text-align: center">时间</td>
                             <td style="width: 120px;height:70px;border: 1px solid #FFFFFF;text-align: center;">周一
                                 <p style="color: #FFFFFF;">{{day1}}</p>
                             </td>
                             <td style="width: 120px;height:70px;border: 1px solid #FFFFFF;text-align: center;">周二
                                 <p style="color: #FFFFFF;">{{day2}}</p>
                             </td>
                             <td style="width: 120px;height:70px;border: 1px solid #FFFFFF;text-align: center;">周三
                                 <p style="color: #FFFFFF;">{{day3}}</p>
                             </td>
                             <td style="width: 120px;height:70px;border: 1px solid #FFFFFF;text-align: center;">周四
                                 <p style="color: #FFFFFF;">{{day4}}</p>
                             </td>
                             <td style="width: 120px;height:70px;border: 1px solid #FFFFFF;text-align: center;">周五
                                 <p style="color: #FFFFFF;">{{day5}}</p>
                             </td>
                             <td style="width: 120px;height:70px;border: 1px solid #FFFFFF;text-align: center;">周六
                                 <p style="color: #FFFFFF;">{{day6}}</p>
                             </td>
                             <td style="width: 120px;height:70px;border: 1px solid #FFFFFF;text-align: center;">周天
                                 <p style="color: #FFFFFF;">{{day7}}</p>
                             </td>
                         </tr>
                         <tr style="background-color: #edf4ff;" v-for="item in divs">
                             <td  style="text-align: center;height:81px;border: 1px solid #FFFFFF">{{item.divisionName}}</td>
                             <td height="66"  style="text-align: center;border: 1px solid #FFFFFF">
                                 <p>8:00-23:00</p>
                             </td>
                             <td  style="text-align: center;height:81px;border: 1px solid #FFFFFF"></td>
                             <td  style="text-align: center;height:81px;border: 1px solid #FFFFFF"></td>
                             <td  style="text-align: center;height:81px;border: 1px solid #FFFFFF"></td>
                             <td  style="text-align: center;height:81px;border: 1px solid #FFFFFF"></td>
                             <td  style="text-align: center;height:81px;border: 1px solid #FFFFFF"></td>
                             <td  style="text-align: center;height:81px;border: 1px solid #FFFFFF"></td>
                             <td  style="text-align: center;height:81px;border: 1px solid #FFFFFF"></td>
                         </tr>
                     </table>
                 </div>
                 <el-divider></el-divider>
             </div>
         </div>
      <!-- 底部 -->
         <Demo2></Demo2>
     </div>

</template>

<script>
import axios from 'axios'
import demo1 from "../../components/head/head.vue";
import demo2 from "../../components/footer/footer.vue";

export default {
    name: "information",
      components: {
    Demo1: demo1, //将别名demo 变成 组件 Demo
    Demo2: demo2,
  },
    data(){
        return{
            dep:[{
                departmentId:'',
                departmentName:'',
            }],
            divs:[{
                divisionName:'',
            }],
            UpPatientFrom:{
                patientName:'',
            },
            day1:{}, day2:{}, day3:{}, day4:{}, day5:{}, day6:{}, day7:{},
        }
    },
    methods:{
        //部门
        selDepartment(){
            axios.get("http://119.91.29.66:8091/client/department/search?").then(resp=>{
                this.dep=resp.data.list
                console.log(resp.data.departmentName)
            })
        },
        //科室
        seldivs(){
           axios.get("http://119.91.29.66:8091/client/division/search?divisionDepartmentid="+1).then(resp=>{
                this.divs=resp.data.list
           })
        },
        //根据部门查询科室
        qianhuan(item){
            axios.get("http://119.91.29.66:8091/client/division/search?divisionDepartmentid="+item.departmentId).then(resp=>{
                this.divs=resp.data.list
            })
        },

        //获取当前时间
        weekCheckingIn(){
            var _this = this;
            this.weekChecking_inloading = true
            var now = new Date();
            var nowTime = now.getTime() ;
            var day = now.getDay()|| 7;// 不加 || 7.周末会变成下周一
            var oneDayTime = 24*60*60*1000 ;
            var MondayTime1 = nowTime - (day-1)*oneDayTime ;//显示周一
            var MondayTime2 = nowTime - (day-2)*oneDayTime ;//显示周二
            var MondayTime3 = nowTime - (day-3)*oneDayTime ;//显示周三
            var MondayTime4 = nowTime - (day-4)*oneDayTime ;//显示周四
            var MondayTime5 = nowTime - (day-5)*oneDayTime ;//显示周五
            var MondayTime6 = nowTime - (day-6)*oneDayTime ;//显示周六
            var MondayTime7 = nowTime - (day-7)*oneDayTime ;//显示周天
            // var SundayTime =  nowTime + (7-day)*oneDayTime ;//显示周日
            //调用方法
           _this.day1=this.formatDate(new Date(MondayTime1));
           _this.day2=this.formatDate(new Date(MondayTime2));
           _this.day3=this.formatDate(new Date(MondayTime3));
           _this.day4=this.formatDate(new Date(MondayTime4));
           _this.day5=this.formatDate(new Date(MondayTime5));
           _this.day6=this.formatDate(new Date(MondayTime6));
           _this.day7=this.formatDate(new Date(MondayTime7));
        },
        formatDate(date) {
            var myyear = date.getFullYear();
            var mymonth = date.getMonth() + 1;
            var myweekday = date.getDate();

            if (mymonth < 10) {
                mymonth = "0" + mymonth;
            }
            if (myweekday < 10) {
                myweekday = "0" + myweekday;
            }
            return (mymonth + "-" + myweekday);
        }
    },
    mounted() {
        this.selDepartment();
        this.seldivs();
        this.weekCheckingIn();
    }

}
</script>

<!--                             <td style="text-align: center;border: 1px solid #FFFFFF">杨宇航</td>-->
<style>
.R{
  height: 150px;
}
hr {
    border: none;
    height:1px;
    background-color: #e6e6e6;
}
</style>
