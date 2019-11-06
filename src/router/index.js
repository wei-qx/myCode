import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyMap from '@/components/MyMap'
import ElementUITest from '@/components/ElementUITest'
import Introduction from '@/components/Introduction'
import HTMLrec from '@/components/HTMLRec'
import CSSrec from '@/components/CSSRec'
import JSrec from '@/components/JSRec'
import Vuerec from '@/components/VueRec'
import JSrunrec from '@/components/JSruntimeRec'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/intro',
      name: 'Introduction',
      component: Introduction
    },
    {
      path: '/map',
      name: 'MyMap',
      component: MyMap
    },
    {
      path: '/test',
      name: 'ElementUITest',
      component: ElementUITest
    },
    {
      path: '/html',
      name: 'HTMLrec',
      component: HTMLrec
    },
    {
      path: '/css',
      name: 'CSSrec',
      component: CSSrec
    },
    {
      path: '/js',
      name: 'JSrec',
      component: JSrec
    },
    {
      path: '/vue',
      name: 'Vuerec',
      component: Vuerec
    },
    {
      path: '/runtime',
      name: 'JSrunrec',
      component: JSrunrec
    }
  ]
})
export default router
