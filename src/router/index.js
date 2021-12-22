import Vue from 'vue'
import VueRouter from 'vue-router'
import Book from '../views/Home/Book.vue'
import Head from '../components/head/head.vue'
import Foot from '../components/footer/footer.vue'
import Home from '../views/Home/home.vue'
import Login from '../views/Login/Login.vue'
import Register from '../views/Login/register.vue'
import Registration from '../views/registration/registration.vue'
import Hsjc from '../components/registration/Hsjc.vue'
import Yk from '../components/registration/yk.vue'
import Kqk from '../components/registration/Kqk.vue'
import Doctor from '../components/registration/doctor/Doctor.vue'
import Personal from '../views/personal/personal.vue'
import Information from '../views/information/information.vue'
import Page from '../views/information/page.vue'
import Specialist from '../views/specialist/specialist.vue'
import Specialist2 from '../views/specialist/specialist2.vue'
import Map from '../views/map/map.vue'
import Hospital from '../views/hospital/hospital.vue'
Vue.use(VueRouter)

const routes = [
  {
    // 欢迎
    path: '/',
    name: 'Book',
    component: Book,
    meta: { hidden: true,title:"助销员申请"}
  },
  {
    // 头部
    path: '/head',
    name: 'Head',
    component: Head
  },
  {
    // 尾部
    path: '/foot',
    name: 'Foot',
    component: Foot
  },
  {
    // 首页
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    //登录
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    //注册
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    //挂号
    path: '/registration',
    name: 'Registration',
    component: Registration,
    children: [
      { path: '/hsjc', name: 'Hsjc', component: Hsjc },
      { path: '/yk', name: 'Yk', component: Yk },
      { path: '/kqk', name: 'Kqk', component: Kqk },
      //   { path: '/tag', name: 'tag', component: tag },
      //   { path: '/task', name: 'task', component: task },
      //   { path: '/use', name: 'use', component: use },
      //   { path: '/user', name: 'user', component: user },
    ],
  }, {
    //支付
    path: '/doctor',
    name: 'Doctor',
    component: Doctor
  }, {
    //个人中心
    path: '/personal',
    name: 'Personal',
    component: Personal
  }, {
    //出诊信息
    path: '/information',
    name: 'Information',
    component: Information
  }, {
    //详细页面
    path: '/page',
    name: 'Page',
    component: Page
  }, {
    //专家
    path: '/specialist',
    name: 'Specialist',
    component: Specialist
  }, {
    //专家
    path: '/specialist2',
    name: 'Specialist2',
    component: Specialist2
  },{
     //地图
     path: '/map',
     name: 'Map',
     component: Map
  },{
    //医院概况
    path: '/hospital',
    name: 'Hospital',
    component: Hospital
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
