<template>
  <div id="app">
    <Navbar></Navbar>
    <img src="img/icons/logo.png" alt="logo">logo1
    <img src="/img/icons/logo.png" alt="logo">logo2
    <router-view/>
  </div>
</template>
<script>
import  Navbar from './components/Navbar.vue'
export default {
  name: 'app',
  components: {
    Navbar
  },
  created() {
    console.log(process.env)
  }
}
</script>

<style lang="stylus">

</style>
