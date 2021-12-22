<template>
  <div class="page" v-title data-title="广州市第一人民医院官方网站www.gzhosp.cn|预约挂号|医疗咨询|国家临床重点专科|优势专科|著名专家首页">
      <Demo1></Demo1>
      <div class="Y"></div>
    <div class="wrap">
      <section class="doctorcard">
        <img src="https://www.gzhosp.cn/Upload/202009/637366460684625071.jpg" />
        <div class="qr">
          <div
            id="qrcode"
            title="https://www.gzhosp.cn/ks/wkb/mzktt/doctor_105.html"
          >
            <canvas width="130" height="130" style="display: none"></canvas
            ><img
              src="data:image/png;base64,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"
              style="display: block"
            />
          </div>

          <p>
            医生官方名片<br />
            手机预约通道
          </p>
          <span class="more"><a href="javascript:void(0)">分享</a></span>
        </div>
        <strong>佘守章</strong>
        <em></em>
        <p>
          <b></b><br />
          主任医师 麻醉科主任导师
        </p>
        <p>擅长：</p>
      </section>
      <section class="calendar">
        <div class="tablename">麻醉科/疼痛<a href="#">预约</a></div>
        <table>
          <thead>
            <tr>
              <th>时间</th>
              <th>周一<i>11-29</i></th>
              <th>周二<i>11-23</i></th>
              <th>周三<i>11-24</i></th>
              <th>周四<i>11-25</i></th>
              <th>周五<i>11-26</i></th>
              <th>周六<i>11-27</i></th>
              <th>周日<i>11-28</i></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>上午<i>8:00-12:00</i></td>
              <td><p>专家门诊</p></td>
              <td></td>
              <td><p>专家门诊</p></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>下午<i>14:30-17:30</i></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>晚上<i></i></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <p class="tips">出诊信息仅供参考，请以门诊公布为准！</p>
      </section>

      <div class="title">医生简介</div>

      <section class="art">
        <div class="content">
          <p>
            教授、主任医师、博士生导师，广东省“十一五”医学特色专科带头人、广州市重点学科带头人，广州市优秀科技专家、享受国务院政府特殊津贴。世界疼痛医师协
            会中国分会常委、中国医师协会麻醉学分会常委、广东省医师协会麻醉科医师分会副主委；中华医学会麻醉学会疼痛专业委员会全国委员、广东省医学会疼痛学会副
            主委、广州医学会麻醉学会主任委员。《中华麻醉学杂志》、《中华生物医学工程学杂志》、《中国疼痛医学杂志》、《临床麻醉学杂志》、《广东医学》、《国际
            麻醉学与复苏杂志》、美国《Anesthesialogy》中文版、英国《Anaesthesia》中文版、《广州医学院学报》等杂志编委或编常委，广东
            省和广州市干部医疗保健专家组成员。主持和参与了国家、省市级重点科研项目12项，曾获省市医药科技进步(1～3等)奖11项，国家教育部和省市科技成果
            进步奖
            (2～3等)奖7项，主编专著《临床监测学》和《微创手术麻醉学》，参编书籍14部，发表论文200余篇。主要研究方向：
            临床麻醉和疼痛治疗。每周一、三上午疼痛科门诊。
          </p>
        </div>
      </section>

      <section class="tabs">
        <div class="tabnav"></div>
        <div class="tabblock"></div>
      </section>
    </div>
     <Demo2></Demo2>
  </div>
</template>

<script>
import demo1 from "../../components/head/head.vue";
import demo2 from "../../components/footer/footer.vue";
export default {
  name: "page",
  components: {
    Demo1: demo1, //将别名demo 变成 组件 Demo
    Demo2: demo2,
  },
};
</script>

<style>
.Y{
    height: 140px;
}
</style>