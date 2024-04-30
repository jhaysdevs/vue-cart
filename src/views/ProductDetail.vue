<template>
  <v-btn @click="router.push({ name: 'Catalog' })" color="primary" variant="elevated">
    Back to catalog
  </v-btn>

  <div class="product" v-if="selectedProduct">
    <div class="product-image">
      <img :src="selectedProduct.thumbnail" alt="">
    </div>
    <div class="product-details">
      <p>Brand: {{ selectedProduct.brand }}</p>
      <p>Description: {{ selectedProduct.description }}</p>
      <h2>Price: ${{ selectedProduct.price }}</h2>
      <v-btn variant="elevated" color="indigo-lighten-3" @click="addToCart">Add to cart</v-btn>
    </div>
  </div>
</template>


<script>
import { defineComponent } from "vue"
export default defineComponent({
  name: 'ProductDetails'
})
</script>

<script setup>
import { onMounted, computed } from "vue"
import { productsStore } from "@/stores/products"
import { useRoute, useRouter } from "vue-router"

const store = productsStore()
const router = useRouter()
const route = useRoute()

const selectedProduct = computed(() => {
  return store.products.find((item) => item.id === Number(route.params.id))
})

const addToCart = () => {
  console.log('selectedProduct.value', selectedProduct.value)
  store.addToCart(selectedProduct.value)
  router.push({ name: 'CartView' })
}

onMounted(async () => {
  await store.fetchProducts()
})
</script>

<style lang="scss" scoped>
.product {
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  .product-image {
    margin-right: 24px;
  }
}
</style>