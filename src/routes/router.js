import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/home.vue'
import aboutme from '../views/aboutme.vue'
import contact from '../views/contact.vue'
import proyects from '../views/proyects.vue'
import how_i_do from '../views/how_i_do.vue'
import skillDeatall from '../views/skillDeatall.vue'  

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: aboutme },
  { path: '/contact', component: contact },
  { path: "/proyects", component: proyects },
  { path: "/how_i_do", component: how_i_do },
   {
    path: '/how_i_do/:api',
    name: 'skill-detail',
    component: skillDeatall,
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
  
  scrollBehavior(to, from, savedPosition) {
    // Mantener posición al usar back/forward
    if (savedPosition) return savedPosition

    // Siempre ir al top al cambiar de ruta
    return { top: 0 }
  },
})
