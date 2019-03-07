<template>
  <div id="app">
    <router-view v-if="initialDataLoaded"/>
    <div v-else>
      <h1>Loading.</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      initialDataLoaded: false
    }
  },
  created () {
    this.$store.dispatch('loadInitialData').then(() => {
      this.initialDataLoaded = true
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
