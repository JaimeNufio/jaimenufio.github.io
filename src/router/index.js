import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import ResumeView from '../views/ResumeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import PetsView from '../views/PetsView.vue'
import DemosView from '../views/DemosView.vue'


const routes = [
  {
    path: '/',
    name: 'about',
    component: AboutView
  },
  {
    path: '/resume',
    name: 'resume',
    component: ResumeView
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView
  },
  {
    path: '/pets',
    name: 'pets',
    component: PetsView
  },
  {
    path: '/demos',
    name: 'demos',
    component: DemosView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
