<template>
  <div class="ebook">
    <!-- 标题栏 -->
    <ebook-title></ebook-title>
    <!-- 阅读器 -->
    <ebook-reader></ebook-reader>
    <!-- 菜单栏 -->
    <ebook-menu></ebook-menu>
  </div>
</template>

<script>
import EbookTitle from '../../components//ebook/EbookTitle'
import EbookReader from '../../components/ebook/EbookReader'
import EbookMenu from '../../components/ebook/EbookMenu'

export default {
  components: {
    EbookTitle,
    EbookReader,
    EbookMenu
  }
}
</script>

<style lang="scss" rel="stylesheet" scoped>
  @import '../../assets/styles/global.scss';
  .ebook {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
</style>
