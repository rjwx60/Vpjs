<template>
  <div class="ebook">
    <ebook-reader></ebook-reader>
  </div>
</template>

<script>
// 引入组件
import EbookReader from '../../components/ebook/EbookReader'

export default {
  components: {
    EbookReader
  }
}
</script>

<style lang="scss" rel="stylesheet" scoped>
  @import '../../assets/styles/global.scss';
</style>
