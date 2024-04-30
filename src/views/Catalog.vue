<template>
  <div class="products-list">
    <v-text-field v-model.trim="search" clearable label="Search:" prepend-icon="$vuetify"></v-text-field>
    <v-row no-gutters>
      <v-col v-for="product in store.matched" :key="product.id" cols="12" sm="4" @click="goToProductPage(product.id)">
        <product-item :product-data="product" @item-clicked="goToProductPage" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ProductItem from "@/components/ProductItem.vue";
export default defineComponent({
  name: 'CatalogView',
  components: {
    ProductItem
  }
})
</script>

<script setup>
import { onMounted, ref, watch } from "vue";
import { productsStore } from "@/stores/products";
import { useRouter } from "vue-router";

const store = productsStore()
const router = useRouter()

const search = ref('')
const searchResults = ref([])

watch(search, () => {
  console.log('watch(search)', search._value)
  const matched = store.getProducts(search._value)
  console.log('matched', matched)
})

const goToProductPage = (id) => {
  router.push({ name: 'ProductView', params: { id } })
}

onMounted(async () => {
  await store.fetchProducts()
})
</script>

<style scoped></style>