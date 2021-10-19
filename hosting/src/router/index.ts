import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import * as Pages from '../views'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Pages.Home
  },
  {
    path: '/about',
    name: 'About',
    component: Pages.About
  },
  {
    path: '/lab',
    name: 'Lab',
    component: Pages.Lab
  },
  {
    path: '/pastexam',
    name: 'PastExam',
    component: Pages.PastExam
  },
  {
    path: '/side',
    name: 'Side',
    component: Pages.Side
  },
  {
    path: '/chapter-1',
    name: 'Chapter1',
    component: Pages.Chapter1
  },
  {
    path: '/chapter-2',
    name: 'Chapter2',
    component: Pages.Chapter2
  },
  {
    path: '/chapter-3',
    name: 'Chapter3',
    component: Pages.Chapter3
  },
  {
    path: '/chapter-4-5',
    name: 'Chapter45',
    component: Pages.Chapter45
  },
  {
    path: '/chapter-6',
    name: 'Chapter6',
    component: Pages.Chapter6
  },
  {
    path: '/chapter-7',
    name: 'Chapter7',
    component: Pages.Chapter7
  },
  {
    path: '/chapter-8',
    name: 'Chapter8',
    component: Pages.Chapter8
  },
  {
    path: '/chapter-9-10',
    name: 'Chapter910',
    component: Pages.Chapter910
  },
  {
    path: '/sources',
    name: 'Sources',
    component: Pages.Sources
  },
  {
    path: '*',
    name: 'Not Found',
    component: Pages.NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to) {
    if (to.hash != null && to.hash !== '') {
      return { selector: to.hash }
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
