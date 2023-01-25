import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobsDetails from '../views/jobs/JobsDetails.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
   
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component:Jobs
  },
  {
    path: '/jobs/:id',
    name: 'JobsDetails',
    component: JobsDetails,
    props: true
  },
  
  //strona 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component:  NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
