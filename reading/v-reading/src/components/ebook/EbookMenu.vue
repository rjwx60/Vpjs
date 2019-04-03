<template>
  <div>
    <transition name="slide-up">
      <div class="menu-wrapper" :class="{'hide-box-shadow': !menuVisible}" v-show="menuVisible">
        <div class="icon-wrapper">
          <span class="icon-menu" @click="showSetting(3)"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-progress" @click="showSetting(2)"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-bright" @click="showSetting(1)"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-a" @click="showSetting(0)">A</span>
        </div>
      </div>
    </transition>
    <!-- 选择字号 -->
    <ebook-setting-font></ebook-setting-font>
    <!-- 选择字体 -->
    <ebook-setting-font-popup></ebook-setting-font-popup>
  </div>
</template>

<script>
import EbookSettingFont from '../ebook/EbookSettingFont'
import EbookSettingFontPopup from '../ebook/EbookSettingFontPopup'
import { ebookMixin } from '../../utils/mixin'

export default {
  mixins: [ebookMixin],
  methods: {
    showSetting(key) {
      this.setSettingVisible(key)
    }
  },
  components: {
    EbookSettingFont,
    EbookSettingFontPopup
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import '../../assets/styles/global';
  .menu-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 200;
    display: flex;
    width: 100%;
    height: px2rem(48);
    box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, .15);
    font-size: px2rem(22);
    background: #fff;
    &.hide-box-shadow {
      box-shadow: none;
    }
    .icon-wrapper {
      flex: 1;
      @include center;
      .icon-progress {
        font-size: px2rem(24);
      }
      .icon-A {
        font-size: px2rem(20);
      }
    }
  }
</style>
