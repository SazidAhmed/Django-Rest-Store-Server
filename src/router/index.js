import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/shop/Home.vue'
import Product from '../views/shop/Product.vue'
import Details from '../views/shop/Details.vue'
import Cart from '../views/shop/Cart.vue'
import Winter from '../views/shop/Winter.vue'
import Summer from '../views/shop/Summer.vue'
import Login from '../views/auth/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/:category_slug/:product_slug',
    name: 'Details',
    component:Details
  },
  {
    path: '/summer',
    name: 'Summer',
    component:Summer
  },
  {
    path: '/winter',
    name: 'Winter',
    component:Winter
  },
  {
    path: '/login',
    name: 'Login',
    component:Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
