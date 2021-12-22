<template>
  <div class="specialist2" v-title data-title="广州市第一人民医院官方网站www.gzhosp.cn|预约挂号|医疗咨询|国家临床重点专科|优势专科|著名专家首页">
          <Demo1></Demo1>
          <div class="S"></div>
  <div class="ksbg">
        <div class="wrap">

            <section class="position">您的位置：<a href="/service/">首页</a> &gt; <a href="/ks/" title="所有科室" target="_self">所有科室</a> &gt; <a href="/ks/wkb/mzktt/" title="麻醉科/疼痛" target="_self">麻醉科/疼痛</a></section>

            <section class="intro">
                <img src="https://www.gzhosp.cn/u/cms/www/201305/291838089n69.jpg">
                <strong>麻醉科/疼痛科室简介</strong>
                <p>我科及下属疼痛科病区分别是广州市医学会麻醉学和疼痛学的主委学科。经过多届学科领导人和专家们不懈努力，学科的人才队伍、硬件设施、临床医疗、研究生教育和科学研究水平不断发展和提高，先后被评为广州市医疗卫生机构重点专科、广东省医学特色专科、国家临床麻醉药品试验基地、中华医学会疼痛学会疼痛专科培训基地和国家</p>
                <span class="more"><a href="/ks/wkb/mzktt/about.html">了解更多</a></span>
            </section>

        </div>
    </div>

    <div class="wrap">

        <div class="title">专家团队<a href="/ks/wkb/mzktt/doctorList.html">更多</a></div>

        <ul class="doctors">
            
            <li><a href="/ks/wkb/mzktt/doctor_105.html">
                <img src="https://www.gzhosp.cn/Upload/202009/637366460684625071.jpg"><span><strong>佘守章</strong><p> 主任医师  麻醉科主任导师</p>
                </span></a></li>
            
            <li><a href="/ks/wkb/mzktt/doctor_106.html">
                <img src="https://www.gzhosp.cn/html/images/default_doc.jpg"><span><strong>许立新</strong><p> 主任医师  麻醉科主任</p>
                </span></a></li>
            
            <li><a href="/ks/wkb/mzktt/doctor_108.html">
                <img src="https://www.gzhosp.cn/Upload/202006/6372837202928791263664048.jpg"><span><strong>肖辉</strong><p> 副主任医师 </p>
                </span></a></li>
            
        </ul>

        
        <section class="twocolumn">
            
        </section>

    </div>
    <Demo2></Demo2>
  </div>
</template>

<script>
import demo1 from "../../components/head/head.vue";
import demo2 from "../../components/footer/footer.vue";
export default {
  name: "specialist2",
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