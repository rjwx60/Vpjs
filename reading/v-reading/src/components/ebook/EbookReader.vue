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
      // 手势翻页
      this.rendition.on('touchstart', event => {
        this.touchStartX = event.changedTouches[0].clientX;
        this.touchStartTime = event.timeStamp;
      })
      this.rendition.on('touchend', event => {
        const offsetX = event.changedTouches[0].clientX - this.touchStartX;
        const time = event.timeStamp - this.touchStartTime;
        if (time < 500 && offsetX > 40) {
          this.prevPage();
        } else if (time < 500 && offsetX < -40) {
          this.nextPage();
        } else {
          this.toggleTitleAndMenu();
        }
        event.stopPropagation();
      })
    },
    prevPage() {
      this.rendition && this.rendition.prev();
    },
    nextPage() {
      this.rendition && this.rendition.next();
    },
    toggleTitleAndMenu() {
    }
  },
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import '../../assets/styles/global';

</style>
