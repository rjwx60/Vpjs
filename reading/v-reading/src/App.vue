<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// 引入 rem 并限制大小
document.addEventListener('DOMContentLoaded', () => {
  const html = document.querySelector('html')
  let fontSize = window.innerWidth / 10
  fontSize = fontSize > 50 ? 50 : fontSize
  html.style.fontSize = fontSize + 'px'
})

import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['test'])
  },
  mounted () {
    console.log('this.book: ', this.book);
    this.$store.dispatch('setTEST', 10).then(() => {
      console.log(this.$store.state.book.test)
    })
  }
}
</script>

<style lang="scss" rel="stylesheet" scoped>
  @import './assets/styles/global.scss';
  #app{
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
</style>
