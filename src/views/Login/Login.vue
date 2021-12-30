<template>
  <div class="Login" v-title data-title="广州市第一人民医院官方网站www.gzhosp.cn|预约挂号|医疗咨询|国家临床重点专科|优势专科|著名专家首页">
    <!-- 表单开始 -->
    <div id="form-info2">
      <form action="/" method="POST">
        <div id="register">欢迎登录/注册</div>



        <!-- 手机号开始 -->
        <div class="form11 form22">
          <label for="phone" class="">手机号</label>
          <!-- <input type="text" id="phone1" placeholder="&nbsp;&nbsp;&nbsp;可用于登录和找回密码" > -->
          <input
            id="phone1"
            type="text"
            class="input input1"
            autocomplete="off"
            placeholder="请输入手机号码"
          />
        </div>
        <!-- 手机号结束 -->



        <!-- 验证码开始 -->
        <div class="form22 form11">
          <label for="captcha" class="">验证码</label>
          <input
            type="text"
            id="captcha"
            placeholder="请输入验证码"
            class="input input2"
            maxlength="6"
          />
          <!-- <input type="button" id="btnSendCode1" name="getcode" value="获取验证码" class=""> -->
          <!-- 获取验证码 -->
          <!-- <input
            id="btnSendCode1"
            type="button"
            class="input input3"
            value="获取验证码"
            onclick="sendMessage1()"
          /> -->
          <div class="input89">
          <span   v-show="show" @click="getCode">获取验证码</span>
<span v-show="!show"  >{{count}} 秒</span>
</div>
        </div>
        <!-- 验证码结束 -->

        <!-- 注册开始 -->
        <div id="register">
          <!-- <input  onclick="binding()"  > -->
          <button class="register" type="button" @click="feikon()">登 录/注册</button>
        </div>
        <!-- 注册结束 -->

        <!-- 阅读并接受开始 -->
        <div class="read">
          阅读并接受 <a href="#" class="A">《医院用户协议》</a>及<a
            class="A"
            href="#"
            >《医院隐私权保护声明》</a
          >
        </div>
        <!-- 阅读并接受结束 -->
      </form>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "Login",

  data() {
    return {
      show: true,
      count: "",
      timer: null,
    };
  },
  mounted() {},

  methods: {
    feikon() {
      var phoneReg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;

      var userName = $("#userName").val();
      // var phone = $.trim($("#phone1").val());
      var phone1 = $("#phone1").val();
      var psw = $("#psw").val();
      var captcha = $("#captcha").val();




      //验证手机号
      if (!phoneReg.test(phone1)) {
        if (phone1 == "" || phone1 == null) {
          alert("请输入手机号!!!");
          return false;
        }
      }
      // 手机号正则表达式
      var phone = $.trim($("#phone1").val());
      if (!phoneReg.test(phone)) {
        if (!phoneReg.test(phone)) {
          alert(" 请输入有效的手机号码");
          return false;
        }
      }


      //验证码
      if (!phoneReg.test(captcha)) {
        if (captcha == "" || captcha == null) {
          alert("请输入验证码!!!");
          return false;
        }
      }
        $.ajax({
            url:"http://119.91.29.66:8091/api/phoneAndSmsLogin",
            //url:"http://localhost:8091/api/phoneAndSmsLogin",
            data:{phone:phone,sms:captcha},
            success:function(data){
                if (data=="success") {
                    window.location.href="http://yy.xinsix.com/home";
                }else
                    alert("验证码错误！")
            }
        })
    },
    getCode(){
        var phoneReg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;
        var phone = $.trim($("#phone1").val());
        if (!phoneReg.test(phone)) {
            alert(" 请输入有效的手机号码");
            return false;
        }
        const TIME_COUNT = 60;
        if (!this.timer) {
            this.count = TIME_COUNT;
            this.show = false;
            this.timer = setInterval(() => {
                if (this.count > 0 && this.count <= TIME_COUNT) {
                    this.count--;
                } else {
                    this.show = true;
                    clearInterval(this.timer);
                    this.timer = null;
                }
            }, 1000)

            $.ajax({
                url:"http://119.91.29.66:8091/api/getSms",
                //url:"http://localhost:8091/api/getSms",
                data:{phone:phone},
                success:function(data){
                    if (data=="success") {
                        alert("验证码下发成功！")
                    }
                }
            })
        }


   }
  },
};
</script>

