<template>
  <div id="app">
    <span>abcdefg</span>
    <router-view/>
  </div>
</template>

<script>
export default {
  mounted () {
    console.log(this.$store.state.book.test)
    this.$store.dispatch('setTEST', 10).then(() => {
      console.log(this.$store.state.book.test)
    })
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const html = document.querySelector('html')
  let fontSize = window.innerWidth / 10
  fontSize = fontSize > 50 ? 50 : fontSize
  html.style.fontSize = fontSize + 'px'
})
</script>

<style>
  @import './assets/styles/global.scss';

  span{
    font-family: 'Days One'
  }
</style>
