<template>
  <Header></Header>
</template>

<script>
import Header from '@/components/header/Header';

export default {
  name: 'Music',
  components:{
    Header
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
