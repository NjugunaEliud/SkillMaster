import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import skillsIndex from '../views/skills/skillsIndex.vue'
import skillCreate from '../views/skills/skillCreate.vue'
import skillEdit from '../views/skills/skillEdit.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/skills',
    name: 'skillsIndex',
    component: skillsIndex
  },
  {
    path: '/skillCreate',
    name: 'skillCreate',
    component: skillCreate
  },
  {
    path: '/skillEdit/:id',
    name: 'skillEdit',
    component: skillEdit,
    props:true
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
