<template>
  <div class="specialist" v-title data-title="广州市第一人民医院官方网站www.gzhosp.cn|预约挂号|医疗咨询|国家临床重点专科|优势专科|著名专家首页">
          <Demo1></Demo1>
          <div class="S"></div>
    <div class="wrap ksnav">
      <div class="toptitle">科室导航</div>

      <section class="search_info">
        <form action="/jyzn/search/" method="get">
          <label>出诊信息查询</label>
          <input type="text" value="" name="dept" placeholder="科室名称" />
          <input type="text" value="" name="doc" placeholder="医生姓名" />
          <button type="submit">查询</button>
        </form>
      </section>

      <div class="title">外科部</div>
      <ul class="kslist">
        <li><a href="/specialist2">麻醉科/疼痛</a></li>

        <li><a href="/ks/wkb/sswk/">烧伤外科</a></li>

        <li><a href="/ks/wkb/zxwk/">整形外科</a></li>

        <li><a href="/ks/wkb/mlwk/">泌尿外科</a></li>

        <li><a href="/ks/wkb/xxwk/">心胸外科</a></li>

        <li><a href="/ks/wkb/ypwk/">甲状腺外科</a></li>

        <li><a href="/ks/wkb/gdwk/">肝胆外科</a></li>

        <li><a href="/ks/wkb/wcfb/">胃肠、疝和腹壁外科</a></li>

        <li><a href="/ks/wkb/jzwk/">脊柱外科</a></li>

        <li><a href="/ks/wkb/nk/">男科</a></li>

        <li><a href="/ks/wkb/cswk/">创伤外科</a></li>

        <li><a href="/ks/wkb/gjwk/">关节外科</a></li>

        <li><a href="/ks/wkb/rxwk/">乳腺外科</a></li>

        <li><a href="/ks/wkb/xzdxgwk/">心脏大血管外科</a></li>

        <li><a href="/ks/wkb/jzcwk/">结直肠肛门外科</a></li>
      </ul>

      <div class="title">内科部</div>
      <ul class="kslist">
        <li><a href="/ks/nkb/xxgnk/">心血管内科</a></li>

        <li><a href="/ks/nkb/wxnk/">呼吸与重症医学科</a></li>

        <li><a href="/ks/nkb/xhnk/">消化内科</a></li>

        <li><a href="/ks/nkb/xynk/">血液内科</a></li>

        <li><a href="/ks/nkb/nfmnk/">内分泌内科</a></li>

        <li><a href="/ks/nkb/fsmynk/">风湿免疫内科</a></li>

        <li><a href="/ks/nkb/zlk/">肿瘤科</a></li>

        <li><a href="/ks/nkb/snk/">肾内科</a></li>
      </ul>

      <div class="title">妇儿科部</div>
      <ul class="kslist">
        <li><a href="/ks/frkb/fck/">妇产科</a></li>

        <li><a href="/ks/frkb/ek/">儿科</a></li>

        <li><a href="/ks/frkb/szyxzz/">生殖医学中心</a></li>
      </ul>

      <div class="title">五官科部</div>
      <ul class="kslist">
        <li><a href="/ks/wgkb/yk/">眼科</a></li>

        <li><a href="/ks/wgkb/ebhk/">耳鼻喉头颈外科</a></li>

        <li><a href="/ks/wgkb/kqk/">口腔科</a></li>

        <li><a href="/ks/wgkb/pfk/">皮肤科</a></li>
      </ul>

      <div class="title">医学影像部</div>
      <ul class="kslist">
        <li><a href="/ks/yxyxb/fsk/">放射科</a></li>

        <li><a href="/ks/yxyxb/gljck/">超声医学科</a></li>

        <li><a href="/ks/yxyxb/hyxk/">核医学科</a></li>

        <li><a href="/ks/yxyxb/jrfsk/">介入放射科</a></li>

        <li><a href="/ks/yxyxb/jrsszx/">介入手术中心</a></li>
      </ul>

      <div class="title">广州临床医学研究所</div>
      <ul class="kslist">
        <li><a href="/ks/gzlcyxyjs/lcyxrj/">临床医学研究</a></li>

        <li><a href="/ks/gzlcyxyjs/zxsys/">中心实验室</a></li>
      </ul>

      <div class="title">保健部</div>
      <ul class="kslist">
        <li><a href="/ks/bjp/lnnfmk/">老年内分泌科</a></li>

        <li><a href="/ks/bjp/nlhxk/">老年呼吸科</a></li>

        <li><a href="/ks/bjp/lnxhk/">老年消化科</a></li>

        <li><a href="/ks/bjp/lnsjk/">老年神经科</a></li>

        <li><a href="/ks/bjp/nlxxgk/">老年心血管科</a></li>

        <li><a href="/ks/bjp/lnmbyk/">老年慢病一科</a></li>

        <li><a href="/ks/bjp/lnmbek/">老年慢病二科</a></li>

        <li><a href="/ks/bjp/nlsbk/">老年肾病科</a></li>

        <li><a href="/ks/bjp/lnzhnk/">老年综合内科</a></li>

        <li><a href="/ks/bjp/lngbwk/">干部外科</a></li>

        <li><a href="/ks/bjp/lnbkicu/">老年病科ICU</a></li>

        <li><a href="/ks/bjp/lnxyzlk/">老年血液肿瘤科</a></li>

        <li><a href="/ks/bjp/ggtjzx/">高干体检中心</a></li>

        <li><a href="/ks/bjp/qkyxk/">全科医学科</a></li>
      </ul>

      <div class="title">药学部</div>
      <ul class="kslist">
        <li><a href="/ks/yxb/yjk/">药剂科</a></li>

        <li><a href="/ks/yxb/yyk/">营养科</a></li>

        <li><a href="/ks/yxb/lcyxk/">临床药学科</a></li>
      </ul>

      <div class="title">医学检验部</div>
      <ul class="kslist">
        <li><a href="/ks/yxjyk/jyk/">检验科</a></li>

        <li><a href="/ks/yxjyk/blk/">病理科</a></li>

        <li><a href="/ks/yxjyk/sxk/">输血科</a></li>
      </ul>

      <div class="title">广州临床重症救治中心</div>
      <ul class="kslist">
        <li><a href="/ks/gzlczzjzzx/jzk/">急诊科</a></li>

        <li><a href="/ks/gzlczzjzzx/zxicu/">中心ICU</a></li>
      </ul>

      <div class="title">中医康复部</div>
      <ul class="kslist">
        <li><a href="/ks/zykfb/zyk/">中医科</a></li>

        <li><a href="/ks/zykfb/kfllk/">康复医学科</a></li>

        <li><a href="/ks/zykfb/zynxg/">中医脑血管专科</a></li>
      </ul>

      <div class="title">脑系科部</div>
      <ul class="kslist">
        <li><a href="/ks/lxkb/sjnk/">神经内科</a></li>

        <li><a href="/ks/lxkb/sjwk/">神经外科</a></li>

        <li><a href="/ks/lxkb/xlyxk/">精神心理科</a></li>
      </ul>

      <div class="title">门诊部</div>
      <ul class="kslist">
        <li><a href="/ks/mzb/grk/">感染科</a></li>

        <li><a href="/ks/mzb/xjxjmz/">专家门诊</a></li>

        <li><a href="/ks/mzb/tjzx/">体检中心</a></li>
      </ul>

      <div class="title">鹤洞分院</div>
      <ul class="kslist">
        <li><a href="/ks/hdfy/hdhxnk/">内科</a></li>

        <li><a href="/ks/hdfy/hdebhk/">耳鼻喉科</a></li>

        <li><a href="/ks/hdfy/hdyk/">眼科</a></li>

        <li><a href="/ks/hdfy/jqk/">口腔科</a></li>

        <li><a href="/ks/hdfy/tjzx/">体检中心</a></li>
      </ul>

      <div class="title">南沙中心医院</div>
      <ul class="kslist">
        <li><a href="/ks/nszxyy/nsxhnk/">消化内科</a></li>

        <li><a href="/ks/nszxyy/nsxxgnk/">心血管内科</a></li>

        <li><a href="/ks/nszxyy/nsek/">儿科</a></li>

        <li><a href="/ks/nszxyy/nsfck/">妇产科</a></li>

        <li><a href="/ks/nszxyy/nsyk/">眼科</a></li>

        <li><a href="/ks/nszxyy/nsbwk/">普外科</a></li>

        <li><a href="/ks/nszxyy/nsgk/">骨科</a></li>

        <li><a href="/ks/nszxyy/nszhwk/">综合外科</a></li>

        <li><a href="/ks/nszxyy/nsjyk/">检验科</a></li>

        <li><a href="/ks/nszxyy/nsfsk/">放射科</a></li>

        <li><a href="/ks/nszxyy/jznsmnwk/">泌尿外科</a></li>

        <li><a href="/ks/nszxyy/fznspfk/">皮肤科</a></li>

        <li><a href="/ks/nszxyy/nsjzk/">急诊科</a></li>

        <li><a href="/ks/nszxyy/nshxnk/">呼吸内科</a></li>
      </ul>
    </div>
    <Demo2></Demo2>
  </div>
</template>

<script>
import demo1 from "../../components/head/head.vue";
import demo2 from "../../components/footer/footer.vue";
export default {
  name: "specialist",
  components: {
    Demo1: demo1, //将别名demo 变成 组件 Demo
    Demo2: demo2,
  },
};
</script>

<style>
.S{
    height: 150px;
}
</style>