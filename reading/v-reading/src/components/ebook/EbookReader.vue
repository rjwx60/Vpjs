<template>
  <div class="ebook-reader">
    <div id="read">
    </div>
  </div>
</template>

<script>

import Epub from 'epubjs'
import { ebookMixin } from '../../utils/mixin';

global.ePub = Epub

export default {
  mixins: [ebookMixin],
  mounted() {
    // 自定义连接符为 -
    const fileName = this.$route.params.fileName.split('-').join('/');
    this.setFileName(fileName).then(() => {
      this.initEpub();
    })
  },
  methods: {
    initEpub(){
      const url = "http://192.168.31.97:8081/epub/" + this.fileName + '.epub';
      this.book = new Epub(url);
      this.setCurrentBook(this.book);
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
      // 手势翻页
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
      if(this.menuVisible){
        this.setSettingVisible(-1);
      }
      // this.$store.dispatch('setMenuVisible', !this.menuVisible)
      this.setMenuVisible(!this.menuVisible);
    },
    hideTitleAndMenu() {
      if(this.menuVisible){
        this.setSettingVisible(-1);
      }
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
