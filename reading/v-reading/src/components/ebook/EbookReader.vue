<template>
  <div class="ebook-reader">
    <div id="read">
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import Epub from 'epubjs'

global.ePub = Epub

export default {
  computed: {
    ...mapGetters(['fileName'])
  },
  mounted() {
    // const baseUrl = "http://172.20.10.8:8081/epub/";
    const fileName = this.$route.params.fileName.split('|').join('/');
    this.$store.dispatch('setFileName', fileName).then(() => {
      this.initEpub();
    })
  },
  methods: {
    initEpub(){
      const url = "http://172.20.10.8:8081/epub/" + this.fileName + '.epub';
      this.book = new Epub(url);
      this.rendition = this.book.renderTo('read', {
        width: innerWidth,
        height: innerHeight,
        method: 'default'
      })
      this.rendition.display();
    }
  },
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import '../../assets/styles/global';

</style>
