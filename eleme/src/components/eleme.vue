<template>
  <div>
    <v-header></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/rating">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
  <router-view/>
  </div>
</template>

<script>

import header from '@/components/header/header'

export default {
  name: 'eleme',
  components: {
    'v-header': header
  }
}
</script>

<style lang="scss" type="text/css">

  @import '../assets/scss/mixin';

  #app{
    .tab{
      display: flex;
      width: 100%;
      height: 40px;
      line-height: 40px;
      @include border-1px(rgba(7, 17, 27, 0.1));
      .tab-item{
        flex: 1;
        a{
          display: block;
          text-align: center;
          font-size: 14px;
          color: rgb(77, 85, 93);
        }
        .active{
          color: rgb(240, 20, 20);
        }
      }
    }
  }
</style>
