<template>
  <v-sheet class="ma-2 pa-2">
    <v-card class="product">
      <v-img :src="props.productData.thumbnail" height="200px" cover />

      <v-card-title>
        {{ props.productData.brand }}
      </v-card-title>

      <v-card-subtitle>
        {{ formatCurrency(props.productData.price) }}
      </v-card-subtitle>

      <v-card-text>
        {{ props.productData.description }}
      </v-card-text>

      <v-card-actions>
        <v-btn @click="store.addToCart(props.productData.id)" color="primary" variant="elevated">
          Add to cart
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-sheet>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ProductItem',
})
</script>

<script setup>
import { productsStore } from '@/stores/products'
import { formatCurrency } from '@/utilities/formatCurrency'

const store = productsStore()

const props = defineProps({
  productData: {
    type: Object,
    required: true,
  }
})

// const emit = defineEmits(['item-clicked'])

// const goToProductPage = (productId) => {
//   emit('item-clicked', productId)
// }
</script>