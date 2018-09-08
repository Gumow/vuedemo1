<template>
  <div id="app">
    <home-header></home-header>
    <div>商品列表</div>
    <Footer></Footer>
  </div>
</template>

<script>
  import HomeHeader from '../components/homeHeader'
  import Footer from '../components/Footer'

  export default {
    data () {
      return {

      }
    },
    components: {
      HomeHeader,
      Footer
    },
  }
</script>
