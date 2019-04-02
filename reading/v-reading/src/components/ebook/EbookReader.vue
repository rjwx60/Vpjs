<template>
  <div class="ebook-reader">
    <div id="read">
    </div>
  </div>
</template>

<script>

import { ebookMixin } from '../../utils/mixin';
import { mapActions } from 'vuex';
import Epub from 'epubjs'

global.ePub = Epub

export default {
  mixins: [ebookMixin],
  mounted() {
    // 自定义连接符为 -
    const fileName = this.$route.params.fileName.split('-').join('/');
    this.$store.dispatch('setFileName', fileName).then(() => {
      this.initEpub();
    })
  },
  methods: {
    ...mapActions(['setMenuVisible']),
    initEpub(){
      const url = "http://192.168.31.97:8081/epub/" + this.fileName + '.epub';
      console.log('url: ', url);
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
      // 翻页后位置还原
      this.hideTitleAndMenu();
    },
    nextPage() {
      this.rendition && this.rendition.next();
      // 翻页后位置还原
      this.hideTitleAndMenu();
    },
    toggleTitleAndMenu() {
      // this.$store.dispatch('setMenuVisible', !this.menuVisible)
      this.setMenuVisible(!this.menuVisible);
    },
    hideTitleAndMenu() {
      // this.$store.dispatch('setMenuVisible', false)
      this.setMenuVisible(false);
    }
  },
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../assets/styles/global";

  .ebook-reader {
    width: 100%;
    height: 100%;
    overflow: hidden;
    .ebook-reader-mask {
      position: absolute;
      z-index: 150;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
</style>
