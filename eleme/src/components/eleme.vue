<template>
  <div>
    <v-header :seller="seller"></v-header>
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
    <router-view :seller="seller" keep-alive></router-view>
  </div>
</template>

<script>
import {urlParse} from '@/assets/js/util';
import header from '@/components/header/header'

const ERR_OK = 0;

export default {
  name: 'eleme',
  components: {
    'v-header': header
  },
  data() {
    return {
      seller: {
          id: (() => {
            let queryParam = urlParse();
            return queryParam.id;
          })()
        }
    }
  },
  // 生命周期钩子2
  created() {
    this.$axios.get('/api/seller').then((res) => {
      res = res.data;
      if(res.errno ===  ERR_OK){
        this.seller = Object.assign({}, this.seller, res.data);

      }
    }, (err) => {
      console.log('seller data get error');
    })
  },
  // 方法集合
  methods: {

  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

  @import "../assets/stylus/mixin.styl"

  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex: 1
      text-align: center
      & > a
        display: block
        font-size: 14px
        color: rgb(77, 85, 93)
        &.active
          color: rgb(240, 20, 20)
</style>
