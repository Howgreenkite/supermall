import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Profile = () => import('../views/profile/Profile.vue')

const routes = [
 {
    path: '',
    redirect: '/Home'
  },
  {
    path: '/Home',
    component: Home
  },
  {
    path: '/Category',
    component: Category
  },
  {
    path: '/Cart',
    component: Cart
  },
  
  {
    path: '/Profile',
    component: Profile
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
