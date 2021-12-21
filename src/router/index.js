import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import CodeShare from '../views/CodeShare.vue'
import CodeResult from '../views/CodeResult.vue'
import ShowCode from '../views/ShowCode.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    children:[{
      path: 'codeShare',
      name: 'CodeShare',
      component: CodeShare
    },{
      path: 'codeResult',
      name: 'CodeResult',
      component: CodeResult
    },{
      path: 'showCode',
      name: 'ShowCode',
      component: ShowCode
    }
  ]
  }
]

const router = new VueRouter({
  routes
})

export default router
