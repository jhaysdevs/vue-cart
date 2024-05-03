import { createRouter, createWebHistory } from 'vue-router'
import Catalog from '@/views/Catalog.vue'
import ProductDetail from '@/views/ProductDetail.vue'
import Cart from '@/views/Cart.vue'
import Error from '@/views/Error.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Catalog
    },
    {
      path: '/',
      name: 'Catalog',
      component: Catalog
    },
    {
      path: '/cart',
      name: 'CartView',
      component: Cart
    },
    {
      path: '/product/:id',
      name: 'ProductView',
      component: ProductDetail
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'ErrorView',
      component: Error,
    },
  ]
})

export default router
