<template>
  <h1><span>404 - Not Found :(</span></h1>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ErrorView',
})
</script>

<script setup>
import { onMounted } from 'vue'

onMounted(async () => {
  const scripts = [
    'https://cdn.jsdelivr.net/npm/tsparticles@2/tsparticles.bundle.min.js',
    'https://cdn.jsdelivr.net/npm/tsparticles-path-polygon@2/tsparticles.path.polygon.min.js'
  ]
  scripts.forEach((url, key) => {
    const script = document.createElement('script')
    script.src = url
    script.className = 'particles'
    document.head.appendChild(script)
    script.onload = () => {
      if (++key == scripts.length) {
        const particles = document.createElement('script')
        particles.src = '/scripts/404.js'
        particles.className = 'particles'
        document.head.appendChild(particles)
      }
    }
  })
})
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto+Mono");

h1 {
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2196F3;
  font-family: "Roboto Mono", sans-serif;

  span {
    text-shadow: 2px 2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff, -2px -2px 0 #fff, 2px 0px 0 #fff, 0px 2px 0 #fff, -2px 0px 0 #fff, 0px -2px 0 #fff;
    padding: 0 .75rem;
    border-radius: 1em;
  }
}
</style>