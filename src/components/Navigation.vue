<template>
  <v-toolbar @click="clearParticles">
    <v-toolbar-title @click="router.push({ name: 'Home' })" class="site-title">
      <a class="text-black">
        VUE<span class="text-blue">CART</span>
      </a>
    </v-toolbar-title>
    <v-btn @click="router.push({ name: 'CartView' })" color="primary" variant="elevated">
      Items in Cart: {{ store.cart.length }}
    </v-btn>
  </v-toolbar>

</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Navigation',
})
</script>

<script setup>
import { useRouter } from 'vue-router'
import { productsStore } from '@/stores/products'

const router = useRouter()
const store = productsStore()

console.log('store', store)

const clearParticles = () => {
  const elements = document.querySelectorAll('[id^="tsparticles"]')
  elements.forEach(element => {
    element.remove()
  })
  const particles = document.querySelectorAll('[class="particles"]')
  particles.forEach(particle => {
    particle.remove()
  })
}
</script>

<style lang="scss" scoped>
a {
  cursor: pointer;
  text-decoration: none;

  &:visited {
    color: #333;
  }
}

nav {
  ul {
    list-style-type: none;
    padding: 0;

    li {
      display: inline;

      a {
        position: relative;
        padding: .3rem .5rem;
        font-size: 1.25rem;
        text-decoration: none;
        text-transform: uppercase;

        &:after {
          content: '';
          position: absolute;
          width: 0;
          height: 1px;
          left: 50%;
          bottom: 0;
          background-color: #2196F3;
          transition: all .3s cubic-bezier(0.76, 0, 0.24, 1);
        }

        @media (min-width:786px) {
          &:hover:after {
            width: calc(100% - 1rem);
            left: .5rem;
          }
        }
      }
    }
  }
}
</style>
