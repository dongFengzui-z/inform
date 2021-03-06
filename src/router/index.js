import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/Main'
import Finish from '@/pages/Finish'
import Unread from '@/pages/Unread'
import Detail from '@/pages/Detail'
import Advice from '@/pages/Advice'
import Search from '@/pages/Search'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/finish',
      component: Main,

      children: [
        {
          name:"finish",
          path: "/finish",
          component: Finish
        },
        {
          name:"unread",
          path: "/unread",
          component: Unread
        },

      ],
    },
    {
      path: '/detail',
      name: "detail",
      component: Detail,
      
    },
    {
      path: '/advice',
      name: "advice",
      component: Advice
    },
    {
      path: '/search',
      name: "search",
      component: Search
    },
  ]
})
