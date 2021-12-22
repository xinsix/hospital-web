<template>
  <div class="map" v-title data-title="广州市第一人民医院官方网站www.gzhosp.cn|预约挂号|医疗咨询|国家临床重点专科|优势专科|著名专家首页">
    <!-- 头部 -->
    <Demo1></Demo1>
<div class="wrap">
      <div class="main">
            <section class="art">
                <h1>乘车路线</h1>
                <div class="info">
                    2019-09-17 16:08 编辑：管理员 阅读次数：11888
                </div>
                <div class="content">
                <p style="text-align: center">
				<img alt="" width="675" height="675" src="http://www.gzhosp.cn/u/cms/www/201307/22075314vdws.jpg"></p>
				<p style="text-align: center"><strong><span style="font-size: medium">方位指南：</span></strong></p>
				<p style="text-align: center;">
				<img alt="" width="688" height="423" src="http://www.gzhosp.cn/u/cms/www/201307/220752296a1o.jpg"></p>
                </div>
            </section>
         
        </div>
		</div>
    <!-- 底部 -->
    <Demo2></Demo2>
  </div>
</template>

<script>
import demo1 from "../../components/head/head.vue";
import demo2 from "../../components/footer/footer.vue";
export default {
  name: "map",
  components: {
    Demo1: demo1, //将别名demo 变成 组件 Demo
    Demo2: demo2,
  },
};
</script>

<style>


</style>