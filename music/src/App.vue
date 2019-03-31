<template>
  <div id="app">
    <Header></Header>
    <Tab></Tab>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <player></player>
  </div>
</template>

<script>

import Header from '@/components/header/Header'
import Tab from '@/components/tab/tab'
import Player from '@/components/player/player'

export default {
  name: 'App',
  components:{
    Header,
    Tab,
    Player
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

