import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import FizzBuzzView from '../views/FizzBuzzView.vue'
import PortfolioMvcView from '../views/PortfolioMvcView.vue'
import GoalView from '../views/GoalView.vue'
import WorkoutView from '../views/WorkoutView.vue'
import TicTacView from '../views/TicTacView.vue'
import CompanyWebView from '../views/CompanyWebView.vue'
import ReceptListaView from '../views/ReceptListaView.vue'
import SqlReceptlistView from '../views/SqlReceptlistView.vue'
import BloggSqlView from '../views/BloggSqlView.vue'
import SqlWorkoutView from '../views/SqlWorkoutView.vue'
import ReceptApiView from '../views/ReceptApiView.vue'
import BloggApiView from '../views/BloggApiView.vue'
import PortfNodeView from '../views/PortfNodeView.vue'
import ReceptNodeView from '../views/ReceptNodeView.vue'
import RestVueView from '../views/RestVueView.vue'
import BloggVueView from '../views/BloggVueView.vue'
import TodoListView from '../views/TodoListView.vue'
import WebShopView from '../views/WebShopView.vue'
import BloggView from '../views/BloggView.vue'
import LoanView from '../views/LoanView.vue'
import TodoFeView from '../views/TodoFeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/fizzbuzz',
    name: 'fizzbuzz',
    component: FizzBuzzView
  },
  {
    path: '/portfoliomvc',
    name: 'portfoliomvc',
    component: PortfolioMvcView
  },
  {
    path: '/goal',
    name: 'goal',
    component: GoalView
  },
  {
    path: '/workout',
    name: 'workout',
    component: WorkoutView
  },
  {
    path: '/tictac',
    name: 'tictac',
    component: TicTacView
  },
  {
    path: '/companyweb',
    name: 'companyweb',
    component: CompanyWebView
  },
  {
    path: '/receptlista',
    name: 'receptlista',
    component: ReceptListaView
  },
  {
    path: '/sqlreceptlista',
    name: 'sqlreceptlista',
    component: SqlReceptlistView
  },
  {
    path: '/bloggsql',
    name: 'bloggsql',
    component: BloggSqlView
  },
  {
    path: '/sqlworkout',
    name: 'sqlworkout',
    component: SqlWorkoutView
  },
  {
    path: '/receptapi',
    name: 'receptapi',
    component: ReceptApiView
  },
  {
    path: '/bloggapi',
    name: 'bloggapi',
    component: BloggApiView
  },
  {
    path: '/portfnode',
    name: 'portfnode',
    component: PortfNodeView
  },
  {
    path: '/receptnode',
    name: 'receptnode',
    component: ReceptNodeView
  },
  {
    path: '/restvue',
    name: 'restvue',
    component: RestVueView
  },
  {
    path: '/bloggvue',
    name: 'bloggvue',
    component: BloggVueView
  },
  {
    path: '/todolist',
    name: 'todolist',
    component: TodoListView
  },
  {
    path: '/webshop',
    name: 'webshop',
    component: WebShopView
  },
  {
    path: '/blogg',
    name: 'blogg',
    component: BloggView
  },
  {
    path: '/loan',
    name: 'loan',
    component: LoanView
  },
  {
    path: '/todofe',
    name: 'todofe',
    component: TodoFeView
  },    
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
