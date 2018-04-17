import Vue from 'vue'
import Router from 'vue-router'
const HelloWorld = () => import('@/components/HelloWorld')
const Detail = () => import('@/components/Detail')
const List = () => import('@/components/List')
const DetailProfile = () => import('@/components/DetailProfile')
const DetailPosts = () => import('@/components/DetailPosts')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail,
      children: [
        {
          path: 'profile',
          component: DetailProfile
        },
        {
          path: 'posts',
          component: DetailPosts
        }
      ]
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
