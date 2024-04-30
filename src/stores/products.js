import { defineStore } from 'pinia'

export const productsStore = defineStore('products', {
  state: () => ({
    products: [],
    cart: [],
    matched: [],
  }),

  actions: {
    fetchProducts(refresh) {
      console.log('🦴 fetchProducts()')
      const savedProducts = this.restore()
      if (!savedProducts || refresh) {
        console.log('🤗 Pulling products from https://dummyjson.com/products')
        fetch('https://dummyjson.com/products')
          .then(res => res.json())
          .then(json => {
            this.products = json.products.map(product => ({
              ...product,
              visible: true,
            }));
            this.matched = this.products
            this.save()
          })
          .catch((err) => (console.log('❗️ ERROR', err)))
      }
    },

    getProducts(product) {
      console.log('getProducts()', product)
      if (typeof product == 'string') {
        this.matched = this.products.filter(item =>
          [item.title, item.description, item.brand, item.category]
            .join()
            .toLowerCase()
            .includes(product.toLowerCase())
        )
        const visibleIDs = this.matched.map(product => product.id)
        console.log('visibleIDs', visibleIDs)
        this.products.forEach((product) => {
          product.visible = visibleIDs.includes(product.id) ? true : false
          // console.log('product', product)
        })
        return this.matched
      } else {
        return this.products.find((item) => item.id === Number(product))
      }
    },

    addToCart(product) {
      console.log('addToCart()', product)
      if (typeof product == 'number') product = this.getProducts(product)
      console.log(product)
      const currentDate = new Date()
      const dateString = currentDate.toISOString()
      product.added = dateString
      this.cart.push(product)
      this.save()
    },

    removeFromCart(id) {
      console.log('removeFromCart()', id)
      const index = this.cart.findIndex(item => item.id === id)
      this.cart = this.cart.filter((_, i) => i !== index)
      this.save()
    },

    restore() {
      console.log('restore()')
      const savedProducts = localStorage.getItem('products')
      if (savedProducts) {
        console.log('💾 Restoring products from localStorage', JSON.parse(savedProducts))
        this.$state = JSON.parse(savedProducts)
        return this.$state
      }
      return false
    },

    save() {
      console.log('save()')
      localStorage.setItem('products', JSON.stringify(this.$state))
    },
  },
})