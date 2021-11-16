<template>
  <div id="app">
    hello world
  </div>
</template>

<script>
import xdoBrowserFilter from './packages/xdo-browser-filter/index.js'
export default {
  name: 'App',
  components: {
  },
  created() {
    xdoBrowserFilter({
      filter:{
        chrome:100,
        ie:10,
        firefox:53
      }
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
