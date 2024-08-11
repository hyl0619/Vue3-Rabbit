import { createRouter, createWebHistory } from 'vue-router'
import LayoutPage from '@/views/Layout/LayoutPage.vue'
import LoginPage from '@/views/Login/LoginPage.vue'
import Home from '@/views/Home/HomePage.vue'
import Category from '@/views/Category/CategoryPage.vue'
import SubCategory from '@/views/SubCategory/SubCategory.vue'
import DetailPage from '@/views/Detail/DetailPage.vue'
import CartList from '@/views/CartList/CartList.vue'
import CheckOut from '@/views/CheckOut/CheckOut.vue'
import PayPage from '@/views/Pay/PayPage.vue'
import PayCallBack from '@/views/PayCallBack/PayCallBack.vue'
import MemberPage from '@/views/Member/MemberPage.vue'
import UserInfo from '@/views/Member/componenets/UserInfo.vue'
import UserOrder from '@/views/Member/componenets/UserOrder.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LayoutPage,
      children: [
        {
          path: '/',
          component: Home
        },
        {
          path: '/category/:id',
          component: Category
        },
        {
          path: 'category/sub/:id',
          name: 'subCategory',
          component: SubCategory
        },
        {
          path: '/detail/:id',
          component: DetailPage
        },
        {
          path: '/cartlist',
          component: CartList
        },
        {
          path: '/checkout',
          component: CheckOut
        },
        {
          path: '/pay',
          component: PayPage
        },
        {
          path: 'paycallback',
          component: PayCallBack
        },
        {
          path: '/member',
          component: MemberPage,
          children: [
            {
              path: 'order',
              component: UserOrder
            },
            {
              path: '',
              component: UserInfo
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      component: LoginPage
    }
  ]
})

export default router
