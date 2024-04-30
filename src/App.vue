<template>
  <header>
    <v-toolbar>
      <v-toolbar-title @click="router.push({ name: 'Catalog' })" class="site-title">
        <a>VUE</a>
        <a class="text-blue" @click="store.restore()">CART</a>
      </v-toolbar-title>
      <v-btn @click="router.push({ name: 'CartView' })" color="primary" variant="elevated">
        Items in Cart: {{ store.cart.length }}
      </v-btn>
    </v-toolbar>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import { useRouter } from "vue-router"
import { productsStore } from "@/stores/products"

const router = useRouter()
const store = productsStore()
</script>
