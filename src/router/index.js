import Vue from 'vue'
import Router from 'vue-router'
import View1 from '@/views/View1'
import View2 from '@/views/View2'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'View1',
      component: View1
    },
    {
      path: '/view2',
      name: 'View2',
      component: View2
    }
  ]
});
