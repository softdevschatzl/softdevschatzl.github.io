import { createRouter, createWebHistory } from 'vue-router'
import MainPortfolio from '../views/MainPortfolio.vue'
import EPortfolioMain from '../views/EPortfolioMain.vue'
import EPortfolioProject from '../views/EPortfolioProject.vue'

const routes = [
  {
    path: '/',
    name: 'MainPortfolio',
    component: MainPortfolio
  },
  {
    path: '/eportfolio',
    name: 'EPortfolio',
    component: EPortfolioMain
  },
  {
    path: '/eportfolio/project/:id',
    name: 'EPortfolioProject',
    component: EPortfolioProject,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
