import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomePageView from '../views/HomePageView.vue'
import MyPageView from '../views/MyPageView.vue'
Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  {
    // /search/screens -> /search?q=screens
    path: '/search/:searchText',
    redirect: to => {
      // 方法接收目标路由作为参数
      // return 重定向的字符串路径/路径对象
      return { path: '/search', query: { keyword: to.params.keyword ,nowPage:to.params.nowPage} }
    },
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/',
    name: 'homepage',
    component: HomePageView
  },
  {
    path:'/text',
    name:'textshow',
    component:()=>import('../views/TextShowView.vue')
  },
  {
    path:'/edit',
    name:'edit',
    component:()=>import('@/views/TextEditView.vue')
  },
  {
    path: '/mypage',
    name: '个人主页',
    component: MyPageView
  },
  {
    path: '/label',
    name: '分类',
    component:()=>import('@/views/LabelPageView.vue')
  },
  {    
    path: '/login',
    name: '登录界面',
    component:()=>import('../views/UserLoginView.vue')
  },
  {    
    path: '/register',
    name: '注册界面',
    component:()=>import('../views/UserRegisterView.vue')
  },
  {
    path:'/search',
    name:'搜索结果页面',
    component:()=>import("@/views/SearchShowView.vue")
  },{
    path:'/create',
    name:'创建知识界面',
    component:()=>import("@/views/TextCreateView.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