<style>
/* 背景图 */
.Login {
  background-image: url("../../static/Login/img/bj.jpg");
  /* 固定body的背景 */

  background-size: cover;
  width: 100%;
  height: 810px;
}
/* 文字 */
.text1 {
  width: 170px;
  height: 50px;
  color: #fff;
  margin-top: 60px;
  margin-left: 200px;
  font-size: 50px;
  font-weight: bold;
}

.text2 {
  width: 300px;
  height: 40px;
  color: #fff;
  margin-top: 10px;
  margin-left: 200px;
  font-size: 30px;
  letter-spacing: 5px;
}

/* 底部文字 */
.text3 {
  width: 80px;
  height: 15px;
  margin-left: 70px;
  margin-top: 440px;
  color: #bfc2ca;
  font-size: 14px;
  float: left;
}

.text4 {
  width: 80px;
  height: 15px;
  margin-left: 10px;
  margin-top: 440px;

  float: left;
}

.text4 img {
  width: 15px;
}

.text5 {
  width: 80px;
  height: 15px;
  margin-left: -30px;
  margin-top: 445px;
  color: #bfc2ca;
  font-size: 12px;
  float: left;
}

/* 表单 */
#form-info2 {
  width: 480px;
  height: 470px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.9);
  position: absolute;
  margin: auto;
  top: 0px;
  bottom: 0px;
  right: 140px;
}

/* 欢迎注册 */
#register {
  width: 480px;
  height: 50px;
  margin-left: 40px;
  margin-top: 55px;
  font-size: 36px;
  color: #000;
  font-weight: bold;
}

/* 已有账号 */
#old-account {
  width: 480px;
  height: 20px;
  font-size: 14px;
  color: #9b9b9b;
  float: left;
  margin-left: 40px;
}

/* 登录 */

#login {
  color: #2e58ff;
  cursor: pointer;
  text-decoration: none;
}

/* 输入框 */
.input {
  height: 40px;
  margin-bottom: 15px;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
  background-color: #fff;
}
/* 输入框 */
.input89 {
  height: 40px;
  margin-bottom: 15px;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
  background-color: #fff;
  width: 120px;
  text-align: center;
  line-height: 40px;
  position: absolute;
    top: 245px;
    right: 45px;
}

.input1 {
  width: 340px;
  margin-left: -5px;
}

.input2 {
  width: 205px;
}

.input3 {
  width: 120px;
  cursor: pointer;
}

/* 表单内容样式 */
.form11 {
 width: 480px;
    height: 20px;
    margin-left: 40px;
}

.form1 {
  margin-top: 90px;
}

.form22 {
  margin-top: 60px;
}

/* 字体 */
label {
  width: 58px;
  /* 转换为块元素 */
  display: inline-block;
  font-size: 14px;
  color: #333;
  font-weight: 200;
}

.label-psw {
  letter-spacing: 15px;
}

.gth {
  width: 15px;
  height: 20px;
  position: absolute;
  margin-left: 370px;
  margin-top: -45px;
}

.gth img {
  width: 100%;
}

/* 注册按钮 */
.register {
  width: 400px;
  height: 50px;
  background: #558FF2;
  border-radius: 25px;
  border: rgba(255, 255, 255, 0.5) 1px solid;
  color: white;
  font-size: 16px;
  margin-top: 20px;
  cursor: pointer;
}

.read {
  width: 330px;
  height: 10px;
  margin-left: 80px;
  margin-top: 30px;
  font-size: 12px;
  color: #666;
}

.A {
  text-decoration: none;
  color: blue;
}

/* input内文字颜色 */
input::-webkit-input-placeholder {
  color: #ccc;
}
</style>
